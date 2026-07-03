#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

PORT="${PORT:-3000}"

echo "Instalando dependencias..."
npm install

echo "Compilando en modo producción..."
npm run build

IP=$(hostname -I 2>/dev/null | awk '{print $1}')
if [ -z "$IP" ]; then
  IP=$(ip route get 1 2>/dev/null | awk '{print $7; exit}')
fi

echo ""
echo "Multi Becerra lista. Accede desde cualquier dispositivo de tu red:"
echo "  Local:        http://localhost:${PORT}"
if [ -n "$IP" ]; then
  echo "  Red local:    http://${IP}:${PORT}"
fi
echo ""
echo "Presiona Ctrl+C para detener."
echo ""

exec npx next start -H 0.0.0.0 -p "${PORT}"
