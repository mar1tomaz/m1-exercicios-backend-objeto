const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

for (let usuario of usuarios) {
    let quantidade = "";

    if (usuario.pets.length === 1) {
        quantidade = `tenho ${usuario.pets.length} pet`;
    } else if (usuario.pets.length < 1) {
        quantidade = `não tenho pets`;
    } else {
        quantidade = `tenho ${usuario.pets.length} pets`;
    }

    console.log(`Sou ${usuario.nome} e ${quantidade}.`);
}





