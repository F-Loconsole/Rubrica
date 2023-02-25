//  console.log("Un saluto");
// WRAPPER
cardsWrapper = document.querySelector("#cardsWrapper");
// BUTTONS
showContactsBtn = document.querySelector('#showContactsBtn');

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
    }
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
})