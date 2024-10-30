# Node.jsの公式イメージ（Debianベース）を使用
FROM node:18

# 必要なライブラリをインストール（任意）
RUN apt-get update && apt-get install -y \
    libc6 \
    && rm -rf /var/lib/apt/lists/*

# アプリケーションの作業ディレクトリを作成
WORKDIR /app

# パッケージファイルをコピー
COPY package.json package-lock.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# コンテナがリッスンするポートを指定
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "run", "dev"]