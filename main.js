function generaInfoBiglietto(){

    // Prezzo base per km
    let kmPrice= 0.21;
    console.log(kmPrice);

    // Inizializzazione prezzoBiglietto
    let prezzoBiglietto;

    // Recupero INPUT UTENTE per nome
    let nome = document.getElementById("inputNome").value;
    console.log(nome);

    // Recupero INPUT UTENTE per km
    let km = document.getElementById("inputKm").value; 
    console.log(km);

    // Recupero INPUT UTENTE per eta
    let eta = document.getElementById("inputEta").value; 
    console.log(eta);


    // Condizione sull'eta
    if(eta === "minorenne"){

        // Valore prezzo viaggio se minorenne
        prezzoBiglietto= (km * kmPrice) - (km * kmPrice) * 0.2;

        // Stampa del prezzo viaggio
        document.getElementById("prezzoViaggio").innerHTML= `${prezzoBiglietto.toFixed(2)}`
        console.log(prezzoBiglietto);
    }
    else if (eta === "over65"){
        // Valore prezzo viaggio se over65
        prezzoBiglietto= (km * kmPrice) - (km * kmPrice) * 0.4;

        // Stampa del prezzo viaggio
        document.getElementById("prezzoViaggio").innerHTML= `${prezzoBiglietto.toFixed(2)}`
        console.log(prezzoBiglietto);
    }
    else{
        // Valore prezzo viaggio se magiorenne
        prezzoBiglietto= km * kmPrice;

        // Stampa del prezzo viaggio
        document.getElementById("prezzoViaggio").innerHTML= `${prezzoBiglietto.toFixed(2)}`
        console.log(prezzoBiglietto);
    }
}

