<h1 align="center">Post App (PERN)</h1>
<p align="center">Aplicación para la gestión de Posts.</p>

![Captura de pantalla 2022-10-20 193351](https://user-images.githubusercontent.com/79425171/197073960-27a3798d-6a2a-47a4-993a-b8a323ac7051.png)

<h2>Acerca del Proyecto</h2>
El objetivo de este repositorio es proporcionar una esttructura de desarrollo para una aplicación diseñada bajo el stack (P)ostgresSQL, (E)xpressJS, (R)eact y (N)odeJS.

<h2>Herramientas</h2>
Las siguientes herramientas fueron añadidas para mejorar la experiencia y una estructura consistente durante el desarrollo:

- [Eslint](https://eslint.org/): Analiza estáticamente el código para encontrar errores rápidamente.
- [Standard.js](https://standardjs.com/): Plantilla de configuración para ESLint.
- [Prettier](https://prettier.io/): Formateador de código.
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): Desactiva todas las reglas que son innecesarias o que pueden entrar en conflicto con Prettier.

<h2>Tecnología</h2>
Para el desarrollo de este proyecto, se utilizaron las siguientes tecnologías que se proceden a detallar:

### Frontend
- [React](https://es.reactjs.org/): Biblioteca de JavaScript para construir interfaces de usuario.
- [Ant Design](https://ant.design/): Sistema de diseño para productos empresariales que crear interfaces de usuario eficientes y agradables.
- [React Router](https://reactrouter.com/en/main): librería para el enrutamiento de la aplicación.
- [React Redux](https://react-redux.js.org/): Librería para la gestión del estado global de la aplicación.
- [Redux Toolkit](https://redux-toolkit.js.org/): Conjunto de herramientas para el desarrollo eficiente con Redux.
- [Redux Saga](https://redux-saga.js.org/): Administrador de side effects de Redux.

### Backend
- [NodeJS](https://nodejs.org/en/): Entorno de ejecución de JavaScript multiplataforma.
- [ExpressJS](https://expressjs.com/): Framework rápido y minimalista para NodeJS.
- [Typebox](https://www.npmjs.com/package/@sinclair/typebox): Generador de tipos de esquema JSON.
- [Ajv](https://ajv.js.org/): Validador de esquemas JSON.
- [Ajv errors](https://www.npmjs.com/package/ajv-errors): Generador de errores personalizados para Ajv.
- [Ajv formats](https://www.npmjs.com/package/ajv-formats): Formatos de esquemas JSON para Ajv.
- [Cors](https://expressjs.com/en/resources/middleware/cors.html): Middleware que habilita el intercambio de recursos de origen cruzado.
- [Dotenv](https://www.npmjs.com/package/dotenv): Módulo que permite cargar las variables de entorno definidas en el archivo `.env` dentro del objeto `Global` en NodeJS.
- [PG](https://www.npmjs.com/package/pg): Cliente PostgreSQL para NodeJS.
- [PG hstore](https://www.npmjs.com/package/pg-hstore): Un paquete de nodos para serializar y deserializar datos JSON en formato hstore.
- [Sequelize](https://sequelize.org/): ORM moderno de NodeJS para base de datos como PostgreSQL.

<h2>Instrucciones</h2>

1. Clonar el repositorio a un directorio local, utilizando el comando:

```
git clone [REPOSITORY_URL]
```

2. Instalar las dependencias del proyecto:

Frontend
```
npm install
npm start
```

Backend
```
npm install
npm run dev
```

<h2>Base de Datos</h2>

Lo siguiente es un ejemplo de la query sql para la creación de la base de datos del proyecto:

```
CREATE DATABASE <nombre_db>;

CREATE TABLE post (
  id serial primary key NOT NULL,
  nombre varchar(50),
  description varchar(200)
 );
```
