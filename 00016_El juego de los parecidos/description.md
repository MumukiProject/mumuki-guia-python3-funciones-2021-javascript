Veamos ahora la definición de otra función... 

```javascript
function esPregunta(oracion){
  return oracion.startsWith("¿") && oracion.endsWith("?") 
}
```
...la cual podemos usar así: 

```javascript
ム esPregunta("¿Qué hora es?")
true
ム esPregunta("¡En esta casa obedecemos las leyes de la termodinámica!")
false
```

¿Se parece la definición de esta función a la anterior? ¿Por qué será?

> :mag: Compará esta nueva definición con la que vimos anteriormente...
>
> ```javascript
>function esMasLargoQue(unString, otroString){
  return unString.length > otroString.length;
}
> ```
>
> ...y respondé qué tienen en común.
