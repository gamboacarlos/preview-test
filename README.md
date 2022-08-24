# Breaking Bad App

<br />

![](https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/400px-Breaking_Bad_logo.svg.png)

<br />

## Instalación

```bash
npm install
```

<br />

## Ejecución

```bash
npm run dev
```

<br />

## Hecho con

- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev)
- [Redux](https://es.redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [Jest](https://jestjs.io/es-ES/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Sass](https://sass-lang.com/)
- [i18next](https://www.i18next.com/)

<br />

## Memoria

> 22/08/2022</br>
> Inicio el desarrollo de la aplicación, iniciando Git en el directorio raiz
> e instalando las dependencias:

    - react-router-dom
    - eslint
    - prettier
    - redux
    - redux-saga
    - jest
    - sass

> 22/08/2022</br>
> He decidido usar Redux para el manejo del estado y Redux-Saga para comunicarme con la API, Redux-Saga me permitira un mejor control de la comunicación asincrona y manejo de errores. Usare CSS modules para los estilos con Sass, con CSS modules se podran mantener los estilos aislados dentro de cada componente.

> 22/08/2022</br>
> Decido usar la configuracion "Standard" para Eslint haciendo uso de "eslint-config-prettier" para que no colisione con Prettier y lo configuro en el archivo eslintrc:

```
  extends: [
  'plugin:react/recommended',
  'standard-with-typescript',
  'prettier'
],
```

> 22/08/2022</br>
> Para el testing utilizare Jest y React Testing Library, ambas son las librerias que uso habitualmente, luego de completar la instalacion creo el archivo .babelrc y configuro los presets que me permitiran correr los tests de la siguiente manera:

```
{
  "presets": ["@babel/preset-env", ["@babel/preset-react", {
    "runtime": "automatic"
 }], "@babel/preset-typescript"]
}
```

> 22/08/2022</br>
> Defino los scripts para Eslint y Jest:

```
  "scripts": {
    ...
    "test": "jest",
    "test:watch": "npm test -- --watch",
    "lint": "eslint src/**/*.{ts,tsx}"
  },
```

> 23/08/2022</br>
> Ya creada la vista principal de la aplicación defino su ruta en el componente MainRoutes haciendo uso de React Router.

> 23/08/2022</br>
> Creo el store de la aplicacion con un único reducer y las sagas correspondientes, he creado tambien un custom hook (useAppReducer) para despachar acciones y obtener lod datos del estado de una manera mas centralizada y manteniendo los componentes mas compactos y faciles de leer.

> 23/08/2022</br>
> Inicio la instalación de i18next para manejar el idioma de la aplicación. El idioma podra ser cambiado manualmente entre ingles y español desde la parte derecha del NavBar.
