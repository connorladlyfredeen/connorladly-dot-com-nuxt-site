#!/usr/bin/env bash
#
# Deploy the static site to the connorladly-1 VM (nginx serves it directly).
#
# Builds locally with `yarn generate`, ships the output to the VM, and swaps it
# into the nginx web root atomically. Build runs locally — the f1-micro VM does
# not have the RAM to run the Nuxt build itself.
#
# Requires: gcloud CLI authed on the `default` config (connorladlydotcom), and
# SSH access to the VM (gcloud compute ssh).
#
# Usage: ./deploy.sh
set -euo pipefail

INSTANCE="connorladly-1"
ZONE="us-west1-b"
WEBROOT="/var/www/connorladly"
TARBALL="/tmp/connorladly-site.tar.gz"

echo "==> Building static site (yarn generate)"
yarn generate

echo "==> Packaging .output/public"
tar czf "$TARBALL" -C .output/public .

echo "==> Uploading to $INSTANCE"
gcloud compute scp "$TARBALL" "$INSTANCE:~/connorladly-site.tar.gz" --zone="$ZONE"

echo "==> Swapping into $WEBROOT"
gcloud compute ssh "$INSTANCE" --zone="$ZONE" --command="\
  set -e; \
  sudo rm -rf ${WEBROOT}.new && sudo mkdir -p ${WEBROOT}.new && \
  sudo tar xzf ~/connorladly-site.tar.gz -C ${WEBROOT}.new && \
  sudo chown -R root:root ${WEBROOT}.new && \
  sudo rm -rf ${WEBROOT}.old && \
  ( [ -d ${WEBROOT} ] && sudo mv ${WEBROOT} ${WEBROOT}.old || true ) && \
  sudo mv ${WEBROOT}.new ${WEBROOT} && \
  sudo rm -rf ${WEBROOT}.old ~/connorladly-site.tar.gz && \
  echo 'deployed'"

rm -f "$TARBALL"
echo "==> Done. Live at https://www.connorladly.com"
