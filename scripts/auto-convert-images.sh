#!/bin/bash

# Скрипт для автоматической конвертации изображений в современные форматы
# Используется в процессе сборки сайта

# Директория с исходными изображениями
SRC_DIR="src/images"
# Директория для сконвертированных изображений
DST_DIR="src/images/converted"

# Создаем директорию для сконвертированных изображений
mkdir -p "$DST_DIR"

echo "Конвертируем изображения в современные форматы..."

# Конвертируем GIF в WebP
for gif in "$SRC_DIR"/*.gif; do
    if [ -f "$gif" ]; then
        filename=$(basename "$gif" .gif)
        echo "Конвертируем $filename.gif в WebP..."
        magick "$gif" -quality 85 "$DST_DIR/${filename}.webp"
    fi
done

# Конвертируем JPG в WebP
for jpg in "$SRC_DIR"/*.jpg; do
    if [ -f "$jpg" ]; then
        filename=$(basename "$jpg" .jpg)
        echo "Конвертируем $filename.jpg в WebP..."
        magick "$jpg" -quality 85 "$DST_DIR/${filename}.webp"
    fi
done

# Конвертируем GIF в AVIF (если поддерживается)
for gif in "$SRC_DIR"/*.gif; do
    if [ -f "$gif" ]; then
        filename=$(basename "$gif" .gif)
        echo "Конвертируем $filename.gif в AVIF..."
        if magick -list format | grep -q AVIF; then
            magick "$gif" -quality 85 "$DST_DIR/${filename}.avif"
        else
            echo "AVIF не поддерживается"
        fi
    fi
done

# Конвертируем JPG в AVIF (если поддерживается)
for jpg in "$SRC_DIR"/*.jpg; do
    if [ -f "$jpg" ]; then
        filename=$(basename "$jpg" .jpg)
        echo "Конвертируем $filename.jpg в AVIF..."
        if magick -list format | grep -q AVIF; then
            magick "$jpg" -quality 85 "$DST_DIR/${filename}.avif"
        else
            echo "AVIF не поддерживается"
        fi
    fi
done

echo "Конвертация завершена!"