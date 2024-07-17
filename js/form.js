const instInput = document.querySelectorAll('#instInput')
const instBtn = document.getElementById('iBtn')

instBtn.addEventListener('click', () => {
    instInput.forEach((e) => {
        if (e.value == '') {
            event.preventDefault();
            console.log(e.previousElementSibling);
            e.previousElementSibling.style.display = "block";
        } else {
            e.previousElementSibling.style.display = "none";
        }
    })
})
