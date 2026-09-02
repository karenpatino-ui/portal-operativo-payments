/* =====================================================================
   Portal — Sincronización compartida (Google Sheets vía Apps Script)
   =====================================================================
   Este script convierte UNA hoja de Google en el "cuaderno compartido"
   de la página. Guarda cada conjunto de datos del portal como una fila:

     Clave            | Valor (JSON)         | Autor              | Actualizado
     ---------------- + -------------------- + ------------------ + --------------
     kPortalCrono     | {...}                | karen@alegra.com   | 2026-08-11
     almuerzosPortal  | {...}                | milena@alegra.com  | 2026-08-11
     kPortalNovedades | [...]                | ...                | ...
     kPortalVacaciones| {...}                | ...                | ...
     kPortalFormacionMeses | [...]           | ...                | ...
     kPortalFestivos2 | [...]                | ...                | ...

   CÓMO USARLO (ver COMPARTIR.md):
   1. En script.google.com → Nuevo proyecto → pega este archivo.
   2. Configura HOJA_ID (el ID del libro de Google Sheets, o arraiga el
      script a la hoja con "Extensiones → Apps Script" desde la hoja).
   3. Ejecuta la función semilla() una vez para preparar la pestaña.
   4. Implementar → Nueva implementación → App web:
        - Ejecutar como: "Yo"
        - Quién tiene acceso: "Cualquier persona"
      Copia la URL que termina en /exec y pégala en dashboard.html
      (constante PORTAL_SYNC_URL).
   ===================================================================== */

var HOJA_DATOS = 'datos';
var HOJA_ID = '1Ar_iJnO7SznuoJz-1y3VB91vI6QHt7lfNVtDof-To9w'; // ID de la hoja del portal

function misHoja() {
  try {
    var a = SpreadsheetApp.getActiveSpreadsheet();
    if (a) return a;
  } catch (e) {}
  if (HOJA_ID) return SpreadsheetApp.openById(HOJA_ID);
  throw new Error('Configura HOJA_ID en portal-sync.gs o arráigalo a la hoja.');
}

/* ---------- Lectura: la página pide todo (o una clave) ---------- */
function doGet(e) {
  var sh = misHoja().getSheetByName(HOJA_DATOS) || misHoja().insertSheet(HOJA_DATOS);
  if (e && e.parameter && e.parameter.clave) {
    return texto(getVal(sh, e.parameter.clave));
  }
  var data = sh.getDataRange().getValues();
  var out = {};
  for (var i = 1; i < data.length; i++) {
    if (data[i][0]) out[String(data[i][0])] = String(data[i][1]);
  }
  return json(out);
}

/* ---------- Escritura: la página envía {clave, valor, autor} ---------- */
function doPost(e) {
  var p = (e && e.parameter) || {};
  var clave = String(p.clave || '').trim();
  var valor = String(p.valor || '');
  var autor = String(p.autor || '');
  if (!clave) return json({ ok: false, error: 'sin clave' });
  if (autor && !/^[\w.\-+]+@alegra\.com$/i.test(autor)) {
    return json({ ok: false, error: 'correo no autorizado' });
  }
  var sh = misHoja().getSheetByName(HOJA_DATOS) || misHoja().insertSheet(HOJA_DATOS);
  setVal(sh, clave, valor, autor);
  return json({ ok: true });
}

/* ---------- Utilidades de la hoja ---------- */
function getVal(sh, clave) {
  var data = sh.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]) === clave) return String(data[i][1]);
  }
  return '';
}
function setVal(sh, clave, valor, autor) {
  var data = sh.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]) === clave) {
      sh.getRange(i + 1, 2).setValue(valor);
      sh.getRange(i + 1, 3).setValue(autor);
      sh.getRange(i + 1, 4).setValue(new Date());
      return;
    }
  }
  sh.appendRow([clave, valor, autor, new Date()]);
}

function json(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
function texto(s) {
  return ContentService.createTextOutput(s).setMimeType(ContentService.MimeType.TEXT);
}

/* Pulsa ▶ sobre semilla en el editor para preparar la pestaña "datos". */
function semilla() {
  var sh = misHoja().getSheetByName(HOJA_DATOS) || misHoja().insertSheet(HOJA_DATOS);
  if (sh.getLastRow() === 0) sh.appendRow(['clave', 'valor', 'autor', 'actualizado']);
  sh.setName(HOJA_DATOS);
  Logger.log('Pestaña "' + HOJA_DATOS + '" lista.');
}