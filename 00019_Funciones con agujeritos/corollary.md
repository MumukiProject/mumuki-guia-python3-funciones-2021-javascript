¡Exactamente! Todas las opciones son correctas. :ok_hand:

Una función puede _declarar_ tantos parámetros como necesite en su definición; por cada uno de ellos, deberemos pasar un argumento al invocarla. Lo interesante es que no importa qué argumentos utilicemos, ya que a cada uno lo conoceremos con el nombre de su parámetro. En este ejemplo, si escribimos en la consola...

```javascript
ム sumaLongitudes("aprendiendo", "programación")
```
...dentro de la función `sumaLongitudes` el argumento `"aprendiendo"` será `unString` y `"programación"` será `otroString`:

```javascript
function sumaLongitudes(unString, otroString){
  //                        ▲           ▲
  //                  "aprendiendo" "programación"
  return unString.length + otroString.length  
  //            ▲                  ▲
  //    "aprendiendo".length  "programación".length
```

Sin embargo, si lo invocamos escribiendo...

```javascript
ム sumaLongitudes("conociendo", "JavaScript")
```

... ahora el parámetro `unString` tiene como valor `"conociendo"` y `otroString` _vale_ `"JavaScript"`.

¡Por eso es tan importante darle un buen nombre! 