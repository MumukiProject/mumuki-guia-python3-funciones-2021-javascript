Sí, JavaScript nos da operaciones que nos permite resolver diferentes tareas y además nos permite combinarlas, pero el verdadero poder de la programación es que también podemos crear nuestras propias operaciones. 

Y para hacer esto, ¡démosle entonces la bienvenida a _las funciones_ :confetti_ball:! Nuestras nuevas amigas nos permitirán "enseñarle"  a la computadora a realizar una tarea que originalmente no estaba incluida en el lenguaje mediante. ¿Cómo? _Escribiendo una definición_ como la siguiente **una sola vez** :one:... 

```javascript
function esMasLargoQue(unString, otroString){
  return unString.length > otroString.length;
}
```

...y luego _invocando_ a esta función **cuantas veces queramos** :1234:: 

```javascript
ム esMasLargoQue("Valle de Uco", "Cerro de los Siete Colores")
false
ム esMasLargoQue("Valle de Uco", "Cerro de los Siete Colores")
false // las dos veces devuelve lo mismo
```

¡Y no sólo eso! Cada vez que la invoquemos podremos hacerlo con _argumentos_ diferentes :open_mouth: :

```javascript
ム esMasLargoQue("Rosario", "Bahía Blanca")
false
ム esMasLargoQue("Valle de Uco", "La Punta")
true # si los argumentos cambian, el resultado puede ser diferente también 
```

> Veamos si se va entendiendo: 
> 
>  1. Copiá la _definición_ de la función `esMasLargoQue` en el editor que está debajo;
>  2. en la `Consola`, invocá la función `esMasLargoQue` varias veces con argumentos diferentes; 
>  3. luego, volvé a la pestaña de `Solución` y presioná el botón `Enviar`.
