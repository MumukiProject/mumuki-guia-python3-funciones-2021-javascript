it("Rosario no es más largo que Bahia Blanca", () => {
  assert(!esMasLargoQue('Rosario', 'Bahía Blanca'))
})

it("Valle de Uco no es más largo que Bahia Blanca", () => {
  assert(esMasLargoQue('Valle de Uco', 'La Punta'))
})