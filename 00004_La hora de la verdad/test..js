it("las 11 no son la hora de la verdad", () => {
  assert(!esHoraDeLaVerdad(11))
})

it("las 14 no son la hora de la verdad", () => {
  assert(!esHoraDeLaVerdad(14))
})

it("las 12 son la hora de la verdad", () => {
  assert(esHoraDeLaVerdad(12))
})
