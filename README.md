### Evaluación del Sprint N°2 de la especialiación de React/Angual en la IT Academy

# El siguiente proyecto correspoden a la evaluación del Sprint N°2.2 en la especialización de Frontend React/Angular de la IT Academy.

En esta rama se ha alojado un pequeño E-Commerce con la finalidad llevar a la práctica los aprendido en el ejercicios básicos de **JavaScript** que se han realizado anteriomente.

Con este proyecto se busca:

1. Agregar productos al carrito de compras.
2. Eliminar los productos agregados al carrito.
3. Calcular la suma del valor de los productos en el carrito.
4. Poder agregar promociones sobre el precio total de un artículo.
5. Mostrar directamente al usuario el carrito con los productos agregados y el valor total de la compra.
6. Manipular el total de cada producto agregado desde el carrito y actualizar el total en tiempo real.
7. Validaciones en un formulario de contacto tanto desde el **HTML** como desde el **JavaScript**.

El proyecto se divide a través de los siguientes archivos:

- index.html: vista principal de la tienda virtual donde se pueden agregar los productos al carrito de compras y controlar la cantidad de cada uno agregado.
- form.html: la segunda vista de la tienda donde se encuentra el formulario de contacto. A este formulario se le han asignado diferentes validaciones para controlar el tipo de datos que en usuario ingresa en cada campo, desde un mínimo de carácteres hasta solo numericos.

# js:

En este directorio se encuentran los archivos JavaScript que controlan toda la funcionalidad del E-commerce

- main.js: archivo principal donde se encuentran las funciones que controlan toda la lógica del carrito de compras.
- form.js: segundo archivo donde se controlan las validaciones del formulario de contacto.

# css:

Directorio para los archivos CSS para agregar estilos al E-commerce, este cuenta con solo el archivo **style.css**.

# img:

Directorio donde se almacenan las imágenes e íconos que se muestran en el E-commerce.

# json:

Directorio para el archivo donde se almacena la información de los productos mostrados en el E-commerce, cuenta con el archivo **products.json**.

# .vscode

Directorio creado para la configuración del puerto utilizado al ejecutar un servidor local. Este contiene el archivo **settings.json** que se encarga de al momento de ejecutar el servidor, que es necesario para poder llamar ls información de los productos almacenados en el archivos **products.json**, poder asignar de modo predeterminado el puerto **5501**. Esto solo es como medida preventiva de que el puerto por defecto **5500** ya esté siendo utilizado, esta configuración no afecta el funcionamiento del E-commerce.

# Instrucciones:

Como se ha mencionado en la sección anterior, se necesita iniciar un servidor local para poder ejecutar la petición **fetch()** que es la que se encarga de llamar la informaión de los productos en el archivo **products.json**, en caso contrario no se podra recibir dicha información y no se podrá ejecutar la funcionalidad del carrito de compras.

Para este caso y dependiendo del tipo de editor de código y/o sistema operativo se puede realizar con alguna de las siguientes herramientas:

- **Visual Studio Code**: Extensión de Live Server.
    Sistema operativo: Windows, macOS, Linux.

- **Node.js http-server**: Librería **http-server** Comando: **npx http-server**
    Sistema operativo: Todos (requiere Node.js instalado).

- **Python HTTP Server**: Comando: **python -m http.server**.
    Sistema operativo: Windows, macOS, Linux.