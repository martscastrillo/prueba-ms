# prueba técnica mediasmart

Está dentro de una estructura de carpetas preparada para poder funcionar, los archivos editables se encuentran dentro de la carpeta `web/`: son los ficheros de nuestra página web, como HTML, SCSS, JS... para el front y dentro de la carpeta `src/`: los archivos de gestión de la parte de backend

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/)

### Cómo arrancar el backend

En la raíz del proyecto:

1. Ejecutar `npm install`.
1. Ejecutar `npm start` o `npm run dev`.

El backend se arrancará en http://localhost:4000

### Cómo ejecutar el frontend

En la raíz del proyecto:

1. Ejecutar `cd web`.
1. Ejecutar `npm install`.
1. Ejecutar `npm start` o `npm run dev`.
1. Abrir la página http://localhost:3000



### El proyecto se pide:

#### Front end
Para el frontend, necesitamos que diseñes un formulario que envíe una solicitud POST a la
API. El formulario debe incluir los siguientes campos:
- Nombre completo (obligatorio, con más de 3 caracteres)
- Correo electrónico (obligatorio, con validación sencilla de email)
- Teléfono (opcional, solo números y sin tener en cuenta los prefijos del país)
- Mensaje (obligatorio, con más de 10 caracteres)
Además, es importante que valides los campos del formulario antes de enviar los datos a la
API.
#### Back end
Para el backend, necesitamos que desarrolles una API con un único endpoint. Este endpoint
debe ser un POST que reciba la información introducida en el formulario descrito
anteriormente. La API debe responder en formato JSON y contener al menos los siguientes
campos:
- Nombre completo
- Correo electrónico
- Teléfono
- Mensaje

#### Extras
- Puedes estilizar el formulario utilizando los colores y la tipografía de mediasmart
(https://www.mediasmart.io/contact-us).
- Te damos la opción de agregar un campo dinámico en el formulario. Este campo
consiste en un checkbox que permita al usuario seleccionar si desea incluir el
tratamiento que se le dará al enviar el formulario. Si el checkbox está activo, se debe
mostrar un menú desplegable (select) con dos opciones: ["Sr.", "Sra."]. La información
seleccionada en este menú desplegable se enviará junto con el resto de los campos del
formulario a la API. Si el checkbox está desactivado, el menú desplegable no se
mostrará ni se tendrá en cuenta para el envío de campos de la API.
