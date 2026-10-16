// let scatole = "";
// for (let i = 1; i <= 1000; i++) {

//     scatole += `<div class="box">${i}</div>`;



// }

// console.log(scatole);
// document.getElementById("container").innerHTML += scatole;


// let numeri = "";

// for (let i = 1; i <= 10; i++) {

//     numeri += `${i} `;
//     console.log("Iterazione: ", numeri);

// }

// console.log("Risultato finale: ", numeri);

/*************************************************/

// let scatole = "";

// for (let i = 1; i <= 1000; i++) {

//     scatole += `<div class="box">${i}</div>`;

// }

// // console.log(scatole);
// document.getElementById("container").innerHTML += scatole;

/*************************************************/




// const iscritti = ["Luca", "Marco", "Paolo"]
// for (let i = 0; i < iscritti.length; i++) {
//     const studente = iscritti[i];
//     console.log(studente);
// }
// console.log("contatore dopo for", i);





// let i = 0;

// while (i < iscritti.length) {
//     debugger;
//     let contatore = 0;
//     contatore++;

//     const studente = iscritti[i];

//     console.log(studente);
//     i++;
// }

// console.log("contatore dopo while", i);

// let trovato = false;

// for (let i = 0; i < iscritti.length; i++) {
//     const studente = iscritti[i];

//     if (studente == "Paolo") {
//         console.log("Ho trovato Paolo! Si Trova all' indice " + i);
//         trovato = true;
//     }

// }


// if (!trovato) {
//     console.log("non esiste");
// }


// for (let i = 0; i < iscritti.length; i++) {
//     const studente = iscritti[i];

//     console.log("Sto analizzando: ", studente);

//     if (studente == "Paolo") {
//         console.log("Ho trovato Paolo! Si Trova all' indice " + i);
//         break;
//     } else {
//         console.log("Questo studente non c'è")

//     }
// }

const iscritti = ["Luca", "Marco", "Paolo"]
for (const studente of iscritti) {
    if (studente == "Marco") {
        console.log("Trovato!");

    } else {
        console.log(studente, "non è Marco");
    }
}