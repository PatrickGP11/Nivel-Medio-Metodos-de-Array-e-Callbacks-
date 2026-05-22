// 16. FILTRO DE NÚMEROS (filter)

const numerosAleatorios = [5, 10, 12, 25, 45, 50, 60, 15, 8];

const numerosFiltrados = numerosAleatorios.filter(numero => numero > 10 && numero < 50);

console.log("--- Executando Exercício 16: Filtro de Números ---");
console.log("Array original:", numerosAleatorios);
console.log("Números maiores que 10 e menores que 50:", numerosFiltrados);
console.log("");