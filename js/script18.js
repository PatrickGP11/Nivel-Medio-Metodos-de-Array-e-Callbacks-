// 18. VERIFICAR EXISTÊNCIA (some)

const listaUsuarios = ["Visitante", "Membro", "Moderador", "Admin", "Suporte"];

const existeAdmin = listaUsuarios.some(usuario => usuario.toLowerCase() === "admin");

console.log("--- Executando Exercício 18: Verificar Existência ---");
console.log("Lista de usuários:", listaUsuarios);
console.log("Existe algum 'Admin' na lista?", existeAdmin); // true
console.log("");