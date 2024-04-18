eventos = document.querySelector("#total");
cards = document.querySelectorAll(".card");
evtType = document.querySelector("#evt-select");

    let total = cards.length;
    eventos.innerHTML = total;

evtType.addEventListener("change", () => {

    total = 0;

    if (evtType.value == "Todos") {
        cards.forEach(element => {eventos
            element.style.display = "block";
            total ++;
        })
        eventos.innerHTML = total;
    }

    if (evtType.value == "Apresentação") {
        
        cards.forEach(element => {
            if (element.classList.contains("apresentacao")) {
                element.style.display = "block";
                total ++;
            } else {
                element.style.display = "none";
            }
        })
        eventos.innerHTML = total;
    }

    if (evtType.value == "Exposição") {
        cards.forEach(element => {
            if (element.classList.contains("exposicao")) {
                element.style.display = "block";
                total ++;
            } else {
                element.style.display = "none";
            }
        })
        eventos.innerHTML = total;
    }
    if (evtType.value == "Passeios") {
        cards.forEach(element => {
            if (element.classList.contains("passeios")) {
                element.style.display = "block";
                total ++;
            } else {
                element.style.display = "none";
            }
        })
        eventos.innerHTML = total;
    }

    if (evtType.value == "Oficinas") {
        cards.forEach(element => {
            if (element.classList.contains("Oficinas")) {
                element.style.display = "block";
                total ++;
            } else {
                element.style.display = "none";
            }
        })
        eventos.innerHTML = total;
    }
    if (evtType.value == "Artes") {
        cards.forEach(element => {
            if (element.classList.contains("artes")) {
                element.style.display = "block";
                total ++;
            } else {
                element.style.display = "none";
            }
        })
        eventos.innerHTML = total;
    }
    if (evtType.value == "Musica") {
        cards.forEach(element => {
            if (element.classList.contains("musica")) {
                element.style.display = "block";
                total ++;
            } else {
                element.style.display = "none";
            }
        })
        eventos.innerHTML = total;
    }
})
    




// cards.forEach(element => {
//     element.addEventListener("click", () => {
//         window.location.href = "eventos.html"
//     })


// });

