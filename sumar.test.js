test('suma de 1 + 2 es igual a 3', () => {
    expect(1).toEqual(1);
});

// Ejecutamos en la Terminal: $ npx jest
// Nuestra prueba ha pasado.

// test('suma de 1 + 2 es igual a 3', () => {
//     expect(2).toEqual(1);
// });

// Ejecutamos nuevamente en la Terminal: $ npx jest
// Nuestra prueba a fallado.

// Modulos, descomentar esta parte y el codigo anterior de sumar.js

// import sumar = requiere("./sumar");

// test('suma de 1 + 2 es igual a 3', () => {
//     expect(sumar(1,2)).toEqual(3);
// });

// Nuestra prueba a pasado sin ningun problema.

// La función it en Jest es una de las funciones principales que se utilizan para definir un caso de prueba. 
// En términos simples, es una forma de decir "it should do something" ("debería hacer algo"). 
// it es un alias de la función test, y ambas se pueden usar indistintamente. Dentro de it, 
// defines el comportamiento esperado del código que estás probando.

// it('descripción del caso de prueba', () => {
//     lógica de la prueba
// });

// función simple que suma dos números

// function sumar(a, b) {
//     return a + b;
// }
  
// prueba con Jest usando it

// it('debería sumar dos números correctamente', () => {
//     const resultado = sumar(2, 3);
//     expect(resultado).toBe(5); comprobamos que el resultado sea 5
// });  