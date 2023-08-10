const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
];
const adulto = [];
const jovem = [];
for (let usuario of usuarios) {
    if (usuario.idade > 18) {
        adulto.push(usuario);
    } else {
        jovem.push(usuario);
    }
}
console.log(adulto);

console.log(jovem);
