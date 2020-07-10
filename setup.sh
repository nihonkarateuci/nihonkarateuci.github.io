#!/bin/bash

chmod 644 ./*.html
chmod -R u+rwX,go+rX,go-w ./styles ./scripts ./images ./resources
