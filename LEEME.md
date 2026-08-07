# Payments Tracker — Guía de configuración

Centraliza **vacaciones, día de bienestar, sábados/festivos, almuerzos y formación**
en un solo dashboard HTML que se actualiza solo desde Google Sheets.

Archivos entregados:
- `dashboard.html` — el tablero (ábrelo en el navegador).
- `google-chat-bot.gs` — bot de Google Chat para avisos ("al día").

---

## 1) Sube tu Excel a Google Sheets
1. Entra a https://sheets.new (o Drive → Google Sheets).
2. Archivo → Importar → Subir → selecta tu `.xlsx` con el cronograma.
3. Déjalo como hoja nueva.

## 2) Publica como CSV (para que el HTML lo lea)
1. En esa hoja: **Archivo → Compartir → Publicar en la web**.
2. Pestaña **Vincular**.
3. En "Formato" elige **"Valores separados por comas (.csv)"**.
4. Copia la URL que aparece (termina en `/export?format=csv`).

## 3) Conecta el HTML
1. Abre `dashboard.html` con un editor.
2. Busca la línea:
   ```js
   const GOOGLE_SHEETS_CSV = "RUTA_AL_CSV_PUBLICADO";
   ```
3. Pégala la URL del CSV entre comillas.
4. Guárdalo y ábrelo en el navegador con doble clic.

> Nota: si abres el HTML desde `file://`, algunos navegadores bloquean `fetch`.
> Súbelo a un hosting gratuito (GitHub Pages, o abre con `python3 -m http.server`)
> o usa **Google Apps Script como proxy** si lo prefieres.

## 4) Edita almuerzos y formaciones
En `dashboard.html`, busca los arreglos `ALMUERZOS` y `FORMACION` y agrega tus datos:
```js
const ALMUERZOS = [ { grupo:"Turno 1", inicio:"12:00", fin:"13:30", equipo:"Payments A" } ];
const FORMACION = [ { fecha:"2026-03-10", hora:"09:00", titulo:"Novedades", facilitador:"Yasmin", grupo:"Payments", estado:"Programada" } ];
```
También puedes ajustar `FESTIVOS` (días feriados colombianos en formato `DD-MM`).

---

## 6) Bot de Google Chat (avisos automáticos)
Este bot responde "@bot quién está de vacaciones", "resumen", etc.

1. Ve a https://script.google.com → **Nuevo proyecto**.
2. Pega el contenido de `google-chat-bot.gs`.
3. En el menú **Servicios** → añade **Google Sheets API**.
4. Completa `SHEET_ID` (el ID del libro, sale de la URL del Google Sheets)
   y `SHEET_NAME`.
5. **Implementaciones → Nueva implementación → App web**:
   - Tipo: "App web"
   - Ejecutar como: "Yo"
   - Quién tiene acceso: "Cualquier persona"
   Copia la URL `/exec`.
6. En Google Chat: crea un espacio y **Añade bot** configurando la URL de la
   implementación. Ya puedes preguntarle.

---

## ¿Quieres avisos diarios automáticos?
En el Apps Script (bot) añade un **Desencadenador (trigger)** de tiempo
cada mañana que llame a una función de envío. Pídeme el conjunto completo si
quieres que el bot **empuje** el mensaje al espacio (mensajes proactivos) en
lugar de solo responder y no olvides habilitar `GmailApp` para el envío.