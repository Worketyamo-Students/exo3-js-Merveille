let body = document.querySelector("body")
let ul1 = document.createElement("ul")

body.appendChild(ul1)




let l1 = document.createElement("li")

for (let i = 1; i <= 4; i++) {
    l1 = document.createElement("li")
    ul1.appendChild(l1)
    l1.className = "item-" + i
    if (i == 4) {
        ul1.removeChild(l1);
    }
}


let mes1 = prompt("entrez du text")

let tab = mes1.split(",")


for (let i = 0; i < tab.length; i++) {
    let l = document.createElement("li")
    ul1.appendChild(l)
    l.className = "item-x"
    l.innerText = tab[i];
}

ul1.style.color = "red"

// ul1.style.backgroundColor = "gray"
ul1.style.fontSize = "50px"
ul1.style.widht = "900px"
ul1.style.height = "900px"
ul1.style.textDecoration = "none";
ul1.style.fontFamily = "Open sans"
ul1.style.listStyleType = "none"
ul1.style.fontWeight = "800"
// ul1.style.display="flex";
// ul1.style.flex-direction = "column"

// ul1.style.justifyContent="space-between"
// ul1.style.justifyContent= "center"
// ul1.style.alignItems="center"
