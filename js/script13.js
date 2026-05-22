// 13. Busca de Usuário

const usuarios = [{id: 1, nome: "A"}, {id: 3, nome: "B"}];

const busca = usuarios.find(u => u.id === 3);

console.log("Usuário ID 3:", busca); // Saída: {id: 3, nome: "B"}