#!/bin/bash

# Скрипт для конвертации изображений в современные форматы
# Использует ImageMagick для конвертации GIF и JPG в WebP и AVIF

# Директория с исходными изображениями
SRC_DIR="/home/nick/SSD_1TB/Programming/Skolam-net.ru3/src/images"
# Директория для сконвертированных изображений
DST_DIR="/home/nick/SSD_1TB/Programming/Skolam-net.ru3/src/images/converted"

# Создаем директорию для сконвертированных изображений
mkdir -p "$DST_DIR"

echo "Начинаем конвертацию изображений..."

# Конвертируем GIF в WebP и AVIF
for gif in "$SRC_DIR"/*.gif; do
    if [ -f "$gif" ]; then
        filename=$(basename "$gif" .gif)
        echo "Конвертируем $filename.gif..."
        
        # Конвертация в WebP
        convert "$gif" -quality 85 "$DST_DIR/${filename}.webp"
        
        # Конвертация в AVIF (если поддерживается)
        if convert -list format | grep -q AVIF; then
            convert "$gif" -quality 85 "$DST_DIR/${filename}.avif"
        else
            echo "AVIF не поддерживается, используем WebP"
        fi
    fi
done

# Конвертируем JPG в WebP и AVIF
for jpg in "$SRC_DIR"/*.jpg; do
    if [ -f "$jpg" ]; then
        filename=$(basename "$jpg" .jpg)
        echo "Конвертируем $filename.jpg..."
        
        # Конвертация в WebP
        convert "$jpg" -quality 85 "$DST_DIR/${filename}.webp"
        
        # Конвертация в AVIF (если поддерживается)
        if convert -list format | grep -q AVIF; then
            convert "$jpg" -quality 85 "$DST_DIR/${filename}.avif"
        else
            echo "AVIF не поддерживается, используем WebP"
        fi
    fi
done

echo "Конвертация завершена!"
echo "Сконвертированные изображения находятся в: $DST_DIR"

# Выводим информацию о сконвертированных файлах
echo "Список сконвертированных файлов:"
ls -la "$DST_DIR"