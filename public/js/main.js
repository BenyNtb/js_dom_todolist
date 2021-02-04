let body = document.body
console.log(body);
let taskName = document.querySelector('input')
let addButton = document.querySelectorAll('button')[0]
let allButton = document.querySelectorAll('button')[1]
let doneButton = document.querySelectorAll('button')[2]
let todoButton = document.querySelectorAll('button')[3]
let listeUL1 = document.getElementById('Liste1')
let listeUL2 = document.getElementById('Liste2')
let listeUL3 = document.getElementById('Liste3')
let listeUL4 = document.getElementById('Liste4')
let contenu= document.querySelector('ul#liste')
let monTabDone = []
let monTabtodo = []
let monTabAll = []

console.log(taskName);
console.log(addButton);
console.log(allButton);
console.log(doneButton);
console.log(todoButton);
// console.log(liste);
// EVENT
// document.addEventListener("keyup", function(event){
//     if (event.key == 13){
//         let todoButton = taskName;
//         if(toDo){
//             addButton(toDo)
//         }
//         taskName.value = "";
//     }
// })
// addButton.addEventListener('click', () => {
//     listeUL.appendChild(listeUL.firstChild)
// })

// ADD A TASK

let monTab = []

addButton.onclick = () => {
    let userValue = taskName.value;// recup val.input
if (userValue === userValue) {
        let monLi = document.createElement('li');
        monTab.push(userValue);
        listeUL1.appendChild(monLi); 
        // SPAN
        let span = document.createElement('span');
        span.style.backgroundColor = 'white';
        span.style.padding = '0 200px';
        span.style.margin = '10px 20px';
        span.innerText = userValue;
        monLi.append(span);
        // CHECKBOX
        let checkBox = document.createElement('input');
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("class", "checkbox");
        checkBox.style.margin = '10px 20px';
        monLi.append(checkBox);
        // BOUTON SUPPRIMER
        let suppr = document.createElement('button');
        suppr.setAttribute('color', 'red');
        suppr.style.margin = '10px 20px';
        suppr.innerHTML = '<i class="trash fas fa-trash-alt"></i>';
        monLi.append(suppr)
        monTab.push(suppr)
        // BOUTON MODIFIER
        let modif = document.createElement('button');
        modif.setAttribute('color', 'white')
        modif.innerHTML = '<i class="pen fas fa-edit"></i>'
        monLi.append(modif);
        monTab.push(modif)
        // Supprime event
        suppr.addEventListener('click', () => {
        monLi.remove(suppr.parentNode)
        })
        // Modifie event
        modif.addEventListener('click', () => {
            let span2 = span;
            let span2text = span.innerHTML;
            let parent = span2.parentNode;
            console.log(span2.parentNode);
            let input2 = document.createElement('input');
            input2.setAttribute('type', 'text');
            input2.setAttribute('value', span2text);
            input2.setAttribute('class', 'newI');
            span2.parentNode.replaceChild(input2, span2);
            let input2M = document.querySelector('.newI');
            input2M.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    let valeurI = input2.value;
                    let span3 = document.createElement('span');
                    span3.innerText = valeurI;
                    parent.replaceChild(span3, input2); 
                }
            })
        })
        let checkbox = document.getElementsByClassName('checkbox')
        Array.from(checkbox).forEach(element => {
            element.addEventListener('change', (event) => {
                console.log(element.checked);
                if (element.checked) {
                    monTabDone.push(element)
                    alert('checked');
                } else {
                    monTabtodo.push()
                }
            })
            
        });
    }
};

// monTabDone.addEventListener('click', (e) => {
//     if (e.checked) {
//         console.log(monTabDone);
//     } else {
//         console.log(monTabtodo);
//     }
// })



doneButton.onclick = () => {
    monTabDone.push(listeUL2)
    // listeUL1.push()
    console.log(listeUL2);
    
    
    
    
    console.log(monTab);
}

// TASK TO DO






















