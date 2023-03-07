let phonePosition = 1

function addNewPhone() {
    let phoneForm = document.querySelector("form#phones")
    let newPhone = phoneForm.children[0].cloneNode(true)
    newPhone.querySelector("label").textContent = "Telefone " + (++phonePosition) + ": "
    newPhone.querySelector("input").value = ""
    phoneForm.appendChild(newPhone)
    console.log()
}

function printPhone() {
    let messege = ""
    let phones = document.querySelectorAll("input[name='phone']")
    phones.forEach((phone, index) => {
        messege += "Telefone " + (index +1) + ": " + phone.value + "\n"
    })
    alert(messege)
}