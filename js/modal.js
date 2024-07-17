const modal = document.querySelector('.modal');
const modCard = document.querySelectorAll('.cross-card');
const modalBg = document.querySelectorAll('.modal-background');
const modalBigImg = document.querySelector('.big')
const modalSmallImg = document.querySelectorAll('.small')
const mCost = document.getElementById('modalCost')
const mCostPlus = document.getElementById('modalCost+')
const inCart = document.querySelectorAll('.inCart')
const modalClose = document.querySelectorAll('#modalClose')
const fullCartOpenBtn = document.getElementById('fullCartOpen')
const fullCart = document.querySelector('.full-carts')
let i2 = ""


modalBg.forEach((e) => {
    e.addEventListener('click', closeModals)
})

modalClose.forEach((e) => {
    e.addEventListener('click', closeModals)
})

fullCartOpenBtn.addEventListener('click', () => {
    addFull();
    closeModals();
    fullCart.classList.add('full-cart-active')
    displayDel();
})

modCard.forEach((e) => {
    e.addEventListener('click', () => {

        modal.classList.add("modal-active");

        const modCardImg = e.querySelector('img');
        let nike = modCardImg.getAttribute('src')
        modalBigImg.setAttribute('src', nike)

        if(e.querySelector('h6').innerText.includes("Nike")){
            i2 = "./img/nike2.jpg"
        } else {
            i2 = "./img/puma2.jpg"
        }
    
        modalSmallImg.forEach((i, index) => {
            if (index % 2 === 0) {
                i.setAttribute('src', i2)
            } else {
                i.setAttribute('src', nike)
            }
            i.addEventListener('click', () => {
                bigI = i.getAttribute('src');
                modalBigImg.setAttribute('src', bigI)
            })
        })
        
        const cost = e.querySelector('#cost')
        let inCost = cost.innerText;
        mCost.innerText = inCost.slice(0, -1) 
        let y = parseInt(parseInt(inCost.replace(/\s/g, ""))) + 789;
        mCostPlus.innerText = y.toLocaleString('ru-RU')
        
        document.getElementById('hModal').innerText = e.querySelector('h6').innerText

    })
    inCart.forEach((k) => {
        k.addEventListener('mouseover', () => {
            e.addEventListener('click', () => {
                modal.classList.remove("modal-active");
            })
        }) 
        k.addEventListener('mouseleave', () => {
            e.addEventListener('click', () => {
                modal.classList.add("modal-active");
            })
        }) 
    })
})

function closeModals() {
    modal.classList.remove("modal-active");
    miniCart.classList.remove("miniCart-active");
    formInst.classList.remove("form-active");
    fullCart.classList.remove('full-cart-active')
}

