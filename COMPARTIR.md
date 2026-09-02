# Compartir el portal (edición en equipo)

La página se sirve **desde el mismo Apps Script** (una sola URL `/exec`), y los
datos se guardan en una **hoja de Google compartida**. Que la página y los datos
vivan en la misma dirección evita los bloqueos del dominio Alegra y hace que dos
o más personas puedan **editar y agregar** desde su navegador con solo entrar.

> **Tus datos configurados:**
> - Compañera editora: **luisa.florez@alegra.com**
> - Hoja de datos: `1Ar_iJnO7SznuoJz-1y3VB91vI6QHt7lfNVtDof-To9w`
> - URL del portal (WEB APP): **AKfycbz46ZvDFg7O4hXxWjeXsNTwYxZQdODR8FpDtAXbCY0tb0zeUwrnFXeLZhM3JHbrDmF1pA**

---

## Paso 1 — Sube los 2 archivos a Google Drive

1. Entra a **drive.google.com** → botón **+ Nuevo** → **Subir archivo**.
2. Sube estos 2 archivos de la carpeta del proyecto (puedes dejarles el mismo
   nombre, el script los reconoce):
   - **`dashboard.html`**
   - **`datos.js`**
3. (Opcional) Si ya los tenías en Drive de antes, no hace falta repetir.

---

## Paso 2 — Actualiza el Apps Script (`portal-servir.gs`)

En **script.google.com**, abre el proyecto `portal-sync`:

1. En el editor, ve al archivo **Código.gs** (o Code.gs), borra todo
   (**Cmd+A** → **Suprimir**) y pega el contenido de **`portal-servir.gs`**
   (archivo que está en la carpeta del proyecto).
2. **Guardar** (**Cmd+S**).
3. Arriba a la derecha: botón azul **"Implementar"** → flechita → **Administrar
   implementaciones** → clic en el **lápiz ✏️** de la Web app → en **Versión**
   elige **"Nueva versión"** → **Implementar** (mantiene la misma URL `/exec`).
4. Si pide **autorización**: Aceptar → tu cuenta → Avanzado → Ir a
   portal-sync (no seguro) → Permitir.

> ⚠️ **IMPORTANTE (lección aprendida):**
> - El archivo que se pega es **`portal-servir.gs`** — **NO** `portal-sync.gs`
>   (ese es el método viejo y rompe la página).
> - El script debe terminar con `HtmlService.createHtmlOutput(...)` (NO
>   `ContentService`): `ContentService` sirve la página por
>   `script.googleusercontent.com/echo` y el navegador la muestra como
>   texto plano). Si la página aparece como código/`<!DOCTYPE html>`, es que
>   quedó una versión vieja implementada → crear **"Nueva implementación"**.

---

## Paso 3 — Prueba la URL compartida

1. Abre tu URL `/exec` (la misma de antes):
   `https://script.google.com/a/macros/alegra.com/s/.../exec`
2. Debe verse el portal **sin pantalla de login extra** (ya entras con tu
   sesión de Alegra), con tu nombre arriba.
3. Entra a **Almuerzos** y cambia un turno. Luego abre tu **hoja de Google** →
   pestaña **`datos`** → debe aparecer una fila `almuerzosPortal`.
4. Comparte la URL `/exec` con Luisa; cuando ella la abra (con su sesión de
   Alegra) verá los mismos datos.

---

## Cómo funciona después

- **Página y datos en la misma dirección** → sin bloqueos de dominio, sin CORS.
- Todo cambio se guarda en la hoja (y en el navegador). Al reabrir, se
  descarga lo compartido.
- **Para actualizar la app** (cuando cambies `dashboard.html` o `datos.js` en
  tu Mac): vuelve a **subir los 2 archivos a Drive** (o reemplázalos con
  "Subir versión nueva" en Drive). Los usuarios solo refrescan la URL.

---

## Paso 4 — Editar el DISEÑO del portal (cambiar cómo se ve la página)

Editar "cómo se ve" (colores, textos, layout) se hace **en los archivos**,
no desde la página. Ya están compartidos con Luisa con permiso de **Editor**:

1. **Compartir los archivos** (una vez): en `drive.google.com`, clic derecho
   sobre `dashboard.html` y `datos.js` → **Compartir** → correo de Luisa →
   cambio a **"Editor"** → **Enviar**.
2. **Para editar**: Luisa abre `drive.google.com`, ve los archivos, los
   **descarga** (clic derecho → Descargar), los edita en su computadora con un
   editor de texto, y vuelve a subirlos con **clic derecho → Administrar
   versiones → Subir versión nueva**.
3. Para ver los cambios: **refrescar la URL del portal** (**Cmd + Shift + R**).

> ⚠️ Al subir una versión nueva, el portal usa automáticamente **el archivo más
> reciente** (el servidor lo detecta solo). No hace falta tocar Apps Script.

## Notas

- El punto de partida de los datos son los valores que vienen en `datos.js`;
  los cambios que se hagan desde ahora en adelante se comparten.
- El login lo exige el dominio Alegra: quien no tenga sesión en el
  dominio ve la pantalla de Google para entrar.