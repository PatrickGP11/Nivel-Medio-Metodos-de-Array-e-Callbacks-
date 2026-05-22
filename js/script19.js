// 19. VALIDAÇÃO DE LISTA (every)

// O .every() também retorna um booleano, mas só retorna 'true' se 
// TODOS os elementos do array satisfizerem a condição.

const saldoContas = [150.50, 200.00, 50.00, 3000.00];
const saldoComDevedor = [150.50, 200.00, -50.00, 3000.00];

const todosPositivos1 = saldoContas.every(saldo => saldo > 0);
const todosPositivos2 = saldoComDevedor.every(saldo => saldo > 0);

console.log("--- Executando Exercício 19: Validação de Lista ---");
console.log("Saldos 1:", saldoContas);
console.log("Todos os saldos da lista 1 são positivos?", todosPositivos1); // true

console.log("Saldos 2:", saldoComDevedor);
console.log("Todos os saldos da lista 2 são positivos?", todosPositivos2); // false
console.log("");