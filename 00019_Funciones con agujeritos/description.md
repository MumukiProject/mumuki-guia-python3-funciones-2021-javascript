Probablemente habrás notado que las funciones que definimos hasta ahora podían devolver tanto números como booleanos. Es más: **pueden devolver cualquier tipo de dato** :exploding_head:. Pero, ¿qué hay de lo que _entra_ a la función? ¿Cuántos argumentos podemos pasarles? ¿Y qué son exactamente los parámetros? 

La respuesta es que los parámetros son _...redoble de tambores :drum:..._  ¡pequeños agujeros! :face_with_raised_eyebrow: 

Por ejemplo, en esta definición estamos _declarando_ **un** parámetro llamado `unNumero`... 

```javascript
function mitad(unNumero){ //unNumero es un parámetro
  return unNumero / 2;
}
```

...que sirve para que `mitad` pueda recibir exactamente **un** argumento: 

```javascript
ム mitad(4) // 4 es un argumento
2
```

Por ejemplo, cuando invocamos `mitad` con el argumento `4`, a través de este "agujerito" llamado `unNumero` le llegará el valor `4`, que luego nuestra función podrá dividir por dos y retornar su resultado. En cambio, si la invocamos así...


```javascript
ム mitad(10) // 10 es otro argumento
5
```

...a través del parámetro `unNumero` llegará a `mitad` el `10` con el que invocamos la función. Y nuevamente, lo dividirá por dos y retornará el `5`.    

> ¡Más despacio! Volvamos a la función del ejercicio anterior...
>
> ```javascript
> function sumaLongitudes (unString, otroString){
>  return unString.length + otroString.length;
> }
> ```
> 
> ... y marcá las opciones correctas. 

