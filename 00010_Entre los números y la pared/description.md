¡Hagamos un breve repaso de los booleanos antes de continuar!

* Se puede hacer la conjunción lógica entre dos booleanos (_y lógico_), mediante el operador `&&`. Por ejemplo: `estaLloviendo && haceCalor`
* Se puede hacer la disyunción lógica entre dos booleanos (_o lógico_), mediante el operador `||` haciendo `esVerano || esPrimavera`

Y además de estos dos operadores, contamos con un tercero: el operador de negación `!`, que convierte al `true` en `false` y viceversa:

```javascript
ム !true
false
ム !false
true
```

> ¡A practicar! :muscle: Definí las siguientes funciones:
>
> * `estaEntre`, que tome tres números y diga si el primero es mayor al segundo y menor al tercero.
> * `estaFueraDeRango`: que tome tres números y diga si el primero es menor al segundo o mayor al tercero
>
> Ejemplos:
>
> ```javascript
> ム estaEntre(3, 1, 10)
> true
> ム estaEntre(90, 1, 10)
> false
> ム estaEntre(10, 1, 10)
> false
> ム estaFueraDeRango(17, 1, 10)
> true
> ```
>