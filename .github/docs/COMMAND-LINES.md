# Backend com static public para frontend:

Inicia o package.json:
```
npm init -y
```
Instala o express
```
npm install express --save
```
- Para usar ES6+ utilizando import ao invés de require, adicionar "type":"module" no package.json

Executando o node sem nodemon:
```
node src/index.js
```
Instala o nodemon como dependencia de desenvolvimento para manter o server up em tempo de desenvolvimento:
```
npm install nodemon --save-dev
```
- Alterar o script no package.json para:
    ```
    "dev": "nodemon --experimental-modules --es-module-specifier-resolution=node src/index.js"
    ```
Executa o script de nome dev (dessa forma o nodemon roda o nodejs):
```
npm run dev
```
Middleware do backend para analisar as informações do body enviadas do frontend para backend:
```
npm install body-parser
```
ORM para modelagem de banco de dados:
```
npm install prisma --save-dev
```
Instala o client do prisma:
```
npm install @prisma/client --save
```
Inicializa o prisma:
```
npx prisma init
```
Após criado a modelagem do banco de dados, cria o schema:
```
npx prisma migrate dev
```
Roda o projeto:
```
npm run dev
```