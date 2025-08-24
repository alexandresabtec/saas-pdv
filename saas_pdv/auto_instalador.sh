#!/bin/bash
set -e
echo "🚀 Iniciando instalação do SaaS PDV..."

read -p "Subdomínio FRONTEND (ex: app.suaempresa.com): " FRONT_DOMAIN
read -p "Subdomínio BACKEND (ex: api.suaempresa.com): " BACK_DOMAIN
read -p "Usuário administrador inicial: " ADMIN_USER
read -p "Senha administrador inicial: " ADMIN_PASS
read -p "Nome do banco: " DB_NAME
read -p "Usuário do banco: " DB_USER
read -p "Senha do banco: " DB_PASS

export FRONT_DOMAIN BACK_DOMAIN ADMIN_USER ADMIN_PASS DB_NAME DB_USER DB_PASS

apt update && apt upgrade -y
apt install -y docker.io docker-compose git curl unzip

docker-compose up -d --build

echo "✅ Instalação concluída!"
echo "Frontend: http://$FRONT_DOMAIN:8080"
echo "Backend: http://$BACK_DOMAIN:3000"
echo "Login teste: $ADMIN_USER / $ADMIN_PASS"