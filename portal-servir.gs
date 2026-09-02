/* =====================================================================
   Portal — SERVIR + sincronización compartida (Apps Script web app)
   =====================================================================
   Este script hace DOS cosas en la misma dirección (/exec):

     A) SIRVE la página del portal: lee "portal-dashboard.html" y
        "portal-datos.js" desde tu Google Drive, los combina e inyecta tu
        sesión de Alegra. Así todos entran con una sola URL y sin bloqueos.

     B) API de datos: la página guarda/lee en la hoja de calculo (pestaña
        "datos"), en la misma dirección → sincronización compartida.

   CONFIGURACIÓN:
     1. Sube a Drive (drive.google.com → Nuevo → Subir archivo) los 2
        archivos de la carpeta del proyecto:
          - dashboard.html  → cámbiale el nombre a  portal-dashboard.html
          - datos.js        → cámbiale el nombre a  portal-datos.js
     2. Pega este código en Code.gs de tu proyecto de Apps Script.
     3. Implementar → Administrar implementaciones → editar la Web app →
        "Versión: Nueva versión" → Implementar (conserva la misma URL).
        Autoriza cuando lo pida.
   ===================================================================== */

var HOJA_ID = '1Ar_iJnO7SznuoJz-1y3VB91vI6QHt7lfNVtDof-To9w';

var PORTAL_HTML_NOMBRES  = ['portal-dashboard.html', 'dashboard.html'];
var PORTAL_DATOS_NOMBRES = ['portal-datos.js', 'datos.js'];

/* ---------- Hoja de datos ---------- */
function hoja() {
  try { var a = SpreadsheetApp.getActiveSpreadsheet(); if (a) return a; } catch (e) {}
  return SpreadsheetApp.openById(HOJA_ID);
}
function hojaDatos() { return hoja().getSheetByName('datos') || hoja().insertSheet('datos'); }

/* ---------- API ---------- */
function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.op === 'all') {
    var out = {};
    var data = hojaDatos().getDataRange().getValues();
    for (var i = 1; i < data.length; i++) {
      if (data[i][0]) out[String(data[i][0])] = String(data[i][1]);
    }
    return json(out);
  }
  if (p.op === 'limpiar') { hojaDatos().clear(); hojaDatos().appendRow(['clave','valor','autor','actualizado']); return json({ ok:true }); }
  return servirPortal();
}

function doPost(e) {
  var p = (e && e.parameter) || {};
  if (p.op === 'set') return guardarClave(p);
  return json({ ok: false, error: 'op' });
}

function guardarClave(p) {
  if (!p.clave) return json({ ok: false, error: 'sin clave' });
  if (p.autor && !/^[\w.\-+]+@alegra\.com$/i.test(String(p.autor))) return json({ ok: false, error: 'correo' });
  var sh = hojaDatos();
  var d = sh.getDataRange().getValues();
  for (var i = 1; i < d.length; i++) {
    if (String(d[i][0]) === p.clave) {
      sh.getRange(i + 1, 2).setValue(p.valor);
      sh.getRange(i + 1, 3).setValue(p.autor || '');
      sh.getRange(i + 1, 4).setValue(new Date());
      return json({ ok: true });
    }
  }
  sh.appendRow([p.clave, p.valor, p.autor || '', new Date()]);
  return json({ ok: true });
}

/* ---------- Servir la página ---------- */
function servirPortal() {
  var html  = textoDe(PORTAL_HTML_NOMBRES);
  var datos = textoDe(PORTAL_DATOS_NOMBRES);

  var usuario = { email: '', name: '', picture: '' };
  try {
    var em = Session.getActiveUser().getEmail();
    if (em && String(em).toLowerCase().indexOf('@alegra.com') >= 0) {
      usuario.email = String(em).toLowerCase();
      var partes = usuario.email.split('@')[0].split('.');
      usuario.name = partes.map(function(x){ return x.charAt(0).toUpperCase() + x.slice(1); }).join(' ');
    }
  } catch (e2) {}

  var sesion = '<script>window.SESION_SERVIDA=' + JSON.stringify(usuario) + ';</script>';
  /* Reemplaza la etiqueta <script src="datos.js..." > (o data.js) por la sesión
     + el contenido de datos.js. Si por algún motivo no la encuentra, inyecta
     SESION_SERVIDA justo después de <body> para no quedar en la pantalla de login. */
  var re = /<script\s+src="(?:datos|data)\.js[^"]*"><\/script>/gi;
  if (re.test(html)) {
    html = html.replace(re, sesion + '<script>' + datos + '</script>');
  } else {
    html = html.replace(/<body[^>]*>/i, '$&' + sesion + '<script>' + datos + '</script>');
  }
  /* HtmlService garantiza que el navegador renderice la página como web app
     (ContentService deja la URL en script.googleusercontent.com/echo y a veces
     el navegador la muestra como texto plano). */
  return HtmlService.createHtmlOutput(html);
}

function textoDe(nombres) {
  var elMejor = null, elFecha = -1;
  for (var j = 0; j < nombres.length; j++) {
    var it = DriveApp.getFilesByName(nombres[j]);
    while (it.hasNext()) {
      var f = it.next();
      try {
        var ts = f.getLastUpdated().getTime();
        if (ts > elFecha) { elFecha = ts; elMejor = f; }
      } catch (e3) {
        if (!elMejor) elMejor = f;
      }
    }
  }
  if (elMejor) return elMejor.getBlob().getDataAsString();
  throw new Error('No encuentro en tu Drive ninguno de: ' + nombres.join(' o ') + '. Súbelos desde la carpeta del proyecto.');
}

/* ---------- Utilidades ---------- */
function json(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}