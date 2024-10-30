# PHP イメージを使用
FROM php:8.2-fpm

WORKDIR /app

# 必要な拡張機能のインストール
RUN apt-get update && \
    apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev && \
    docker-php-ext-configure gd && \
    docker-php-ext-install gd pdo pdo_mysql

# Composer のインストール
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# アプリケーションファイルをコンテナにコピー
COPY . .

RUN composer install

EXPOSE 8000

CMD php artisan serve --host=0.0.0.0 --port=8000