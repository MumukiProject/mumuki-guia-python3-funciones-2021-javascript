it("mitad de 2 es 1", () => {
  assert.equal(mitad(2),1)
})

it("mitad de 20 es 10", () => {
  assert.equal(mitad(20),10)
})

it("mitad de 10 es 5", () => {
  assert.equal(mitad(10),5)
})

it("suma de longitudes de 'hola' y 'mundo' es 9", () => {
  assert.equal(sumaLongitudes('hola', 'mundo'),9)
})

it("suma de longitudes de 'llueva' y 'cafe' es 10", () => {
  assert.equal(sumaLongitudes('llueva', 'cafe'),10)
})