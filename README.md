# ホスト側で実行するサービスをDocker上のnginxでプロキシ

## 設定

### SSL証明書

- mkcert インストール
  ```sh:
  brew install mkcert
  ```
- ルート証明書インストール
  ```
  mkcert --install
  ```
- サーバ証明書発行
  ```sh:
  mkcert \
    -cert-file ./certs/example.com.crt.pem \
    -key-file  ./certs/example.com.key.pem \
    example.com "*.example.com"
  ```

### hosts

- /etc/hosts に追加
  ```ini:/etc/hosts
  127.0.0.1 www.example.com api.example.com
  ```

## 起動

- ホスト上でサーバ起動
  ```sh:
  node api.js
  ```
  ```sh:
  node client.js
  ```
  - それぞれ個別のターミナルで実行
- Docker起動
  ```sh:
  docker-compose up -d
  ```
- アクセス

  - https://www.example.com/
  - https://api.example.com/
