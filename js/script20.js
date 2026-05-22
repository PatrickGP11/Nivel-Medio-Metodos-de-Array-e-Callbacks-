// 20. Objeto Curto (Short syntax)

const criarProduto = (nome, categoria) => ({ nome, categoria });

console.log("Novo Objeto:", criarProduto("Teclado", "TI")); // Saída: {nome: "Teclado", categoria: "TI"}