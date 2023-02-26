//  console.log("Un saluto");
// WRAPPER
cardsWrapper = document.querySelector("#cardsWrapper");
// BUTTONS
showContactsBtn = document.querySelector('#showContactsBtn');
addContactBtn = document.querySelector('#addContactBtn');
removeContactBtn = document.querySelector('#removeContactBtn');
// dati input
nameInput = document.querySelector("#nameInput");
numberInput = document.querySelector("#numberInput");
mostra = false;
const RUBRICA = {
    contacts : [
        {name: 'Antonio', number:112233},
        {name: 'Francesco', number:445566},
        {name: 'Emanuele', number:778899}
    ],
    showContacts : function() {
        cardsWrapper.innerHTML = '';
        this.contacts.forEach(contact => {
            div = document.createElement("div");
            div.classList.add('col-12', 'col-lg-8', 'my-4');
            div.innerHTML = `
            <div class="card-custom">
                <p class="m-0">${contact.name}</p>
                <p class="m-0">${contact.number}</p>
                <i class="fa-solid fa-trash-can fa-2x icon"></i>
            </div>
            `;
            cardsWrapper.appendChild(div);
            // console.log(div);
        });
        icons = document.querySelectorAll(".icon");
        icons.forEach( (icona, pos) => {
            icona.addEventListener('click', ()=> {
                nome = this.contacts[pos].name;
                this.removeContact(nome);
                RUBRICA.showContacts();
                showContactsBtn.innerHTML = "Nascondi Rubrica";
                mostra = true;
            });
        });
    },
    addContact : function(newName, newNumber)
    {
        if (nameInput.value != "" && numberInput.value != "")
            this.contacts.push( {name: newName, number: newNumber});
        else
            alert("Inserire un nome e un numero");
    },
    removeContact: function(Name)
    {
        if (Name != ""){
            nomi = this.contacts.map( (contact) => contact.name.toUpperCase());
            pos = nomi.indexOf(Name.toUpperCase());
            if (pos < 0)
                alert("Contatto non presente in rubrica");
            else
                this.contacts.splice(pos,1);
        }
        else
            alert("Inserire un nome da cancellare");
    },
}
showContactsBtn.addEventListener('click', ()=> {
    if (! mostra)
    {
        RUBRICA.showContacts();
        showContactsBtn.innerHTML = "Nascondi Rubrica";
    }
    else
    {
        cardsWrapper.innerHTML = '';
        showContactsBtn.innerHTML = "Mostra Rubrica";
    }
    mostra = ! mostra;
});
addContactBtn.addEventListener('click', ()=> {
    RUBRICA.addContact(nameInput.value, numberInput.value);
    RUBRICA.showContacts();
    showContactsBtn.innerHTML = "Nascondi Rubrica";
    mostra = true;
});
removeContactBtn.addEventListener('click', ()=> {
    RUBRICA.removeContact(nameInput.value);
    RUBRICA.showContacts();
    showContactsBtn.innerHTML = "Nascondi Rubrica";
    mostra = true;
});
