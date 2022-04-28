¿Y podremos combinar estas funciones al igual que hacíamos con los operadores y funciones que ya venían con JavaScript? ¡Por supuesto! :heart_eyes: En otras palabras, _podemos invocar funciones dentro de definiciones_. Por ejemplo:

```javascript
function doble(numero){
  return 2 * numero;
}

function siguienteDelDoble(numero){
  return doble(numero) + 1;
}
```

O incluso mejor:

```javascript
function doble(numero){
  return 2 * numero;
}

function siguienteDelDoble(numero){
  return doble(numero) + 1;
}

function siguienteDelDoble(numero){
  return siguiente(doble(numero));
}
```

> Veamos si se entiende; definí las siguientes funciones:
>
> * `anterior`: toma un número y devuelve ese número menos uno.
> * `triple`: devuelve el triple de un número.
> * `anteriorDelTriple`, que combina las dos funciones anteriores: multiplica a un número por 3 y le resta 1.
>
