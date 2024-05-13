# Backend with static public for frontend:

Start package.json:
```
npm init -y
```
Install express
```
npm install express --save
```
- To use ES6+ using import instead of require, add "type":"module" in package.json

Running node without nodemon:
```
node src/index.js
```
Install nodemon as a development dependency to keep the server up at development time:
```
npm install nodemon --save-dev
```
- Change the script in package.json to:
     ```
     "dev": "nodemon --experimental-modules --es-module-specifier-resolution=node src/index.js"
     ```
Run the script named dev (this way nodemon runs nodejs):
```
npm run dev
```
Backend middleware to parse body information sent from frontend to backend:
```
npm install body-parser
```
ORM for Database Modeling:
```
npm install prisma --save-dev
```
Install the Prisma client:
```
npm install @prisma/client --save
```
Initialize the prisma:
```
npx prisma init
```
After creating the database modeling, create the schema:
```
npx prisma migrate dev
```
Run the project:
```
npm run dev
```