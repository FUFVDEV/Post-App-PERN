<h1 align="center">React Template</h1>
<p align="center">Template para el desarrollo de proyectos en React.</p>

<h2>Acerca del Proyecto</h2>
El objetivo de este repositorio es proporcionar un proyecto base con las herramientas mínimas necesarias para el desarollo de un proyecto en React.

<h2>Herramientas</h2>
Las siguientes herramientas fueron añadidas para mejorar la experiencia de desarrollo y para mantener una estructura consistente durante el desarrollo:

- [Eslint](https://eslint.org/): Analiza estáticamente el código para encontrar errores rápidamente.
- [Standard.js](https://standardjs.com/): Plantilla de configuración para ESLint.
- [Prettier](https://prettier.io/): Formateador de código.
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): Desactiva todas las reglas que son innecesarias o que pueden entrar en conflicto con Prettier.

<h2>Instrucciones</h2>

1. Clonar el repositorio a un directorio local, utilizando el comando :

```
git clone [REPOSITORY_URL]
```

2. Instalat las dependencias del proyecto

```
npm install
```

<h2>Detalle de la configuración</h2>
1. Instalar eslint.

```
npm i -D eslint
```

2. Iniciar asistente de configuración de eslint.

```
npx eslint --init
```

3. Instalar prettier.

```
npm i -D prettier
```

4. Instalar extensiones ESLint y Prettier en el editor de código.
5. Crear archivo .prettierrc con la siguiente configuración de ejemplo (puede ser modificada).

```
{
  "printWidth": 100,
  "singleQuote": false,
  "jsxSingleQuote": false,
  "arrowParens": "avoid"
}
```

6. Instalar extensión eslint-config-prettier.

```
npm i -D eslint-config-prettier
```

7. Agregar extensión eslint-config-prettier al archivo .eslintrc.js

```
extends: [
  "plugin:react/recommended",
  "plugin:react/jsx-runtime", // Evita importar React.
  "standard",
  "eslint-config-prettier", // <=== extensión a agregar.
]
```

8. Activar configuración "Format On Save" en editor de código.
9. Establecer a Prettier como "Default Formatter" en editor de código.
10. Crear archivo .eslintignore con el siguiente contenido.

```
dist
```

11. Crear archivo .prettierignore.

```
dist
package-lock.json
```

<h2>Adicionales</h2>
Si se desea, se pueden agregar los siguientes scripts al archivo package.json, para correr el linter y formateador desde la consola:

```
"scripts": {
  ...
  "format": "prettier --write .",
  "lint": "eslint --fix . --ext .js,.jsx"
}
```
