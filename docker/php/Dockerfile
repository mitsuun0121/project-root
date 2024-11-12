# PHP イメージを使用
FROM php:8.2-fpm

WORKDIR /app

# 必要な拡張機能のインストール
RUN apt-get update && \
    apt-get install -y libpng-dev libjpeg-dev libfreetype6-dev && \
    docker-php-ext-install gd pdo pdo_mysql && \
    rm -rf /var/lib/apt/lists/*

# Composer のインストール
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 依存関係ファイルを先にコピー（キャッシュ利用のため）
COPY composer.json composer.lock ./

# アプリケーションファイルをコンテナにコピー
COPY . .

RUN composer install --no-dev --optimize-autoloader

# パーミッションの設定
RUN chmod -R 775 storage bootstrap/cache

# ポートの公開
EXPOSE 8000

# アプリケーションサーバーを起動
CMD php artisan serve --host=0.0.0.0 --port=8000