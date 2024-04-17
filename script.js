
document.addEventListener("DOMContentLoaded", () => {

    eventos = document.querySelector("#total");
    cards = document.querySelectorAll(".card");
    evtType = document.querySelector("#evt-select");
    
    // let total = cards.length;
    // eventos.innerHTML = total;

    evtType.addEventListener("change", () => {

        total = 0;
        if (evtType.value == "Todos") {
            cards.forEach(element => {
                element.style.display = "block";
                total ++;
            })
            console.log("Total:" + total);
            eventos.innerHTML = total;
        }
        if (evtType.value == "Apresentação") {
            eventos.innerHTML = '';
            cards.forEach(element => {
                if (element.classList.contains("apresentacao")) {
                    element.style.display = "block";
                    total ++;
                    
                } else {
                    element.style.display = "none";
                }
            })
            console.log("Total:" + total);
            eventos.textContent  = total;
        }
        else if (evtType.value == "Exposição") {
            cards.forEach(element => {
                if (element.classList.contains("exposicao")) {
                    element.style.display = "block";
                } else {
                    element.style.display = "none";
                }
            })
        }
        if (evtType.value == "Passeios") {
            cards.forEach(element => {
                if (element.classList.contains("passeios")) {
                    element.style.display = "block";
                } else {
                    element.style.display = "none";
                }
            })}
        if (evtType.value == "Oficinas") {
            cards.forEach(element => {
                if (element.classList.contains("Oficinas")) {
                    element.style.display = "block";
                    total ++;
                } else {
                    element.style.display = "none";
                }
            })
            alert("Total:" + total);
            console.log("Total:" + total);
            eventos.innerHTML = total;
        }
        if (evtType.value == "Artes") {
            cards.forEach(element => {
                if (element.classList.contains("artes")) {
                    element.style.display = "block";
                } else {
                    element.style.display = "none";
                }
            })
        }
        if (evtType.value == "Musica") {
            cards.forEach(element => {
                if (element.classList.contains("musica")) {
                    element.style.display = "block";
                } else {
                    element.style.display = "none";
                }
            })
        }
        total = cards.length;
        eventos.innerHTML = total;
    })
    
})



// cards.forEach(element => {
//     element.addEventListener("click", () => {
//         window.location.href = "eventos.html"
//     })


// });

