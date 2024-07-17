window.addEventListener('resize', mediaCards);

function mediaCards() {
    let screenWidth = window.innerWidth;

    if (screenWidth > 1200){
        elCard.forEach((e, index) => {
            if(index < 6){
                e.classList.remove('hidden-cross-card');
            }
        })
    }

    if (screenWidth < 1200){
        elCard.forEach((e, index) => {
            if(index > 3){
                e.classList.add('hidden-cross-card');
            }
        })
    }

    if (screenWidth < 576){
        elCard.forEach((e, index) => {
            if(index > 1){
                e.classList.add('hidden-cross-card');
            }
        })
    }

}
mediaCards();

const forFormBtn = document.getElementById('forFormBtn')
const formInst = document.getElementById('formInst')

forFormBtn.addEventListener('click', () => {
    formInst.classList.add('form-active')
})