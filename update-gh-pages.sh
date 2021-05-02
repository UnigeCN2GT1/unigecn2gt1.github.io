#!/usr/bin/bash
cp dist/unigecn2gt1/browser/index.html dist/unigecn2gt1/browser/404.html
git subtree push --prefix dist/unigecn2gt1/browser/ origin gh-pages
