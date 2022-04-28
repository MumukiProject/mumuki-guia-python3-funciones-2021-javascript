Como vimos, un string puede ser pasado como argumento a una función...

```javascript
ム esBiblioteca("Biblioteca De Babel")
true
ム esBiblioteca("Biblioteca Del Congreso")
true
ム esBiblioteca("Teatro Colón")
false
```

...y además, las funciones pueden tener parámetros, uno por cada argumento que necesite recibir. 

> ¡Momento! ¿Tendremos que escribir de forma diferente nuestros parámetros cuando _son de tipo_ string? :thinking:
>
> Por ejemplo, observá la siguiente definición de `esBiblioteca`...
> 
> ```javascript
> function esBiblioteca("lugar"){
>  return "lugar".includes("Biblioteca");
> }
> ```
> ...¿está bien escrita? :eyes:

