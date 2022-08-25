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

## Memorias

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
> Decido añadir paginación a la vista principal para poder tener disponible todos los personajes sin tener que hacer un solo fetch tan pesado que comprometa el rendimiento de la app y generar asi una mejor experiencia de usuario, tambien creo una animación de carga que se mostrara mientras los elementos aun no esten disponibles.

> 23/08/2022</br>
> Inicio la instalación y configuración de i18next para manejar el idioma de la aplicación. El idioma podra ser cambiado manualmente entre ingles y español desde la parte derecha del NavBar.

> 24/08/2022</br>
> Inicio la refactorización en base a los tests creados.

> 24/08/2022</br>
> Añado tests unitarios a los actions generators del store incluyendo el tipado.

</br>

## Test coverage

<pre>-------------------------------|---------|----------|---------|---------|---------------------------
File                           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s         
-------------------------------|---------|----------|---------|---------|---------------------------
<font color="#E9AD0C"><b>All files                     </b></font> | <font color="#E9AD0C"><b>  68.68</b></font> | <font color="#F66151"><b>   39.13</b></font> | <font color="#F66151"><b>  44.11</b></font> | <font color="#E9AD0C"><b>  68.75</b></font> | <font color="#F66151"><b>                         </b></font> 
<font color="#33D17A"><b> src                          </b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>     100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#E9AD0C"><b>                         </b></font> 
<font color="#33D17A"><b>  i18n.ts                     </b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>     100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#E9AD0C"><b>                         </b></font> 
<font color="#33D17A"><b> src/components/CharacterCard </b></font> | <font color="#33D17A"><b>     80</b></font> | <font color="#33D17A"><b>     100</b></font> | <font color="#E9AD0C"><b>     50</b></font> | <font color="#33D17A"><b>     80</b></font> | <font color="#F66151"><b>                         </b></font> 
<font color="#33D17A"><b>  CharacterCard.tsx           </b></font> | <font color="#33D17A"><b>     80</b></font> | <font color="#33D17A"><b>     100</b></font> | <font color="#E9AD0C"><b>     50</b></font> | <font color="#33D17A"><b>     80</b></font> | <font color="#F66151"><b>20                       </b></font> 
<font color="#33D17A"><b> src/components/CharacterInfo </b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#E9AD0C"><b>      50</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#E9AD0C"><b>                         </b></font> 
<font color="#33D17A"><b>  CharacterInfo.tsx           </b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#E9AD0C"><b>      50</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#E9AD0C"><b>65                       </b></font> 
<font color="#33D17A"><b> src/components/CharactersList</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>     100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#E9AD0C"><b>                         </b></font> 
<font color="#33D17A"><b>  CharactersList.tsx          </b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>     100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#E9AD0C"><b>                         </b></font> 
<font color="#33D17A"><b> src/components/Footer        </b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>     100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#E9AD0C"><b>                         </b></font> 
<font color="#33D17A"><b>  Footer.tsx                  </b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>     100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#E9AD0C"><b>                         </b></font> 
<font color="#33D17A"><b> src/components/Layout        </b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>     100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#E9AD0C"><b>                         </b></font> 
<font color="#33D17A"><b>  Layout.tsx                  </b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>     100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#E9AD0C"><b>                         </b></font> 
<font color="#33D17A"><b> src/components/LoadingScreen </b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>     100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#E9AD0C"><b>                         </b></font> 
<font color="#33D17A"><b>  LoadingScreen.tsx           </b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>     100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#E9AD0C"><b>                         </b></font> 
<font color="#33D17A"><b> src/components/MainContainer </b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>     100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#E9AD0C"><b>                         </b></font> 
<font color="#33D17A"><b>  MainContainer.tsx           </b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>     100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#E9AD0C"><b>                         </b></font> 
<font color="#E9AD0C"><b> src/components/NavBar        </b></font> | <font color="#E9AD0C"><b>     60</b></font> | <font color="#E9AD0C"><b>      50</b></font> | <font color="#F66151"><b>  33.33</b></font> | <font color="#E9AD0C"><b>     60</b></font> | <font color="#F66151"><b>                         </b></font> 
<font color="#E9AD0C"><b>  NavBar.tsx                  </b></font> | <font color="#E9AD0C"><b>     60</b></font> | <font color="#E9AD0C"><b>      50</b></font> | <font color="#F66151"><b>  33.33</b></font> | <font color="#E9AD0C"><b>     60</b></font> | <font color="#F66151"><b>30-41                    </b></font> 
<font color="#33D17A"><b> src/components/Paginator     </b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#E9AD0C"><b>      50</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#E9AD0C"><b>                         </b></font> 
<font color="#33D17A"><b>  Paginator.tsx               </b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#E9AD0C"><b>      50</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#E9AD0C"><b>25-37                    </b></font> 
<font color="#33D17A"><b> src/helpers                  </b></font> | <font color="#33D17A"><b>     90</b></font> | <font color="#33D17A"><b>     100</b></font> | <font color="#E9AD0C"><b>  66.66</b></font> | <font color="#33D17A"><b>  88.88</b></font> | <font color="#F66151"><b>                         </b></font> 
<font color="#E9AD0C"><b>  functions.ts                </b></font> | <font color="#E9AD0C"><b>     75</b></font> | <font color="#33D17A"><b>     100</b></font> | <font color="#E9AD0C"><b>     50</b></font> | <font color="#E9AD0C"><b>  66.66</b></font> | <font color="#F66151"><b>2                        </b></font> 
<font color="#33D17A"><b>  testingHelpers.tsx          </b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>     100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#E9AD0C"><b>                         </b></font> 
<font color="#E9AD0C"><b> src/hooks                    </b></font> | <font color="#E9AD0C"><b>     55</b></font> | <font color="#33D17A"><b>     100</b></font> | <font color="#F66151"><b>     25</b></font> | <font color="#E9AD0C"><b>  55.55</b></font> | <font color="#F66151"><b>                         </b></font> 
<font color="#E9AD0C"><b>  useAppReducer.tsx           </b></font> | <font color="#E9AD0C"><b>     55</b></font> | <font color="#33D17A"><b>     100</b></font> | <font color="#F66151"><b>     25</b></font> | <font color="#E9AD0C"><b>  55.55</b></font> | <font color="#F66151"><b>32-33,38-39,44-45,50,55  </b></font> 
<font color="#E9AD0C"><b> src/store/reducer            </b></font> | <font color="#E9AD0C"><b>     55</b></font> | <font color="#F66151"><b>   18.18</b></font> | <font color="#F66151"><b>     10</b></font> | <font color="#E9AD0C"><b>     55</b></font> | <font color="#F66151"><b>                         </b></font> 
<font color="#33D17A"><b>  actionTypes.ts              </b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>     100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#E9AD0C"><b>                         </b></font> 
<font color="#E9AD0C"><b>  app.actions.ts              </b></font> | <font color="#E9AD0C"><b>     50</b></font> | <font color="#33D17A"><b>     100</b></font> | <font color="#F66151"><b>      0</b></font> | <font color="#E9AD0C"><b>     50</b></font> | <font color="#F66151"><b>7,17,27,37,47,55,65,75,85</b></font> 
<font color="#F66151"><b>  app.reducer.ts              </b></font> | <font color="#F66151"><b>  30.76</b></font> | <font color="#F66151"><b>   18.18</b></font> | <font color="#33D17A"><b>    100</b></font> | <font color="#F66151"><b>  30.76</b></font> | <font color="#F66151"><b>23-46                    </b></font> 
-------------------------------|---------|----------|---------|---------|---------------------------

<b>Test Suites: </b><font color="#33D17A"><b>7 passed</b></font>, 7 total
<b>Tests:       </b><font color="#33D17A"><b>9 passed</b></font>, 9 total
<b>Snapshots:   </b>0 total
<b>Time:</b>        3.511 s, estimated 4 s
<font color="#717171">Ran all test suites.</font>
</pre>
