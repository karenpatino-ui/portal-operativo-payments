#!/bin/bash
# Inicia el Portal en http://localhost:5500 y lo abre en el navegador.
# Doble clic en este archivo (macOS) o ejecutar: bash iniciar-portal.command
cd "$(dirname "$0")"
if ! curl -s -o /dev/null http://localhost:5500/dashboard.html; then
  (python3 -m http.server 5500 > /tmp/portal-server.log 2>&1 &) 
  sleep 1.5
fi
open "http://localhost:5500/dashboard.html"
