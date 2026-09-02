# Compartir el portal (edición en equipo)

La página se sirve **desde el mismo Apps Script** (una sola URL `/exec`), y los
datos se guardan en una **hoja de Google compartida**. Los archivos del portal
viven en **GitHub** (repo público) y Apps Script los lee de ahí. Así cualquiera
puede **editar el diseño** desde GitHub y los cambios se ven al refrescar.

> **Tus datos configurados:**
> - Compañera editora: **luisa.florez@alegra.com**
> - Hoja de datos: `1Ar_iJnO7SznuoJz-1y3VB91vI6QHt7lfNVtDof-To9w`
> - URL del portal (WEB APP): `https://script.google.com/a/macros/alegra.com/s/AKfycbz46ZvDFg7O4hXxWjeXsNTwYxZQdODR8FpDtAXbCY0tb0zeUwrnFXeLZhM3JHbrDmF1pA/exec`
> - Repo de GitHub: `https://github.com/karenpatino-ui/portal-operativo-payments`

---

## Cómo funciona

1. **GitHub** almacena los archivos del portal (`dashboard.html`, `datos.js`).
2. **Apps Script** lee esos archivos de GitHub y los sirve como web app.
3. **La hoja de datos** (Google Sheets) guarda los cambios que se hacen desde
   el portal (almuerzos, vacaciones, novedades, etc.).
4. **Para editar el diseño**: editar directamente en GitHub (clic en el lápiz ✏️
   de cada archivo) y los cambios se ven al refrescar la URL del portal.

---

## Para editar el diseño (colores, textos, layout)

1. Ve a `github.com/karenpatino-ui/portal-operativo-payments`
2. Haz clic en el archivo que quieras editar (`dashboard.html` o `datos.js`).
3. Haz clic en el **lápiz ✏️** (Edit this file).
4. Haz tus cambios y clic en **"Commit changes"** (guardar).
5. Refresca la URL del portal (**Cmd + Shift + R**) y listo.

> No hace falta tocar Apps Script ni Drive. Los cambios en GitHub se ven
> automáticamente al refrescar.

---

## Para agregar contenido desde el portal (almuerzos, vacaciones, etc.)

Solo abre la URL del portal y usa los botones de cada pestaña:
- **"+ Publicar Novedad"** → agrega una noticia.
- **"+ Nueva Solicitud"** → agrega vacaciones.
- Los cambios se guardan en la hoja `datos` y los ve todo el equipo.

---

## Si necesitas actualizar el Apps Script

1. En `script.google.com`, abre el proyecto del portal.
2. Ve a **Código.gs**, borra todo (**Cmd+A** → **Suprimir**) y pega el
   contenido de **`portal-servir.gs`** (de la carpeta del proyecto o de GitHub).
3. **Guardar** (**Cmd+S**).
4. **Implementar** → **Administrar implementaciones** → lápiz ✏️ →
   **"Nueva versión"** → **Implementar**.

> ⚠️ **OJO:** El script debe terminar con `HtmlService.createHtmlOutput(...)`
> (NO `ContentService`). Si la página aparece como código/`<!DOCTYPE html>`,
> es que quedó una versión vieja → crear **"Nueva implementación"**.

---

## Notas

- El login lo exige el dominio Alegra: quien no tenga sesión en el
  dominio ve la pantalla de Google para entrar.
- La URL del portal no cambia al actualizar el script (se reutiliza la misma).
