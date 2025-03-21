let body=document.querySelector("body")
 let ul1=document.createElement("ul")

body.appendChild(ul1)
// body.innerHTML="<ul></ul>"


let l1 = document.createElement("li")
let l2 = document.createElement("li")
let l3 = document.createElement("li")
let l4 = document.createElement("li")

// let tab=[l1,l2,l3,l4]



ul1.appendChild(l1)
ul1.appendChild(l2)
ul1.appendChild(l3)
ul1.appendChild(l4);

l1.className="item-1"
l2.className="item-2"
l3.className="item-3"
l4.className="item-4"

ul1.removeChild(l4);

let mes1=prompt("entrez du text")



// l1.innerText= mes1;

let tab=mes1.split(",")


for(let i=0;i<tab.length;i++){
    let l = document.createElement("li")
    ul1.appendChild(l)
    l.className="item-x"
l.innerText=tab[i];
}

ul1.style.color="red"

// ul1.style.backgroundColor = "gray"
ul1.style.fontSize ="50px"
ul1.style.widht="900px"
ul1.style.height="900px"
ul1.style.textDecoration="none";
ul1.style.fontFamily = "Open sans"
// ul1.style.display="flex";
// ul1.style.flex-direction = "column"

// ul1.style.justifyContent="space-between"
// ul1.style.justifyContent= "center"
// ul1.style.alignItems="center"
// ul1.style.gap="10px"