# **Proyecto página web funcional (Primer trimestre)**

El día de la entrega: 21 de noviembre. Defensas y presentación los días 21 y 24 de noviembre.

Se trata de realizar una APP que acceda a una API REST Pública y mediante Javascript y los métodos vistos en clase acceda a diversos datos que la aplicación nos provea para renderizar dichos datos en pantalla.
Se valorará que además accedáis a una API REST privada (con el json-server), para poder realizar operaciones de escritura sin problema.
Se pueden combinar ambas APIS, para guardar en la privada los datos que nos interesen, e incluso combinar peticiones a ambas.
Habrá que escoger una API de las propuestas en la [lista de apis publicas](https://github.com/public-apis/public-apis) y proponerla al profesor de manera pública en el [tablon del módulo](https://classroom.google.com/c/ODEzNTU5MTAwNzky).

## **Requisitos que tiene que cumplir la aplicación:**

- Haga uso de la API para recabar datos filtrando por **tres o más** parámetros de búsqueda.
- Podamos hacer búsquedas en dos categorías (por ejemplo _personajes_ y _episodios_ si hablamos de Rick y Morty app, o _precio_ y _deporte_, si hablamos de una App de productos similar a decathlon).
- Muestre resultados con estilo.
- Al menos tenga **dos niveles de anidamiento de búsquedas**. Es decir que de un resultado de una búsqueda te lance otra. Por ejemplo en la App de Rick y Morty, de un personaje mostraríamos los episodios y nos generaría enlaces para que nos redirija a la información de cada episodio; o una vez elegido el deporte, se puedan ver los enlaces a los productos, y podriamos desplegar toda la info de uno de esos productos.
- Lleve a cabo control de errores en el formulario de entrada si hiciese falta (depende de los datos requeridos para hacer la búsqueda).
- Lleve a cabo control de errores por si falla el request HTTP, o bajan datos no completos.
- La aplicación deberá realizarse en un proyecto de github privado, en el que estarán los miembros del equipo, y además se añadirá al [profesor](https://github.com/tmartin1284/).

## **Entregables**

1. El proyecto en si, accesible a traves de github.
2. Una de memoria de prácticas donde expliquemos cómo accedemos a la API escogida, las funciones más importantes de nuestra aplicación y el funcionamiento a nivel usuarios de nuestra aplicación. En estas memorias se cuenta todo un poco a alto nivel de abstracción, sin entrar en exceso a detalles técnicos. Para eso están los anexos. Imaginaos que vendéis la página web a un directivo: solo va a querer que funcione, sin importar cuantos _get_ hayáis hecho.
3. La presentación la realizarán todos los miembros del grupo, tendrán 10 minutos como máximo para exponer. Explicarán al resto de la clase y el profesor los puntos destacables de la memoria que han entregado:
   - Acceso a la API de datos,
   - Programación de la App
   - Ejemplo de funcionamiento.
     El profesor podrá al final realizar alguna pregunta a a cerca del la aplicación. Por cada pregunta que un miembro del grupo no sepa contestar se bajará 1 punto a la nota de la presentación.

## **Rubrica de corrección**

### _Funcionalidad de la aplicación_

5 máximo

1.              Cumple las funciones básicas de acceso, mostrar resultados con estilo y comprobación de errores.
2.              Establece una búsqueda con 3 o más parámetros.
3.              Realiza dos tipos de búsqueda.
4.              Enlaza de los resultados de una búsqueda a la otra.
5.              Usa una API privada

### _Memoria de prácticas_

2 máximo

Entrega de un PDF conteniendo lo especificado en la práctica y el enlace a github con el código. El pdf deberá contener al final una tabla con el porcentaje de participación de cada componente del grupo tanto en la práctica, como en la generación de la documentación.

### _Presentación y defensa_

3 máximo

Se tendrá en cuenta la calidad de la exposición y se bajará un punto de la nota final por cada pregunta que un miembro no sepa contestar.

## **Grupos:**

1. Mario Crespo, Ismael Franco, **José Luis Martínez**
2. **Alejandro Fernández**, Izhan Heras....
3. Sofía Rodríguez, Pedro Sola
4. Daniel del Cura, Ainhoa de Pablo, **Carlos Ruiz**

Los alumnos marcados en negrita son los coordinadores de cada grupo.
