Veamos ahora la definición de otra función... 

```javascript
function esPregunta(oracion){
  return oracion.startswith("¿") && oracion.endswith("?") 
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
> ```python
> def es_mas_largo_que(un_string, otro_string):
>   return len(un_string) > len(otro_string)
> ```
>
> ...y respondé qué tienen en común.
