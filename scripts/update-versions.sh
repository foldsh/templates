#!/usr/bin/env bash
set -o errexit
set -o errtrace
set -o nounset

CURRENT_VERSION=$(tr -d '\n' < VERSION)
TARGET_VERSION="$1"

rg -l -g '!VERSION' "$CURRENT_VERSION" #| xargs -0 sed -i "s/$CURRENT_VERSION/$TARGET_VERSION/"
echo "s/$CURRENT_VERSION/$TARGET_VERSION/"
# echo "$TARGET_VERSION" > VERSION
