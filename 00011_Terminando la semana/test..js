
describe("", function() {
  it('el sábado es fin de semana', function() {
    assert(esFinDeSemana("sábado"));
  });
  it('el domingo es fin de semana', function() {
    assert(esFinDeSemana("domingo"));
  });
  it('el lunes no es fin de semana', function() {
    assert(!esFinDeSemana("lunes"));
  });
  it('el viernes no es fin de semana', function() {
    assert(!esFinDeSemana("viernes"));
  });
})

