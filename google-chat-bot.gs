/**
 * Bot de Google Chat — "Payments Alerta"
 * ---------------------------------------------------------------------
 * Responde a @mensajes en tu espacio y puede publicar el resumen diario.
 *
 * INSTALACIÓN:
 *  1) https://script.google.com → Nuevo proyecto → pega este código.
 *  2) Añade "Google Sheets API" en Servicios (si usas SpreadsheetApp).
 *  3) Edita SHEET_ID / SHEET_NAME / columnas según tu libro.
 *  4) Implementación → Nueva → tipo "App web", acceso "Cualquier persona".
 *     Copia la URL /exec.
 *  5) Crea espacio de Google Chat → añade el bot con esa URL.
 */

/* ================= CONFIG ================= */
const SHEET_ID    = '';     // pega el ID de tu Google Sheet
const SHEET_NAME  = 'respuestas'; // o la hoja con tu historial
const COL_NOMBRE  = 1;      // B = persona
const COL_ESTADO  = 2;      // C = estado
const COL_MES     = 3;      // D = mes
const COL_INICIO  = 4;      // E = inicio vacaciones
const COL_FIN     = 5;      // F = fin vacaciones
const COL_REGRESO = 6;      // G = regreso

/* ================= PUNTO DE ENTRADA ================= */
function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  const msg  = (body.message && body.message.text || '').toLowerCase();
  let reply;

  if (/quien.*vacacion|quien esta|de vaca/i.test(msg)) {
    reply = resumenHoy();
  } else if (/resumen|al dia|al dia/i.test(msg)) {
    reply = resumenHoy();
  } else if (/festiv/i.test(msg)) {
    reply = '📅 Revisa el calendario del dashboard (festivos 2026 ya definidos).';
  } else {
    reply = '🤖 **Payments Alerta** — pregúntame: "quién está de vacaciones", "resumen", "al día" o "festivos".';
  }

  return ContentService
    .createTextOutput(JSON.stringify({ text: reply }))
    .setMimeType(ContentService.MimeType.JSON);
}

/* ================= LÓGICA ================= */
function leerRegistros() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
  return sheet.getDataRange().getValues();
}

function filasVacaciones() {
  const rows = leerRegistros();
  const out = [];
  rows.forEach(r => {
    const estado = String(r[COL_ESTADO] || '').toLowerCase();
    if (!/disfr|aprob|valid|solicit/i.test(estado)) return;
    const ini = fecha(r[COL_INICIO]);
    const fin = fecha(r[COL_FIN]);
    if (!ini || !fin) return;
    out.push({ nombre: r[COL_NOMBRE], estado, ini, fin, regreso: r[COL_REGRESO] });
  });
  return out;
}

function resumenHoy() {
  const hoy = new Date();
  const lista = filasVacaciones().filter(v => v.ini <= hoy && hoy <= v.fin);
  let t = '📋 *Resumen ' + hoy.toLocaleDateString('es-CO');
  t += lista.length
    ? '\n🌴 De vacaciones hoy:\n' + lista.map(v => '• ' + v.nombre + ' (vuelve ' + v.regreso + ')').join('\n')
    : '\n🌴 Ninguno de vacaciones hoy.';
  return t;
}

/* ================================= UTILIDADES ================================= */
function fecha(v) {
  if (Object.prototype.toString.call(v) === '[object Date]' && !isNaN(v)) return v;
  const m = String(v).match(/(\d{1,2})-(\d{1,2})-(\d{2,4})/);
  if (!m) return null;
  let yy = m[3]; if (yy.length === 2) yy = '20' + yy;
  return new Date(+yy, +m[2] - 1, +m[1]);
}