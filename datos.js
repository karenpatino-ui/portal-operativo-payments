/* =====================================================================
   DATOS CENTRALIZADOS DEL PORTAL  ·  Edita UNICAMENTE este archivo.
   dashboard.html ya no contiene datos; todo se carga desde window.DATOS.
   ===================================================================== */

/* =====================================================================
   CONFIGURACIÓN DE ACCESO (Google Sign-In)
   ---------------------------------------------------------------------
   Requiere que crees la credencial OAuth en Google Cloud Console.
   Pasos:
     1) https://console.cloud.google.com  →  "API y Servicios" → "Credenciales".
     2) "Crear credenciales" → "ID de cliente de OAuth 2.0" →  "Aplicación Web".
     3) En "Orígenes de JavaScript autorizados" agrega la URL desde la que
        abres el portal, p. ej.:  http://localhost:8080   (y/o el dominio real).
     4) Copia el "Client ID" (termina en  .apps.googleusercontent.com)  y
        pégalo aquí abajo.
   --------------------------------------------------------------------- */
window.DATOS = {
  /* --- Acceso institucional --- */
  "googleClientId": "956041777477-kcofd81roru41matbu90nih1sstqalt6.apps.googleusercontent.com",
  "dominioPermitido": "alegra.com",
  /* ================================================================= */
  "meta": {
    "actualizado": "2026-08-07",
    "nota": "Datos centrales del portal. Edita este archivo; no toques dashboard.html."
  },
  "equipo": [
    "Karen Patiño",
    "Milena Fernandez",
    "Juselfy Gomez",
    "Luisa Florez",
    "Jorman Coronado",
    "Alexandra Lopez",
    "Yasmin Puentes",
    "Alvaro Cardenas",
    "Yohanna Moreno"
  ],
  "novedades": [
    {
      "fecha": "2026-08-04",
      "producto": "Tiempos de respuesta chat",
      "que": "Les comparto información clave sobre el manejo de tiempos en el canal de CHAT 💬para casos que quedan en seguimiento o escalamiento:\n\n⏱️ Flujo de Tiempos Actual (Obligatorio):\n1️⃣ Primer seguimiento (45 minutos):\nInicia cuando el caso queda en seguimiento o escalamiento.\nA los 45 minutos debe enviarse la primera actualización al usuario (respuesta final o informarle que el caso sigue en validación).\n\n2️⃣ Segundo seguimiento (2 horas después del primero):\nSi el caso continúa abierto, corren 2 horas a partir del primer seguimiento.\nLlegado este punto, se debe ejecutar una de las siguientes opciones para cerrar el chat:\nOpción A (Resuelto): Solución enviada + encuesta de satisfacción + cierre de chat.\nOpción B (Pendiente): Creación de ticket + información del ticket al usuario + cierre de chat.\n\n⚠️ Información Crítica y Recomendaciones:\nImpacto: Recuerden que incumplir en cualquiera de estos tiempos está tipificado como error crítico para calidad.\nCubrimiento de Almuerzos: El analista que retoma el turno de la tarde debe asumir los seguimientos correspondientes. Sin embargo, el analista que cubre el almuerzo debe hacer un breve empalme antes de retirarse para evitar que se venzan los tiempos de ningún caso.\nAutomatizaciones: Para no dejar estos procesos a la memoria, ya se solicitó al equipo de RevOps la automatización de 3 flujos:\nSeguimiento cuando el usuario deja de responder.\nSeguimiento de 45 min y 2 horas (pendientes por parte del analista).\nSeguimiento de cierres.\n\nEstas automatizaciones deben quedar listas en el transcurso del mes de agosto. Mientras se implementan, debemos mantener un control riguroso e independiente de nuestros tiempos.",
      "canal": "tmd-quality-payments-ce",
      "hilo": "https://chat.google.com/room/AAQAuObDV1I/d1aDtgcZyiI/d1aDtgcZyiI?cls=10",
      "video": "",
      "autor": "Equipo"
    },
    {
      "fecha": "2026-07-22",
      "producto": "validación Devolución por Retención en la Fuente",
      "que": "En este documento tienen a la mano la info de los documentos que adjuntan los usuarios. Para buscar el comprobante se tiene en cuenta el titular de la cuenta, pueden revisarlo para buscarlo.",
      "canal": "tt-payments-ce",
      "hilo": "https://chat.google.com/room/AAQAksmn8Ec/4ulmDoybMN0/4ulmDoybMN0?cls=10",
      "video": "https://docs.google.com/spreadsheets/d/1dZw2VgH3z42GxVuKrafyEfiQEiAcQ1iMtWI7JyoEMl4/edit?gid=552348396#gid=552348396",
      "autor": "Equipo"
    },
    {
      "fecha": "2026-07-03",
      "producto": "Aumento de precios",
      "que": "Queremos darles contexto y herramientas clave sobre el aumento de precios que se está implementando en varias de nuestras versiones. El objetivo es que todo el equipo esté alineado para orientar a los usuarios con la mejor empatía y manejo, sin importar el canal de atención. Dejó por acá un vídeo explicativo del Playbook resumido que se creó como Dashboard para ser más prácticos  Aumento de Precios 2026 \n\n🚀 ¿Por qué cambia el precio?\nEste ajuste responde al incremento anual estándar del mercado, sin embargo, en la comunicación con el usuario siempre resaltamos el valor agregado: las novedades y funcionalidades que se han sumado a su versión. Pero en Wikialegra también pueden encontrar más detalle para que puedan dar una mirada 👀. \n\n📚 1. Información Detallada por País (WikiAlegra)\nEl equipo de Pricing documentó en WikiAlegra las razones del aumento, tablas de precios nuevos y los productos que NO se ven afectados. Consúltenlos aquí:\n\n🇨🇴 [Enlace COL]\n🇵🇪 [Enlace PER]\n🇵🇦 [Enlace PAN]\n🇦🇷 [Enlace ARG]\n\nℹ️ Estas son las versiones oficiales que ya tienen cambio en la landing y se han venido enviando comunicados, las demás versiones nos van informando.\n\n🪜 2. Ruta de Retención: ¿Qué hacer si el usuario no está de acuerdo?\nPara cuidar la experiencia del usuario y evitar que se vaya, aplicaremos estos 4 escalones de validación en orden:\n\nEscalón 1️⃣ | Diagnóstico: Indaga el motivo de su inconformidad. Recuérdale con empatía que muchos usuarios no tenían cambios hace más de un año, que es un ajuste de mercado y destaca las mejoras de la plataforma.\n\nEscalón 2️⃣ | Downgrade: Si el precio le resulta muy alto, evalúa sus necesidades actuales y ofrécele un plan menor que aún cubra sus funciones esenciales.\n\nEscalón 3️⃣ | Sesión de beneficios: (⚠️ Aún NO disponible. Pricing nos avisará si se activa y cómo sería el flujo). Consiste en agendar una sesión para revisar su plan y mostrarle el valor de sus funcionalidades.\n\nEscalón 4️⃣ | Descuentos de retención: Aplica descuentos (de 3 a 6 meses máximo). El % dependerá de su antigüedad y qué tan crítico sea el caso. También por aquí te dejó lo documentado en WikiAlegra de parte de Pricing: \n👉 [Retención COL] 🇨🇴| [Retención PER] 🇵🇪 | [Retención PAN] 🇵🇦 | [Retención ARG] 🇦🇷\n\n⏱️ 3. Tu Salvavidas en Vivo: ¡El Playbook Resumido!\nComo sabemos que con el usuario en línea el tiempo es oro, desde el equipo de Payments les armamos este [Enlace de Dashboard con el Playbook Resumido].\n\nAhí encontrarán el resumen rápido por versión y una sección de Preguntas Frecuentes que vale la pena leer con calma para estar listos.\n\n💡 Datos clave de última hora:\n¿Quién puede aplicar los cupones? Cualquier analista de CE, siempre y cuando se hayan validado y respetado los escalones mencionados.\n\nPaíses ya informados: 🇨🇴 COL, 🇵🇪 PER, 🇦🇷 ARG, 🇵🇦 PAN.\n\nPaíses pendientes por definición: 🇨🇷 CRI, 🇩🇴 DOM, 🇲🇽 MEX (Pricing nos avisará pronto) y se actualizará el Dashboard Playbook\n\n¡Muchas gracias por su apoyo para cuidar a nuestros usuarios en este proceso!",
      "canal": "tt-ce",
      "hilo": "https://chat.google.com/room/AAQAKX2Fbko/JjHqiaYeNVM/JjHqiaYeNVM?cls=10",
      "video": "https://docs.google.com/videos/d/1d686Os0dixqhfRU8r3GqyDhiYSi78lbU8eQtamaVsNM/play#scene=id.p",
      "autor": "Equipo"
    },
    {
      "fecha": "2026-07-03",
      "producto": "Actualización en la Matriz de Calidad - CE",
      "que": "Les informamos que hemos realizado un ajuste en los tiempos de escalamiento, seguimiento y reporte de la solución de issues dentro de nuestra matriz. El criterio ha cambiado de días hábiles a días calendario, quedando de la siguiente manera:\n\n🔖 Nuevo criterio de tiempos: A partir de ahora, todos los plazos se contabilizarán en días calendario. Esto con el objetivo de alinearnos correctamente con las métricas del Tablero de Seguimientos compartido por @Omar Jimenez \n\nSalvedad: Si la fecha límite calculada llega a caer en un fin de semana (sábado o domingo), el vencimiento se trasladará automáticamente al siguiente día hábil (lunes).\nEjemplo: Si un issue tiene un tiempo de respuesta que vence el sábado, la fecha límite oficial para su gestión será el día lunes.\n\n🚨Importante🚨\nEste cambio entra en vigencia para la gestión y medición de todos los issues a partir de este momento. Pueden consultar el detalle de la matriz actualizada en el siguiente enlace: Matriz de Issues.\n\n¡Sigamos brindando la mejor experiencia y manteniendo nuestros niveles de servicio!",
      "canal": "Tt-ce-news",
      "hilo": "https://chat.google.com/room/AAQAO3w9Vp4/pndkUKDWwN4/pndkUKDWwN4?cls=10",
      "video": "",
      "autor": "Equipo"
    },
    {
      "fecha": "2026-06-11",
      "producto": "Novedades de Producto",
      "que": "Novedades (funcionalidades nuevas) • Descarga de CFDI desde el SAT cuando el periodo supera los 500 documentos 🇲🇽",
      "canal": "Tt-ce-news",
      "hilo": "https://chat.google.com/room/AAQAO3w9Vp4/a_UvHF81IUQ/a_UvHF81IUQ?cls=10",
      "video": "",
      "autor": "Equipo"
    },
    {
      "fecha": "2026-05-05",
      "producto": "UUID",
      "que": "Ese UUID es otro identificador que usamos para empresas o usuarios desde el lado del desarrollo, y se vuelve particularmente importante con el uso de microservicios, especialmente al migrar partes de el monolito de AC. Esta opción puede ser útil para los casos de soporte que puedan surgir y que requieran la asistencia de un desarrollador, ya que puede simplificar la búsqueda de la empresa o usuario en cuestión. Por ejemplo, en un caso de soporte, un usuario solicita ayuda con una empresa y proporciona su ID. Si es así, el desarrollador debe buscar ese ID en la base de datos para obtener el UUID. Luego, usando el UUID, el desarrollador puede revisar el microservicio correspondiente.",
      "canal": "tts-payments-ce",
      "hilo": "https://chat.google.com/room/AAQAksmn8Ec/gqr4XYkeeSk/gqr4XYkeeSk?cls=10",
      "video": "",
      "autor": "Equipo"
    },
    {
      "fecha": "2026-05-05",
      "producto": "Actualización en la Matriz de Calidad - CE",
      "que": "¿El analista saludó al cliente de manera adecuada y se presenta con su nombre en el primer contacto?\" Se agregó el numeral 5 de N/A: Cuando la intervención del analista tenga como único objetivo ejecutar el protocolo de cierre por inactividad o abandono, siempre que el mensaje no incluya nuevas preguntas de diagnóstico, validaciones técnicas o compromisos de seguimiento. Si el analista intenta retomar la gestión técnica, deberá presentarse según el protocolo estándar. Recuerden que todos sus feedback son muy importantes, los invitamos a tener este ajuste en cuenta en sus evaluaciones. Cualquier duda estamos atentos.",
      "canal": "Tt-ce-news",
      "hilo": "https://chat.google.com/room/AAQAO3w9Vp4/we5aiuX3iig/we5aiuX3iig?cls=10",
      "video": "",
      "autor": "Equipo"
    },
    {
      "fecha": "2026-04-13",
      "producto": "Campos obligatorios y formatos para datos de facturación por versión",
      "que": "Hola equipo, buenos días ☺️ @todos @Saidy Carrión \n\nLes comparto la documentación con el detalle de los campos obligatorios y los formatos en los que deben registrarse los datos de facturación 🧾, junto con información adicional relevante para cada sociedad.\n\nComo saben, actualmente contamos con algunas limitaciones en la mayoría de las sociedades para la modificación de facturas de meses anteriores ⚠️, por lo que es importante tenerlo en cuenta en la gestión de estos casos.\n\nAdicional, ya solicité la actualización del flujo incorporando las nuevas sociedades 🔄.\n\nQuedo atenta a cualquier comentario \n\n Doc Billing-Requisitos por sociedades.docx",
      "canal": "tp-billing-support",
      "hilo": "https://chat.google.com/room/AAQAglCIxA0/Tf0xJW_Adys/Tf0xJW_Adys?cls=10",
      "video": "",
      "autor": "Equipo"
    },
    {
      "fecha": "2026-04-08",
      "producto": "Link de Pagos",
      "que": "Hola @todos 👋 Espero que estén muy bien.\n\nLes contamos que a partir de hoy el formulario de Links de Pago tendrá un cambio importante:\n\n🔹 Ahora solo permite generar links cuando se seleccionan múltiples productos.\n🔹 Si necesitan generar un link para un solo producto, deben hacerlo directamente desde el microservicio (panel nuevo).\n\n👉 ¿Cómo hacerlo?\n\nIngresar al panel\nBuscar el ID de la company\nIr a Detalles del cobro\nSeleccionar “Agregar link de pago”\n\n📌 El acceso está habilitado para los equipos de Sales y Payments.\nSi no ven la opción de generar el link, es probable que no tengan permisos.\n\n👉 En ese caso, por favor gestionarlo con su líder para que solicite los accesos al equipo de Conversion.\n\nY les aparecera el siguiente mensaje cuando intenten generar un link de solo 1 producto 👇\n\n¡Gracias! 🚀",
      "canal": "tp-payu-support",
      "hilo": "https://chat.google.com/room/AAQACen0ObY/9TYXt79C1a4/9TYXt79C1a4?cls=10",
      "video": "",
      "autor": "Equipo"
    },
    {
      "fecha": "2026-04-08",
      "producto": "Cupones Eliminados por Cross",
      "que": "📢📢📢 Información IMPORTANTE - CUPONES ELIMINADOS \n\nTeam, el equipo de Collection realizó auditoría de los descuentos de cross-selling. Durante este proceso, ajustaron cupones según la cantidad de productos que tiene cada usuario, de acuerdo con el modelo definido. Asimismo, se eliminaron los cupones en los casos donde no correspondía. Estos cambios se aplicaron únicamente a usuarios que recibieron el cupón antes de 31/12/2025.\n\nSe relaciona Sheets de los usuarios que se les eliminó o cambio el cupón por si tenemos comunicación de usuarios por este motivo  Resultado descuento Cross",
      "canal": "SH-Collection- top",
      "hilo": "",
      "video": "",
      "autor": "Equipo"
    },
    {
      "fecha": "2026-03-23",
      "producto": "CRI",
      "que": "Hola equipo ☺️ @todos \n\nDesde Collection-Billing les compartimos una novedad importante:\n\nEl 1° de abril se realizará la migración a facturación local con comprobante fiscal para los usuarios de Costa Rica 🇨🇷 en relación con el pago de sus suscripciones. 🎉\n\nEs importante tener en cuenta que:\nEl cobro continuará realizándose a través de Stripe CAN en moneda USD.\nLa factura ahora será electrónica y también se emitirá en USD con el impuesto.\n\nPor este motivo, enviaremos un comunicado esta semana a los usuarios solicitando la actualización de sus datos de facturación, con el fin de asegurar que sus facturas se emitan correctamente.\n\nEn caso de que no actualicen la información, la factura se emitirá como consumidor final.\n\nLa fecha límite para actualizar los datos: 31/03.\n\nMe ayudan revisando el copy de las notificaciones, por favor 🙏🏼\nhttps://linear.app/alegra/issue/COMMS-105/notificacion-migracion-a-facturacion-local-sociedad-cri\n\nQuedamos atentos a dudas",
      "canal": "tms-cri",
      "hilo": "https://chat.google.com/room/AAQA0mef6wU/-7hOftU9hFY/-7hOftU9hFY?cls=10",
      "video": "",
      "autor": "Equipo"
    },
    {
      "fecha": "2026-03-18",
      "producto": "PayU",
      "que": "¡Hola, equipo! Espero que estén muy bien. 🥰\n\nQuiero compartirles que se lanzó a producción la nueva modalidad para generar links de pago para usuarios en Colombia desde el microservicio (panel). Este es un avance importante, ya que no solo se activarán los planes automáticamente, sino que se cargará de inmediato la transacción. Esto aliviará el dolor actual de los equipos de Sales, Payments y Collection.\n\nEste es un proyecto que se trabajó de la mano entre Collection y Conversion. 🩷\n\nEste MVP tiene algunas consideraciones:\n\nLa opción solo aparecerá para usuarios que tengan en la metadata el gateway de Yuno.\nSe activará bajo las mismas condiciones: Premium/Contador mensual y CORE anualidades. Es importante que sean usuarios nuevos y que no tienen método de pago (tarjeta) - cualquier cosa por fuera, lo revisamos como se hace normalmente.\nEn el mismo cuadro que se muestra, aparecerá el link al final.\nPodrán identificar que se realizó un pago por enlace, ya que en el ítem de transacciones aparecerá una nueva columna llamada \"Origen\", con la observación \"Link de Pago\".\n\nIMPORTANTE: Ya no se debe usar el formulario anterior, todos deben ser generados desde el microservicio.\n\n¡Quedo atento a cualquier duda o comentario!",
      "canal": "tp-payu-support",
      "hilo": "https://chat.google.com/room/AAQACen0ObY/tTwZ19CnFP4/tTwZ19CnFP4?cls=10",
      "video": "N/a",
      "autor": "Equipo"
    },
    {
      "fecha": "2026-01-20",
      "producto": "Soporte en la Web",
      "que": "Les traigo una pequeña actualización sobre el nuevo centro de ayuda para nuestros usuarios:\n \n Dominicana: Ya se encuentra activo 🇩🇴✅\n Colombia: Se estará implementando al cierre de esta semana al 100% 🇨🇴🔜\n Costa Rica: Ya se encuentra implementado ✅",
      "canal": "tt-ce-news",
      "hilo": "https://chat.google.com/room/AAQAO3w9Vp4/rgFJAlkiijQ/rgFJAlkiijQ?cls=10",
      "video": "https://docs.google.com/videos/d/15Fjd6M8PYyVM8U0n2BJI-c529Beya6bCQleGNfSU-5o/play",
      "autor": "Equipo"
    },
    {
      "fecha": "2026-01-20",
      "producto": "Eliminación de Cuentas",
      "que": "proceso oficial de eliminación de cuentas: \nEste proceso es obligatorio, aplica para todas las solicitudes de eliminación de cuenta, y tiene como objetivo asegurar el cumplimiento de normativas de protección de datos y lineamientos legales.\n\n🔒 Puntos clave a tener en cuenta:\n\nLa solicitud solo es válida si proviene del correo del usuario administrador.\nNo aplica eliminación si la cuenta tiene documentos electrónicos emitidos, sin excepción.\nEl proceso requiere doble confirmación del usuario.\nEl analista no elimina cuentas: su rol es validar, documentar, crear la tarea al equipo de Legal y escalar.\nTodas las gestiones se realizan únicamente por ticket.\nEl canal oficial de escalamiento es  tp-accountdelete-ce-sales.",
      "canal": "tt-ce-news",
      "hilo": "https://chat.google.com/room/AAQAO3w9Vp4/vm5yny88iZ8/vm5yny88iZ8?cls=10",
      "video": "",
      "autor": "Equipo"
    },
    {
      "fecha": "2026-01-09",
      "producto": "Cobro Segunda Tarjeta\n\nCRI - MEX",
      "que": "La semana pasada tuvimos una salida exitosa de 4000 usuarios seleccionados entre CRI y MEX🥳\n-Los usuarios seleccionados cumplian con el requisito de tener mas de 2 metodos de pagos diferentes registrados-\n\nHasta ahora 328 usuarios han entrado al flujo y se cobraron exitosamente 90, lo que nos da aprox un 27% de usuarios que fueron retenidos de chun involuntario con el cobro automatico por 2da tarjeta🚀 (@Mario Valdez aqui cualquier cosa me corriges de lo que puedes ver en los reportes)\n\n‼️Next Steps\nEn este sentido, vamos a ir masificando de a pocos las versiones. empezando con MEX y CRI. \nEsto quiere decir que, ahora todos los usuarios de MEX y CRI que en algun momento registren un 2MP entraran al flujo de cobro de segunda tarjeta cuando el MP principal falle. Asimismo las mejoras de las comunicaciones se mostraran para los que tienen 1 MP como de 2MP a mas, es decir, para todos los usuarios que entren al flujo de reintento de cobro.",
      "canal": "pr-secondary-card-charge",
      "hilo": "https://chat.google.com/room/AAQA5EB14uA/88FLvw_xA58/88FLvw_xA58?cls=10",
      "video": "",
      "autor": "Equipo"
    },
    {
      "fecha": "2026-01-08",
      "producto": "Factura Alegra\n\nTodas las Versiones",
      "que": "les queremos contar que ya tenemos en produccion el Historial de facturas🥳\n\nUna nueva pantalla donde los usuarios pueden consultar las facturas que Alegra les emite por sus pagos de suscripción.\n\n🎯 Objetivo\nReducir tickets de soporte relacionados con solicitudes de facturas.\nDar mayor autonomía a los usuarios para consultar sus comprobantes.\n👥 Target\nTodos los usuarios\nTodas las versiones\n🔗 Acceso https://mi.alegra.com/profile\n\nAquí les dejo un video con el flujo completo",
      "canal": "sh-conversion",
      "hilo": "https://chat.google.com/room/AAQAeWDNUd4/4e9D02FFNGw/4e9D02FFNGw?cls=10",
      "video": "https://docs.google.com/videos/d/13XukYt-H225LRbMTiUB5CqF3wO2sP1JopZHyB_vdjig/play",
      "autor": "Equipo"
    },
    {
      "fecha": "2025-12-19",
      "producto": "COL",
      "que": "Soporte Prioritario - Audiencia: Colombia (Nuevos usuarios, Upgrades, Segmento Core, Planes Pyme en adelante). - $19.900",
      "canal": "tm-alegra",
      "hilo": "https://chat.google.com/room/AAQAxwGHW-k/wslxl0ull6w/wslxl0ull6w?cls=10",
      "video": "",
      "autor": "Equipo"
    },
    {
      "fecha": "2025-12-19",
      "producto": "Calidad",
      "que": "Actualización en la matriz de calidad - ¿El analista documentó correctamente el caso (incluyendo notas, tiempos, validaciones, etc.)?",
      "canal": "tt-ce-news",
      "hilo": "https://chat.google.com/room/AAQAO3w9Vp4/UwVvjIasNMM/UwVvjIasNMM?cls=10",
      "video": "",
      "autor": "Equipo"
    },
    {
      "fecha": "2025-12-12",
      "producto": "Cambio en PP ESP, CRI, INT, USA, CHL, PER, PAN y ARG",
      "que": "las versiones de ESP, CRI, INT, USA, CHL, PER, PAN y ARG ya fueron migradas al pipeline de Customer Support",
      "canal": "tt-ce-news",
      "hilo": "https://chat.google.com/room/AAQAO3w9Vp4/gDkW1EWPfvw/gDkW1EWPfvw?cls=10",
      "video": "",
      "autor": "Equipo"
    },
    {
      "fecha": "2025-12-04",
      "producto": "Cambios en Chat",
      "que": "Paso por aquí para contarles que la versión de ARG 🇦🇷 ya fue migrada a AC-chat_sup, por favor, no realicemos más traslados a ARG-chat_sup. \n \n Les cuento que la versión de INT 🌐 ya fue migrada a AC-chat_sup, por favor, no realicemos más traslados a INT-chat_sup. ❌",
      "canal": "tt-ce-news",
      "hilo": "https://chat.google.com/room/AAQAO3w9Vp4/R9B7z__FKkg/R9B7z__FKkg?cls=10",
      "video": "",
      "autor": "Equipo"
    },
    {
      "fecha": "2025-12-04",
      "producto": "POS - Restaurantes",
      "que": "Lanzamientos para POS - Restaurantes. Módulo adicional",
      "canal": "tt-ce-news",
      "hilo": "Vídeo: https://docs.google.com/videos/d/1IQ6FuLjOeDJ8qnjaZdTNt6ayYEk4uKXY_NTRogFxV2c/play#scene=id.p",
      "video": "",
      "autor": "Equipo"
    },
    {
      "fecha": "2025-02-18",
      "producto": "Colletion",
      "que": "Enlace de pago temporal",
      "canal": "tts-payments-ce",
      "hilo": "https://chat.google.com/room/AAQAksmn8Ec/uZ0VVKFvSMM/uZ0VVKFvSMM?cls=10",
      "video": "",
      "autor": "Equipo"
    },
    {
      "fecha": "2025-02-04",
      "producto": "Cobro Segunda Tarjeta\n\nARG y PER",
      "que": "Estamos en producción para ARG y PER para el cobro automático a segunda tarjeta 🚀",
      "canal": "pr-secondary-card-charge",
      "hilo": "https://chat.google.com/room/AAQA5EB14uA/bIAPVvrgnmk/bIAPVvrgnmk?cls=10",
      "video": "-",
      "autor": "Equipo"
    },
    {
      "fecha": "2025-01-23",
      "producto": "Ya NO es necesario dar clic en crear customer en Stripe",
      "que": "Les comento que ya no es necesario dar clic en crear customer en Stripe antes de generar un enlace de pago desde el nuevo formulario que se usa. Es una mejora que desde Conversion hicieron, junto con la gestión de @Valeria Herrera. 🩷\n\nEstaremos atentos a que funcione correctamente y, ante cualquier duda, nos comentan.\n\nPara las excepciones como enlaces con retención en la fuente y las que incluyan Premium NE, las cuales se realizan usando el comando /generateLinkPayU, los agentes deben seguir creando el customer desde el microservicio.",
      "canal": "tp-payu-support",
      "hilo": "https://chat.google.com/room/AAQACen0ObY/khPySH4gqqk/khPySH4gqqk?cls=10",
      "video": "No",
      "autor": "Equipo"
    },
    {
      "fecha": "2025-01-23",
      "producto": "Integraciones de pagos en Alegra POS.",
      "que": "recordatorio clave sobre las integraciones de pagos en Alegra POS. \nActualmente, estas son nuestras integraciones activas:\nPagos digitales: Wompi y Nequi.\nDatáfonos: Únicamente contamos con integración para Bold.\n\nEs muy importante tener presente que Bold es la única integración activa para datáfonos en este momento. Si un usuario desea conectar un dispositivo de otra entidad (como Redeban), no podrá hacerlo directamente con el POS. En esos casos, deberá registrar sus cobros de manera manual en el sistema.\n\nCualquier duda, nos leemos en el canal  tp-pos-support :thankyou:",
      "canal": "tt-ce",
      "hilo": "https://chat.google.com/room/AAQAKX2Fbko/h2TMkjjGFsw/h2TMkjjGFsw?cls=10",
      "video": "No",
      "autor": "Equipo"
    },
    {
      "fecha": "2025-01-23",
      "producto": "Reunión General / Quincenal",
      "que": "Los que no pudieron ingresar hoy a la reunión quincenal general, les dejó por acá algunos de los puntos de los que tome nota mencionados por Jorge Soto, para estar en contexto, así mismo en sus correos ya tienen la grabación para que la puedan ver...\n* Semana de OKR, definición en todas las capas\n* Se viene Ola Facturación Electrónica en DOM, más de 250.000 empresas obligadas hacer facturación electrónica, entonces el objetivo para Sales traer usuarios DOM\n* Foco en Experiencia Contadores \"soporte\"\n* Hay que ser eficientes, más uso de IA \n* Es bueno que aumenten los usuarios, aumente el ingreso, pero ser eficientes con mejoras, uso de IA y no apuntar tanto a crecer en recursos. Eso es eficiencia\nJorge, mencionó respecto a las salidas de personas en Alegra que se han evidenciado, son movimientos normales de rotación porque llegan oportunidades, retos de emprender, querer cambiar, etc, Alegra siempre estará presto a  brindar lo mejor y respeta las decisiones de cada persona porque hace parte del crecimiento personal y profesional.\n* Importante en los 1a1 o en el espacio que deseen solicitar con sus líderes mencionar si algo esta incomodando, proponer alternativas, cambios, etc, sin olvidar que es responsabilidad de cada uno aprovechar las oportunidades, capacitarse, estudiar, aprovechar IA, proponer, innovar, todo en pro de sumar en el equipo donde se encuentren.\n/// Objetivos para 2026\n* Crecer 50% en ingreso\n* Cerrar el año con 78.000 Logos",
      "canal": "tts-payments-ce",
      "hilo": "https://chat.google.com/room/AAQAksmn8Ec/Aa73t20iKuQ/Aa73t20iKuQ?cls=10",
      "video": "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox/FMfcgzQfBZdVzcbMSZnwvGqnNXKntjnD?projector=1",
      "autor": "Equipo"
    }
  ],
  "cronograma": {
    "agentes": [
      "Karen Patiño",
      "Milena Fernandez",
      "Juselfy Gomez",
      "Luisa Florez",
      "Jorman Coronado",
      "Alexandra Lopez",
      "Yasmin Puentes",
      "Alvaro Cardenas",
      "Yohanna Moreno"
    ],
    "asignaciones": {
      "2026-08-03": {
        "Karen Patiño": "Phone",
        "Milena Fernandez": "PP",
        "Juselfy Gomez": "Phone",
        "Luisa Florez": "Phone",
        "Jorman Coronado": "Chat",
        "Alexandra Lopez": "PP",
        "Yasmin Puentes": "PP",
        "Alvaro Cardenas": "Phone",
        "Yohanna Moreno": "PP"
      },
      "2026-08-04": {
        "Karen Patiño": "Chat",
        "Milena Fernandez": "Phone",
        "Juselfy Gomez": "Phone",
        "Luisa Florez": "Phone",
        "Jorman Coronado": "PP",
        "Alexandra Lopez": "Phone",
        "Yasmin Puentes": "PP",
        "Alvaro Cardenas": "PP",
        "Yohanna Moreno": "PP"
      },
      "2026-08-05": {
        "Karen Patiño": "Phone",
        "Milena Fernandez": "Phone",
        "Juselfy Gomez": "Chat",
        "Luisa Florez": "PP",
        "Jorman Coronado": "Phone",
        "Alexandra Lopez": "PP",
        "Yasmin Puentes": "Phone",
        "Alvaro Cardenas": "PP",
        "Yohanna Moreno": "PP"
      },
      "2026-08-06": {
        "Karen Patiño": "Phone",
        "Milena Fernandez": "Phone",
        "Juselfy Gomez": "Phone",
        "Luisa Florez": "Phone",
        "Jorman Coronado": "Chat",
        "Alexandra Lopez": "PP",
        "Yasmin Puentes": "PP",
        "Alvaro Cardenas": "PP",
        "Yohanna Moreno": "PP"
      },
      "2026-08-07": {
        "Karen Patiño": "Phone",
        "Milena Fernandez": "Phone",
        "Juselfy Gomez": "Chat",
        "Luisa Florez": "Phone",
        "Jorman Coronado": "VAC",
        "Alexandra Lopez": "PP",
        "Yasmin Puentes": "PP",
        "Alvaro Cardenas": "Phone",
        "Yohanna Moreno": "PP"
      },
      "2026-08-08": {},
      "2026-08-09": {},
      "2026-08-10": {},
      "2026-08-11": {
        "Karen Patiño": "Chat",
        "Milena Fernandez": "Phone",
        "Juselfy Gomez": "Phone",
        "Luisa Florez": "Phone",
        "Jorman Coronado": "VAC",
        "Alexandra Lopez": "PP",
        "Yasmin Puentes": "Phone",
        "Alvaro Cardenas": "PP",
        "Yohanna Moreno": "PP"
      },
      "2026-08-12": {
        "Karen Patiño": "Phone",
        "Milena Fernandez": "Phone",
        "Juselfy Gomez": "Phone",
        "Luisa Florez": "Phone",
        "Jorman Coronado": "VAC",
        "Alexandra Lopez": "PP",
        "Yasmin Puentes": "PP",
        "Alvaro Cardenas": "Chat",
        "Yohanna Moreno": "PP"
      },
      "2026-08-13": {
        "Karen Patiño": "Phone",
        "Milena Fernandez": "Phone",
        "Juselfy Gomez": "Phone",
        "Luisa Florez": "Chat",
        "Jorman Coronado": "VAC",
        "Alexandra Lopez": "PP",
        "Yasmin Puentes": "PP",
        "Alvaro Cardenas": "PP",
        "Yohanna Moreno": "PP"
      },
      "2026-08-14": {
        "Karen Patiño": "Phone",
        "Milena Fernandez": "PP",
        "Juselfy Gomez": "Phone",
        "Luisa Florez": "Phone",
        "Jorman Coronado": "VAC",
        "Alexandra Lopez": "Phone",
        "Yasmin Puentes": "Chat",
        "Alvaro Cardenas": "PP",
        "Yohanna Moreno": "PP"
      },
      "2026-08-15": {
        "Karen Patiño": "Phone",
        "Milena Fernandez": "Phone",
        "Juselfy Gomez": "Phone",
        "Luisa Florez": "PP",
        "Jorman Coronado": "VAC",
        "Alexandra Lopez": "PP",
        "Yasmin Puentes": "PP",
        "Alvaro Cardenas": "Phone",
        "Yohanna Moreno": "PP"
      },
      "2026-08-16": {
        "Jorman Coronado": "VAC"
      },
      "2026-08-17": {
        "Jorman Coronado": "Chat"
      },
      "2026-08-18": {},
      "2026-08-19": {
        "Karen Patiño": "Phone",
        "Milena Fernandez": "Chat",
        "Juselfy Gomez": "Phone",
        "Luisa Florez": "Phone",
        "Jorman Coronado": "Phone",
        "Alexandra Lopez": "PP",
        "Yasmin Puentes": "PP",
        "Alvaro Cardenas": "PP",
        "Yohanna Moreno": "PP"
      },
      "2026-08-20": {
        "Karen Patiño": "Phone",
        "Milena Fernandez": "Phone",
        "Juselfy Gomez": "Chat",
        "Luisa Florez": "Phone",
        "Jorman Coronado": "PP",
        "Alexandra Lopez": "Phone",
        "Yasmin Puentes": "PP",
        "Alvaro Cardenas": "PP",
        "Yohanna Moreno": "PP"
      },
      "2026-08-21": {
        "Karen Patiño": "PP",
        "Milena Fernandez": "Phone",
        "Juselfy Gomez": "Phone",
        "Luisa Florez": "Phone",
        "Jorman Coronado": "Chat",
        "Alexandra Lopez": "PP",
        "Yasmin Puentes": "Phone",
        "Alvaro Cardenas": "PP",
        "Yohanna Moreno": "PP"
      },
      "2026-08-22": {
        "Karen Patiño": "Phone",
        "Milena Fernandez": "Phone",
        "Juselfy Gomez": "Phone",
        "Luisa Florez": "Chat",
        "Jorman Coronado": "PP",
        "Alexandra Lopez": "Phone",
        "Yasmin Puentes": "PP",
        "Alvaro Cardenas": "PP",
        "Yohanna Moreno": "PP"
      },
      "2026-08-23": {},
      "2026-08-24": {},
      "2026-08-25": {
        "Karen Patiño": "Phone",
        "Milena Fernandez": "Phone",
        "Juselfy Gomez": "PP",
        "Luisa Florez": "Phone",
        "Jorman Coronado": "Chat",
        "Alexandra Lopez": "PP",
        "Yasmin Puentes": "Phone",
        "Alvaro Cardenas": "PP",
        "Yohanna Moreno": "PP"
      },
      "2026-08-26": {
        "Karen Patiño": "Phone",
        "Milena Fernandez": "PP",
        "Juselfy Gomez": "Phone",
        "Luisa Florez": "Phone",
        "Jorman Coronado": "Chat",
        "Alexandra Lopez": "PP",
        "Yasmin Puentes": "PP",
        "Alvaro Cardenas": "Phone",
        "Yohanna Moreno": "PP"
      },
      "2026-08-27": {
        "Karen Patiño": "Phone",
        "Milena Fernandez": "Phone",
        "Juselfy Gomez": "Phone",
        "Luisa Florez": "Phone",
        "Jorman Coronado": "Chat",
        "Alexandra Lopez": "PP",
        "Yasmin Puentes": "PP",
        "Alvaro Cardenas": "PP",
        "Yohanna Moreno": "PP"
      },
      "2026-08-28": {
        "Karen Patiño": "Chat",
        "Milena Fernandez": "Phone",
        "Juselfy Gomez": "Phone",
        "Luisa Florez": "Phone",
        "Jorman Coronado": "Phone",
        "Alexandra Lopez": "PP",
        "Yasmin Puentes": "PP",
        "Alvaro Cardenas": "PP",
        "Yohanna Moreno": "Día C"
      },
      "2026-08-29": {
        "Karen Patiño": "Phone",
        "Milena Fernandez": "Phone",
        "Juselfy Gomez": "Phone",
        "Luisa Florez": "Phone",
        "Jorman Coronado": "Chat",
        "Alexandra Lopez": "PP",
        "Yasmin Puentes": "PP",
        "Alvaro Cardenas": "PP",
        "Yohanna Moreno": "VAC"
      },
      "2026-08-30": {},
      "2026-08-31": {}
    }
  },
  "vacaciones": [
    {
      "agente": "Yasmin Puentes",
      "estado": "Disfrutadas",
      "inicio": "2026-01-08",
      "dias": 6
    },
    {
      "agente": "Karen Patiño",
      "estado": "Disfrutadas",
      "inicio": "2026-01-30",
      "dias": 1
    },
    {
      "agente": "Alexandra Lopez",
      "estado": "Disfrutadas",
      "inicio": "2026-01-19",
      "dias": 9
    },
    {
      "agente": "Jorman Coronado",
      "estado": "Disfrutadas",
      "inicio": "2026-02-24",
      "dias": 13
    },
    {
      "agente": "Yasmin Puentes",
      "estado": "Disfrutadas",
      "inicio": "2026-06-09",
      "dias": 8
    },
    {
      "agente": "Alvaro Cardenas",
      "estado": "Aprobadas",
      "inicio": "2026-06-30",
      "dias": 4
    },
    {
      "agente": "Alexandra Lopez",
      "estado": "Aprobadas",
      "inicio": "2026-07-06",
      "dias": 6
    },
    {
      "agente": "Jorman Coronado",
      "estado": "Solicitadas",
      "inicio": "2026-08-10",
      "dias": 5
    },
    {
      "agente": "Karen Patiño",
      "estado": "Solicitadas",
      "inicio": "2026-08-20",
      "dias": 2
    },
    {
      "agente": "Yohanna Moreno",
      "estado": "Aprobadas",
      "inicio": "2026-08-31",
      "dias": 5
    }
  ],
  "bienestar": [
    {
      "agente": "Karen Patiño",
      "fecha": "2026-05-08",
      "estado": "Disfrutado"
    },
    {
      "agente": "Alexandra Lopez",
      "fecha": "2026-06-30",
      "estado": "Disfrutado"
    },
    {
      "agente": "Jorman Coronado",
      "fecha": "2026-03-13",
      "estado": "Disfrutado"
    },
    {
      "agente": "Yasmin Puentes",
      "fecha": "2026-05-11",
      "estado": "Disfrutado"
    },
    {
      "agente": "Alvaro Cardenas",
      "fecha": "2026-05-29",
      "estado": "Disfrutado"
    },
    {
      "agente": "Milena Fernandez",
      "fecha": "2026-04-21",
      "estado": "Disfrutado"
    },
    {
      "agente": "Yohanna Moreno",
      "fecha": "2026-05-08",
      "estado": "Disfrutado"
    },
    {
      "agente": "Juselfy Gomez",
      "fecha": "2026-05-22",
      "estado": "Disfrutado"
    },
    {
      "agente": "Luisa Florez",
      "fecha": "2026-06-26",
      "estado": "Disfrutado"
    },
    {
      "agente": "Yohanna Moreno",
      "fecha": "2026-08-28",
      "estado": "Aprobado"
    },
    {
      "agente": "Jorman Coronado",
      "fecha": "2026-09-02",
      "estado": "Aprobado"
    }
  ],
  "almuerzos": {
    "bloques": [
      "11:00 - 12:30",
      "11:30 - 13:00",
      "12:00 - 13:30",
      "12:30 - 14:00",
      "13:00 - 14:30",
      "13:30 - 15:00"
    ],
    "canales": [
      "Phone",
      "Chat",
      "PP"
    ],
    "plantilla": [
      {
        "nombre": "Yasmin Puentes",
        "canal": "Phone",
        "novedad": ""
      },
      {
        "nombre": "Karen Patiño",
        "canal": "Phone",
        "novedad": ""
      },
      {
        "nombre": "Jorman Coronado",
        "canal": "Phone",
        "novedad": ""
      },
      {
        "nombre": "Milena Fernandez",
        "canal": "Phone",
        "novedad": ""
      },
      {
        "nombre": "Juselfy Gomez",
        "canal": "Chat",
        "novedad": ""
      },
      {
        "nombre": "Alvaro Cardenas",
        "canal": "PP",
        "novedad": ""
      },
      {
        "nombre": "Alexandra Lopez",
        "canal": "PP",
        "novedad": ""
      },
      {
        "nombre": "Luisa Florez",
        "canal": "PP",
        "novedad": ""
      },
      {
        "nombre": "Yohanna Moreno",
        "canal": "PP",
        "novedad": ""
      }
    ],
    "dias": {
      "2026-08-06": [
        {
          "nombre": "Milena Fernandez",
          "canal": "Phone",
          "novedad": ""
        },
        {
          "nombre": "Juselfy Gomez",
          "canal": "Phone",
          "novedad": ""
        },
        {
          "nombre": "Luisa Florez",
          "canal": "Phone",
          "novedad": ""
        },
        {
          "nombre": "Karen Patiño",
          "canal": "Chat",
          "novedad": "CW"
        },
        {
          "nombre": "Yasmin Puentes",
          "canal": "PP",
          "novedad": "Cubre phone de 1:30 pm a 3:00 pm"
        },
        {
          "nombre": "Jorman Coronado",
          "canal": "PP",
          "novedad": "Cubre chat de 1:00 pm a 2:30 pm"
        },
        {
          "nombre": "Alexandra Lopez",
          "canal": "PP",
          "novedad": "CW"
        },
        {
          "nombre": "Alvaro Cardenas",
          "canal": "PP",
          "novedad": "CW"
        },
        {
          "nombre": "Yohanna Moreno",
          "canal": "PP",
          "novedad": "Cubre PP de 1:30 pm a 3:00 pm"
        }
      ]
    }
  },
  "formacion": [
    {
      "key": "2026-02",
      "titulo": "Febrero 2026",
      "semanas": [
        {
          "titulo": "Semana 2",
          "fechas": "10–15 feb"
        },
        {
          "titulo": "Semana 3",
          "fechas": "16–22 feb"
        },
        {
          "titulo": "Semana 4",
          "fechas": "23–28 feb"
        }
      ],
      "agentes": [
        {
          "agente": "Karen Patiño",
          "semanas": [
            "8:30|jue",
            "9:00|lun",
            "9:30|lun"
          ]
        },
        {
          "agente": "Milena Fernandez",
          "semanas": [
            "9:30|mar",
            "8:30|mié",
            "11:00|vie"
          ]
        },
        {
          "agente": "Juselfy Gomez",
          "semanas": [
            "8:30|mié",
            "10:00|jue",
            "9:30|mié"
          ]
        },
        {
          "agente": "Alexandra Lopez",
          "semanas": [
            "",
            "10:30|vie",
            "8:30|vie"
          ]
        },
        {
          "agente": "Yasmin Puentes",
          "semanas": [
            "9:30|mié",
            "15:30|mar",
            "10:30|mar"
          ]
        },
        {
          "agente": "Alvaro Cardenas",
          "semanas": [
            "10:30|vie",
            "9:30|mié",
            "9:00|jue"
          ]
        }
      ]
    },
    {
      "key": "2026-04",
      "titulo": "Abril 2026",
      "semanas": [
        {
          "titulo": "Semana 1",
          "fechas": "6–12 abr"
        },
        {
          "titulo": "Semana 2",
          "fechas": "13–19 abr"
        },
        {
          "titulo": "Semana 3",
          "fechas": "20–26 abr"
        },
        {
          "titulo": "Semana 4",
          "fechas": "27–30 abr"
        }
      ],
      "agentes": [
        {
          "agente": "Karen Patiño",
          "semanas": [
            "",
            "",
            "11:30|jue",
            "3:00|jue"
          ]
        },
        {
          "agente": "Milena Fernandez",
          "semanas": [
            "8:30|vie",
            "10:30|mié",
            "9:30|lun",
            "3:30|lun"
          ]
        },
        {
          "agente": "Juselfy Gomez",
          "semanas": [
            "9:00|mar",
            "10:00|mar",
            "10:30|mié",
            "9:00|mar"
          ]
        },
        {
          "agente": "Luisa Florez",
          "semanas": [
            "8:30|jue",
            "8:30|vie",
            "9:30|mar",
            "3:30|lun"
          ]
        },
        {
          "agente": "Jorman Coronado",
          "semanas": [
            "10:30|jue",
            "10:30|jue",
            "3:30|mié",
            "3:00|mar"
          ]
        },
        {
          "agente": "Alexandra Lopez",
          "semanas": [
            "8:30|mié",
            "2:00|vie",
            "11:00|vie",
            "10:00|mié"
          ]
        },
        {
          "agente": "Yasmin Puentes",
          "semanas": [
            "10:30|mié",
            "3:00|jue",
            "3:30|jue",
            "10:00|mar"
          ]
        },
        {
          "agente": "Alvaro Cardenas",
          "semanas": [
            "15:00|mar",
            "3:00|mié",
            "9:30|vie",
            "10:30|jue"
          ]
        },
        {
          "agente": "Yohanna Moreno",
          "semanas": [
            "",
            "4:00|mar",
            "4:30|jue",
            "4:00|mié"
          ]
        }
      ]
    },
    {
      "key": "2026-05",
      "titulo": "Mayo 2026",
      "semanas": [
        {
          "titulo": "Semana 1",
          "fechas": "4–10 may"
        },
        {
          "titulo": "Semana 2",
          "fechas": "11–17 may"
        },
        {
          "titulo": "Semana 3",
          "fechas": "18–24 may"
        },
        {
          "titulo": "Semana 4",
          "fechas": "25–31 may"
        }
      ],
      "agentes": [
        {
          "agente": "Karen Patiño",
          "semanas": [
            "8:30|jue",
            "10:30|lun",
            "10:00|mar",
            "9:00|mié"
          ]
        },
        {
          "agente": "Milena Fernandez",
          "semanas": [
            "10:00|vie",
            "8:30|lun",
            "8:30|jue",
            "10:00|mar"
          ]
        },
        {
          "agente": "Juselfy Gomez",
          "semanas": [
            "8:30|mié",
            "8:30|mar",
            "8:30|mar",
            "9:00|lun"
          ]
        },
        {
          "agente": "Luisa Florez",
          "semanas": [
            "9:30|jue",
            "10:00|mar",
            "3:30|vie",
            "10:00|mar"
          ]
        },
        {
          "agente": "Jorman Coronado",
          "semanas": [
            "3:00|mar",
            "8:30|jue",
            "8:30|mié",
            "8:30|jue"
          ]
        },
        {
          "agente": "Alexandra Lopez",
          "semanas": [
            "3:30|vie",
            "10:00|vie",
            "3:30|jue",
            ""
          ]
        },
        {
          "agente": "Yasmin Puentes",
          "semanas": [
            "3:30|jue",
            "9:30|mié",
            "10:00|vie",
            "8:30|mar"
          ]
        },
        {
          "agente": "Alvaro Cardenas",
          "semanas": [
            "9:30|mar",
            "3:30|mié",
            "8:30|vie",
            "10:00|lun"
          ]
        },
        {
          "agente": "Yohanna Moreno",
          "semanas": [
            "3:30|mié",
            "4:00|mar",
            "3:30|mié",
            "3:30|mar"
          ]
        }
      ]
    },
    {
      "key": "2026-06",
      "titulo": "Junio 2026",
      "semanas": [
        {
          "titulo": "Semana 1",
          "fechas": "1–8 jun"
        },
        {
          "titulo": "Semana 2",
          "fechas": "9–15 jun"
        },
        {
          "titulo": "Semana 3",
          "fechas": "16–21 jun"
        },
        {
          "titulo": "Semana 4",
          "fechas": "22 jun – 3 jul"
        }
      ],
      "agentes": [
        {
          "agente": "Karen Patiño",
          "semanas": [
            "8:30|vie",
            "8:30|mar",
            "10:00|vie",
            "10:00|vie"
          ]
        },
        {
          "agente": "Milena Fernandez",
          "semanas": [
            "8:30|mié",
            "8:30|jue",
            "10:00|mié",
            "8:30|mié"
          ]
        },
        {
          "agente": "Juselfy Gomez",
          "semanas": [
            "8:30|mar",
            "10:30|jue",
            "",
            "8:30|mar"
          ]
        },
        {
          "agente": "Luisa Florez",
          "semanas": [
            "11:00|lun",
            "8:30|vie",
            "10:00|mar",
            "9:00|lun"
          ]
        },
        {
          "agente": "Jorman Coronado",
          "semanas": [
            "8:30|jue",
            "9:45|jue",
            "3:00|jue",
            "8:30|vie"
          ]
        },
        {
          "agente": "Alexandra Lopez",
          "semanas": [
            "10:30|lun",
            "10:30|jue",
            "3:30|vie",
            "10:30|lun"
          ]
        },
        {
          "agente": "Yasmin Puentes",
          "semanas": [
            "10:30|mar",
            "",
            "",
            "10:30|mar"
          ]
        },
        {
          "agente": "Alvaro Cardenas",
          "semanas": [
            "9:30|vie",
            "10:30|mié",
            "10:00|jue",
            "10:30|vie"
          ]
        },
        {
          "agente": "Yohanna Moreno",
          "semanas": [
            "10:30|mié",
            "10:30|mar",
            "3:30|mar",
            "10:30|jue"
          ]
        }
      ]
    },
    {
      "key": "2026-07",
      "titulo": "Julio 2026",
      "semanas": [
        {
          "titulo": "Semana 1",
          "fechas": "6–13 jul"
        },
        {
          "titulo": "Semana 2",
          "fechas": "14–20 jul"
        },
        {
          "titulo": "Semana 3",
          "fechas": "21–26 jul"
        },
        {
          "titulo": "Semana 4",
          "fechas": "27–31 jul"
        }
      ],
      "agentes": [
        {
          "agente": "Karen Patiño",
          "semanas": [
            "9:30|jue",
            "9:00|vie",
            "8:30|mar",
            "9:30|lun"
          ]
        },
        {
          "agente": "Milena Fernandez",
          "semanas": [
            "9:00|lun",
            "8:30|jue",
            "9:00|jue",
            "8:30|mié"
          ]
        },
        {
          "agente": "Juselfy Gomez",
          "semanas": [
            "9:00|mié",
            "9:00|mié",
            "9:30|mar",
            "9:00|vie"
          ]
        },
        {
          "agente": "Luisa Florez",
          "semanas": [
            "10:30|jue",
            "8:30|mar",
            "8:30|vie",
            "8:30|lun"
          ]
        },
        {
          "agente": "Jorman Coronado",
          "semanas": [
            "8:45|mar",
            "10:00|vie",
            "8:30|mié",
            "10:00|mar"
          ]
        },
        {
          "agente": "Alexandra Lopez",
          "semanas": [
            "",
            "10:30|mié",
            "10:00|jue",
            "9:30|jue"
          ]
        },
        {
          "agente": "Yasmin Puentes",
          "semanas": [
            "10:30|mié",
            "10:30|jue",
            "10:30|mié",
            "9:30|mié"
          ]
        },
        {
          "agente": "Alvaro Cardenas",
          "semanas": [
            "10:30|lun",
            "3:30|mié",
            "10:00|jue",
            "9:30|jue"
          ]
        },
        {
          "agente": "Yohanna Moreno",
          "semanas": [
            "10:30|mar",
            "10:30|vie",
            "10:30|mar",
            "10:30|lun"
          ]
        }
      ]
    },
    {
      "key": "2026-08",
      "titulo": "Agosto 2026",
      "semanas": [
        {
          "titulo": "Semana 1",
          "fechas": "3–9 ago"
        },
        {
          "titulo": "Semana 2",
          "fechas": "10–16 ago"
        },
        {
          "titulo": "Semana 3",
          "fechas": "17–23 ago"
        },
        {
          "titulo": "Semana 4",
          "fechas": "24–31 ago"
        }
      ],
      "agentes": [
        {
          "agente": "Karen Patiño",
          "semanas": [
            "9:00|lun",
            "8:30|mié",
            "8:30|jue",
            "8:30|lun"
          ]
        },
        {
          "agente": "Milena Fernandez",
          "semanas": [
            "8:30|mar",
            "8:30|jue",
            "8:30|vie",
            "8:30|mar"
          ]
        },
        {
          "agente": "Juselfy Gomez",
          "semanas": [
            "8:30|jue",
            "8:30|lun",
            "9:30|mar",
            "9:30|jue"
          ]
        },
        {
          "agente": "Luisa Florez",
          "semanas": [
            "10:00|lun",
            "8:30|mar",
            "9:30|mar",
            "9:30|jue"
          ]
        },
        {
          "agente": "Jorman Coronado",
          "semanas": [
            "9:00|mié",
            "",
            "8:30|mié",
            "8:30|vie"
          ]
        },
        {
          "agente": "Alexandra Lopez",
          "semanas": [
            "9:30|mar",
            "9:30|lun",
            "9:30|jue",
            "9:30|mié"
          ]
        },
        {
          "agente": "Yasmin Puentes",
          "semanas": [
            "10:00|jue",
            "10:00|mié",
            "9:30|vie",
            "10:00|lun"
          ]
        },
        {
          "agente": "Alvaro Cardenas",
          "semanas": [
            "9:30|mar",
            "9:30|lun",
            "9:30|jue",
            "9:30|mié"
          ]
        },
        {
          "agente": "Yohanna Moreno",
          "semanas": [
            "10:30|lun",
            "10:00|jue",
            "10:00|mié",
            "10:00|mar"
          ]
        }
      ]
    },
    {
      "key": "2026-09",
      "titulo": "Septiembre 2026",
      "semanas": [
        {
          "titulo": "Semana 1",
          "fechas": "7–13 sep"
        },
        {
          "titulo": "Semana 2",
          "fechas": "14–20 sep"
        },
        {
          "titulo": "Semana 3",
          "fechas": "21–27 sep"
        },
        {
          "titulo": "Semana 4",
          "fechas": "28–30 sep"
        }
      ],
      "agentes": [
        {
          "agente": "Karen Patiño",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Milena Fernandez",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Juselfy Gomez",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Luisa Florez",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Jorman Coronado",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Alexandra Lopez",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Yasmin Puentes",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Alvaro Cardenas",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Yohanna Moreno",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        }
      ]
    },
    {
      "key": "2026-10",
      "titulo": "Octubre 2026",
      "semanas": [
        {
          "titulo": "Semana 1",
          "fechas": "5–11 oct"
        },
        {
          "titulo": "Semana 2",
          "fechas": "12–18 oct"
        },
        {
          "titulo": "Semana 3",
          "fechas": "19–25 oct"
        },
        {
          "titulo": "Semana 4",
          "fechas": "26–31 oct"
        }
      ],
      "agentes": [
        {
          "agente": "Karen Patiño",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Milena Fernandez",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Juselfy Gomez",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Luisa Florez",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Jorman Coronado",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Alexandra Lopez",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Yasmin Puentes",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Alvaro Cardenas",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Yohanna Moreno",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        }
      ]
    },
    {
      "key": "2026-11",
      "titulo": "Noviembre 2026",
      "semanas": [
        {
          "titulo": "Semana 1",
          "fechas": "2–8 nov"
        },
        {
          "titulo": "Semana 2",
          "fechas": "9–15 nov"
        },
        {
          "titulo": "Semana 3",
          "fechas": "16–22 nov"
        },
        {
          "titulo": "Semana 4",
          "fechas": "23–30 nov"
        }
      ],
      "agentes": [
        {
          "agente": "Karen Patiño",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Milena Fernandez",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Juselfy Gomez",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Luisa Florez",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Jorman Coronado",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Alexandra Lopez",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Yasmin Puentes",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Alvaro Cardenas",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Yohanna Moreno",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        }
      ]
    },
    {
      "key": "2026-12",
      "titulo": "Diciembre 2026",
      "semanas": [
        {
          "titulo": "Semana 1",
          "fechas": "7–13 dic"
        },
        {
          "titulo": "Semana 2",
          "fechas": "14–20 dic"
        },
        {
          "titulo": "Semana 3",
          "fechas": "21–27 dic"
        },
        {
          "titulo": "Semana 4",
          "fechas": "28–31 dic"
        }
      ],
      "agentes": [
        {
          "agente": "Karen Patiño",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Milena Fernandez",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Juselfy Gomez",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Luisa Florez",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Jorman Coronado",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Alexandra Lopez",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Yasmin Puentes",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Alvaro Cardenas",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        },
        {
          "agente": "Yohanna Moreno",
          "semanas": [
            "",
            "",
            "",
            ""
          ]
        }
      ]
    }
  ],
  "festivos": {
    "anios": [
      2026,
      2027
    ],
    "sabados": {
      "3-ene": "Alexandra López",
      "10-ene": "Karen Patiño",
      "17-ene": "Jorman Coronado",
      "24-ene": "Milena Fernández",
      "31-ene": "Juselfy Gomez",
      "7-feb": "Alvaro Cardenas",
      "14-feb": "Alexandra López",
      "21-feb": "Yasmin Puentes",
      "28-feb": "Karen Patiño",
      "7-mar": "Milena Fernández",
      "14-mar": "Juselfy Gomez",
      "21-mar": "Jorman Coronado",
      "4-abr": "Juselfy Gomez",
      "11-abr": "Alvaro Cardenas",
      "18-abr": "Yasmin Puentes",
      "25-abr": "Alexandra López",
      "2-may": "Karen Patiño",
      "9-may": "Jorman Coronado",
      "16-may": "Alexandra López",
      "23-may": "Luisa Florez",
      "30-may": "Juselfy Gomez",
      "6-jun": "Yohanna Moreno",
      "13-jun": "Milena Fernández",
      "20-jun": "Alvaro Cardenas",
      "27-jun": "Yasmin Puentes",
      "4-jul": "Karen Patiño",
      "11-jul": "Luisa Florez",
      "18-jul": "Jorman Coronado",
      "25-jul": "Juselfy Gomez",
      "1-ago": "Yohanna Moreno",
      "8-ago": "Alexandra López",
      "15-ago": "Milena Fernández",
      "22-ago": "Alvaro Cardenas",
      "29-ago": "Yasmin Puentes",
      "5-sep": "Karen Patiño",
      "12-sep": "Luisa Florez",
      "19-sep": "Jorman Coronado",
      "26-sep": "Juselfy Gomez"
    }
  }
};
