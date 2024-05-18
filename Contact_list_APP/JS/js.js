// open and close form modal
let addNewBtn = document.querySelector(".addNew");
let closeFormBtn = document.querySelector(".addNewContact .close");
let formSection = document.querySelector(".form");
let contactForm = document.querySelector(".addNewContact");
addNewBtn.addEventListener("click", () => {
    formSection.classList.add("overlay");
    contactForm.style.display = "block";

});
closeFormBtn.addEventListener("click", () => {
    formSection.classList.remove("overlay");
    contactForm.style.display = "none";
})

// create array to store data
let savedData = localStorage.getItem("contact");

let contactlist = JSON.parse(savedData || "[]");
let contactFormName = document.getElementById("contact_new_name");
let contactFormPhone = document.getElementById("contact_new_phone");
let contactFormEmail = document.getElementById("contact_new_email");
let contactFormAddress = document.getElementById("contact_new_address");

let contactLastId = contactlist.length;

let newContact = () => {
    contactlist.push({
        contactId: contactLastId += 1,
        contactName: contactFormName.value,
        contactPhone: contactFormPhone.value,
        contactEmail: contactFormEmail.value,
        contactAddress: contactFormAddress.value
    })

    console.log(contactlist);

}


// Add content to table
let contactTbody = document.getElementById("tbody");

let showContacts = () => {
    let trs = '';
    contactlist.forEach(contact => {
        trs += `
        <tr data-id = ${contact.contactId}>
        <td>${contact.contactId}</td>
        <td>${contact.contactName}</td>
        <td>${contact.contactPhone}</td>
        <td>${contact.contactEmail}</td>
        <td>${contact.contactAddress}</td>
        <td><i class="fa-solid fa-file-pen" style="cursor:pointer"></i></td>
        <td><i class="fa-solid fa-trash" style="cursor:pointer"></i></td>
        </tr>
        `
    })
    contactTbody.innerHTML = trs;
}
showContacts();


//reset contactForm
let = resetFormContact = () => {
    contactFormName.value = '';
    contactFormPhone.value = '';
    contactFormEmail.value = '';
    contactFormAddress.value = '';
}

let svaeBtn = document.querySelector(".save_btn");
let saveHandler = () => {
    newContact();
    localStorage.setItem("contact", JSON.stringify(contactlist));
    showContacts();
    resetFormContact();
    formSection.classList.remove("overlay");
    contactForm.style.display = "none";

}
svaeBtn.addEventListener("click", saveHandler);


function edit(e) {

    // Update Part
    if (e.target.classList.contains("fa-file-pen")) {
        let tr = e.target.closest('tr');
        let id = tr.dataset.id;

        let index; // Declare index outside the if block

        if (id !== undefined) {
            index = parseInt(id, 10) - 1;
        } else {
            console.error("Error: id is undefined");
        }

        if (index !== undefined) { // Check if index is defined
            contactFormName.value = contactlist[index].contactName;
            contactFormPhone.value = contactlist[index].contactPhone;
            contactFormEmail.value = contactlist[index].contactEmail;
            contactFormAddress.value = contactlist[index].contactAddress;

            formSection.classList.add("overlay");
            contactForm.style.display = "block";
            let updateHandler = () => {
                let updatedContact = {
                    contactId: parseInt(id),
                    contactName: contactFormName.value,
                    contactPhone: contactFormPhone.value,
                    contactEmail: contactFormEmail.value,
                    contactAddress: contactFormAddress.value
                }
                contactlist[index] = updatedContact;
                localStorage.setItem("contact", JSON.stringify(contactlist));


                formSection.classList.remove("overlay");
                contactForm.style.display = "none";

                resetFormContact();

                showContacts();

                svaeBtn.removeEventListener("click", updateHandler);
                svaeBtn.addEventListener("click", saveHandler);
                console.log("update");

            }
            svaeBtn.removeEventListener("click", saveHandler);
            svaeBtn.addEventListener("click", updateHandler);
        }
    }

    // delete part

    if (e.target.classList.contains("fa-trash")) {
        let tr = e.target.closest('tr');
        let id = tr.dataset.id;

        let index = contactlist.findIndex(contact => contact.contactId == id);

        if (index !== -1) {
            contactlist.splice(index, 1);
            localStorage.setItem("contact", JSON.stringify(contactlist));

            showContacts();

        }

    }
}


contactTbody.addEventListener("click", edit)


// Search Part
let searchInput = document.getElementById("search");
let form = searchInput.parentElement;
let trs = document.querySelectorAll("tbody tr");
form.addEventListener("submit", e => e.preventDefault());


searchInput.addEventListener("keyup", () => {
    let searchInputValue = searchInput.value.toLowerCase();

    trs.forEach(tr => {
        trName = tr.children[1].textContent.toLowerCase();

        if (trName.includes(searchInputValue)) {
            tr.style.display = "";
        }
        else {
            tr.style.display = "none";
        }
    })
})