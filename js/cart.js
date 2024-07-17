const miniCartContainer = document.querySelector('.cart-head__content')
const cartBtn = document.querySelector('.minicart-icn')
const miniCart = document.querySelector('.cart-head')
const total = document.querySelector('.cart-head-cost')
const elInMiniCart = document.getElementById('elInMiniCart')
const elInMiniCart2 = document.getElementById('elInMiniCart2')
const inModalCart = document.getElementById('inModalCart')
const fullCartContainer = document.querySelector('.full-cards')
const fullLenghtText = document.getElementById('fullLenght')
const displayCount = document.getElementById('countMiniCart')
const mobCartBtn = document.getElementById('phoneCart')
cartBtnText = document.getElementById('cartText')
let mCart = []
let deleteCard = 0;
let cl = 0;

cartBtn.addEventListener('click', () => {
    let screenWidth = window.innerWidth;

    if (screenWidth > 576){
        miniCart.classList.add("miniCart-active");
        spaceCart();
        modalOpen();
    } else {
        closeModals();
        fullCart.classList.add('full-cart-active')
        displayDel();
        addFull();
    }

})

mobCartBtn.addEventListener('click', () => {
    closeModals();
    fullCart.classList.add('full-cart-active')
    displayDel();
    addFull();
})

cartBtnText.addEventListener('click', () => {
    miniCart.classList.add("miniCart-active");
    spaceCart();
    modalOpen();
})

inCart.forEach((e) => {
    e.addEventListener('click', () => {
        let cartImg = e.parentNode.querySelector('img').getAttribute('src')
        let title = e.parentNode.querySelector('h6')
        let cost = e.parentNode.querySelector('p')
        addFull();
        displayDel();

        const cartCard =
            `<div id="miniCart">
                <img src="${cartImg}" alt="ops">
                <div class="cost-info">
                    <h3>${title.innerText}</h3>
                    <strong>${cost.innerText}</strong>
                </div>
                <button id="deleteCard">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clip-path="url(#clip0_65_664)">
                        <path d="M18.5715 2.85715H13.5715V2.14285C13.5715 0.959387 12.6121 0 11.4287 0H8.57152C7.38805 0 6.42867 0.959387 6.42867 2.14285V2.85715H1.42865C1.03415 2.85715 0.714355 3.17695 0.714355 3.57145C0.714355 3.96595 1.03419 4.28571 1.42865 4.28571H2.20506L3.57151 19.3507C3.6052 19.7196 3.91537 20.0015 4.28581 20H15.7144C16.0848 20.0015 16.395 19.7196 16.4287 19.3507L17.7951 4.28571H18.5715C18.966 4.28571 19.2858 3.96591 19.2858 3.57141C19.2858 3.17691 18.966 2.85715 18.5715 2.85715ZM7.85722 2.14285C7.85722 1.74835 8.17702 1.42856 8.57152 1.42856H11.4287C11.8232 1.42856 12.143 1.74835 12.143 2.14285V2.85715H7.85726V2.14285H7.85722ZM15.0622 18.5714H4.93796L3.64295 4.28571H7.14296H16.3608L15.0622 18.5714Z" fill="#4D4D4D" fill-opacity="0.3"/>
                        <path d="M7.8573 16.381C7.85722 16.38 7.85717 16.379 7.85709 16.378L7.14279 6.37805C7.11479 5.98355 6.77227 5.68647 6.3778 5.71447C5.9833 5.74247 5.68623 6.085 5.71423 6.47946L6.42853 16.4794C6.45519 16.854 6.76733 17.144 7.14283 17.143H7.19427C7.58781 17.1157 7.88467 16.7745 7.8573 16.381Z" fill="#4D4D4D" fill-opacity="0.3"/>
                        <path d="M9.99994 5.71436C9.60544 5.71436 9.28564 6.03415 9.28564 6.42865V16.4286C9.28564 16.8231 9.60544 17.1429 9.99994 17.1429C10.3944 17.1429 10.7142 16.8231 10.7142 16.4286V6.42865C10.7142 6.03415 10.3944 5.71436 9.99994 5.71436Z" fill="#4D4D4D" fill-opacity="0.3"/>
                        <path d="M13.6219 5.71423C13.2274 5.68623 12.8849 5.9833 12.8569 6.3778L12.1426 16.3778C12.1137 16.7712 12.4091 17.1136 12.8026 17.1425C12.8038 17.1426 12.8049 17.1427 12.8062 17.1428H12.8569C13.2324 17.1437 13.5445 16.8537 13.5712 16.4792L14.2855 6.47921C14.3135 6.08475 14.0164 5.74227 13.6219 5.71423Z" fill="#4D4D4D" fill-opacity="0.3"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_65_664">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>`;
                
        miniCartContainer.insertAdjacentHTML('beforeend', cartCard);

        //fullCart

        const fullCartCard =
            `<div class="full-cart">
                <h5 id="space">Ваша корзина пуста</h5>
                <div class="full-cart__content">
                    <div class="full-cart__card flex-box">
                        <img src="${cartImg}" alt="">
                        <div class="full-cart__card__content">
                            <h3>${title.innerText}</h3>
                            <strong>${cost.innerText}</strong>
                        </div>
                        <button id="fullDelete"><span>Удалить</span></button>
                    </div>
                </div>
            </div>`

        fullCartContainer.insertAdjacentHTML('beforeend', fullCartCard);

        const fullDelBtn = document.querySelectorAll('#fullDelete')
        
        const dc = document.querySelectorAll('#deleteCard');
        deleteCard = dc;

        fullDelBtn.forEach((y, index) => {
            y.addEventListener('click', () => {
                let yIndex = index

                console.log(yIndex);
                y.parentNode.remove();

                deleteCard[yIndex].parentNode.remove();
                spaceCart();
                countCost();
                cartElms();
                cl = 1;
                displayDel();
            })
        })

        //_________________

        deleteCard.forEach((o, index) => {
            o.addEventListener('click', () => {
                modal.classList.remove("modal-active");
                o.parentNode.remove();
                let oIndex = index

                fullDelBtn[oIndex].parentNode.remove();

                spaceCart();
                countCost();
                cartElms();
                displayDel();
                cl = 1;
            })
        })
        countCost();
        cartElms();
    })
})

inModalCart.addEventListener('click', () => {

    let cartImg = modalBigImg.getAttribute('src')
    let title = document.getElementById('hModal')
    let cost = mCost

    const cartCard =
        `<div id="miniCart">
            <img src="${cartImg}" alt="ops">
            <div class="cost-info">
                <h3>${title.innerText}</h3>
                <strong>${cost.innerText}</strong>
            </div>
            <button id="deleteCard">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_65_664)">
                    <path d="M18.5715 2.85715H13.5715V2.14285C13.5715 0.959387 12.6121 0 11.4287 0H8.57152C7.38805 0 6.42867 0.959387 6.42867 2.14285V2.85715H1.42865C1.03415 2.85715 0.714355 3.17695 0.714355 3.57145C0.714355 3.96595 1.03419 4.28571 1.42865 4.28571H2.20506L3.57151 19.3507C3.6052 19.7196 3.91537 20.0015 4.28581 20H15.7144C16.0848 20.0015 16.395 19.7196 16.4287 19.3507L17.7951 4.28571H18.5715C18.966 4.28571 19.2858 3.96591 19.2858 3.57141C19.2858 3.17691 18.966 2.85715 18.5715 2.85715ZM7.85722 2.14285C7.85722 1.74835 8.17702 1.42856 8.57152 1.42856H11.4287C11.8232 1.42856 12.143 1.74835 12.143 2.14285V2.85715H7.85726V2.14285H7.85722ZM15.0622 18.5714H4.93796L3.64295 4.28571H7.14296H16.3608L15.0622 18.5714Z" fill="#4D4D4D" fill-opacity="0.3"/>
                    <path d="M7.8573 16.381C7.85722 16.38 7.85717 16.379 7.85709 16.378L7.14279 6.37805C7.11479 5.98355 6.77227 5.68647 6.3778 5.71447C5.9833 5.74247 5.68623 6.085 5.71423 6.47946L6.42853 16.4794C6.45519 16.854 6.76733 17.144 7.14283 17.143H7.19427C7.58781 17.1157 7.88467 16.7745 7.8573 16.381Z" fill="#4D4D4D" fill-opacity="0.3"/>
                    <path d="M9.99994 5.71436C9.60544 5.71436 9.28564 6.03415 9.28564 6.42865V16.4286C9.28564 16.8231 9.60544 17.1429 9.99994 17.1429C10.3944 17.1429 10.7142 16.8231 10.7142 16.4286V6.42865C10.7142 6.03415 10.3944 5.71436 9.99994 5.71436Z" fill="#4D4D4D" fill-opacity="0.3"/>
                    <path d="M13.6219 5.71423C13.2274 5.68623 12.8849 5.9833 12.8569 6.3778L12.1426 16.3778C12.1137 16.7712 12.4091 17.1136 12.8026 17.1425C12.8038 17.1426 12.8049 17.1427 12.8062 17.1428H12.8569C13.2324 17.1437 13.5445 16.8537 13.5712 16.4792L14.2855 6.47921C14.3135 6.08475 14.0164 5.74227 13.6219 5.71423Z" fill="#4D4D4D" fill-opacity="0.3"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_65_664">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </button>
        </div>`;
            
    miniCartContainer.insertAdjacentHTML('beforeend', cartCard);

    // fullCart

    const ullCartCard =
        `<div class="full-cart">
            <h5 id="space">Ваша корзина пуста</h5>
            <div class="full-cart__content">
                <div class="full-cart__card flex-box">
                    <img src="${cartImg}" alt="">
                    <div class="full-cart__card__content">
                        <h3>${title.innerText}</h3>
                        <strong>${cost.innerText}</strong>
                    </div>
                    <button id="fullDelete"><span>Удалить</span></button>
                </div>
            </div>
        </div>`

    fullCartContainer.insertAdjacentHTML('beforeend', ullCartCard);

    const fullDelBtn = document.querySelectorAll('#fullDelete')

    fullDelBtn.forEach((y, index) => {
        y.addEventListener('click', () => {
            let yIndex = index

            console.log(yIndex);
            y.parentNode.remove();

            deleteCard[yIndex].parentNode.remove();
            spaceCart();
            countCost();
            cartElms();
            cl = 1;
            displayDel();
        })
    })




    //_________________


    const dc = document.querySelectorAll('#deleteCard');
    deleteCard = dc;

    deleteCard.forEach((o) => {
        o.addEventListener('click', () => {
            o.parentNode.remove();
            spaceCart();
            countCost();
            cartElms();
            cl = 1;
        })
        o.addEventListener('mouseover', () => {
            cl = 1;
        })
    })
    countCost();
    cartElms();
    closeModals();
    displayDel();
})


function spaceCart() {
    if (miniCartContainer.childElementCount == 0){
        miniCart.querySelector('h5').style.display = "block"
        total.style.display = "none"
        total.nextElementSibling.style.marginLeft ="auto"
        total.nextElementSibling.style.marginRight ="auto"
    } else {
        miniCart.querySelector('h5').style.display = "none"
        total.style.display = "block"
        total.nextElementSibling.style.marginLeft ="0"
        total.nextElementSibling.style.marginRight ="0"
    }
    if (miniCartContainer.childElementCount < 3){
        miniCartContainer.style.overflowY = "hidden"
    } else {
        miniCartContainer.style.overflowY = "scroll"
    }
}

function countCost() {
    let sum = 0;
    const Costs = miniCartContainer.querySelectorAll('strong')
    let sumCost = [];

    Costs.forEach(function(el) {
        let contCost = parseInt(el.textContent.replace(/\s/g, '').replace(/[^\d.-]/g, ''));;  
        sumCost.push(contCost);
      });

      sumCost.forEach((sumC) => {
        sum += sumC;
      });

      const allCost = miniCart.querySelector('span')
      const fullSumm = document.getElementById('fullSumm')
      allCost.innerText = sum.toLocaleString() + " р";
      fullSumm.innerText = sum.toLocaleString() + " р";
}

function cartElms() {
    if (miniCartContainer.childElementCount >= 1){
        elInMiniCart2.innerText = miniCartContainer.childElementCount;
        elInMiniCart.innerText = miniCartContainer.childElementCount;
        elInMiniCart2.parentNode.style.display = "flex"
        elInMiniCart.parentNode.style.display = "flex"
    } else {
        elInMiniCart.parentNode.style.display = "none"
        elInMiniCart2.parentNode.style.display = "none"
    }
}

function modalOpen() {
    if (miniCartContainer.childElementCount > 0){
        mCart = document.querySelectorAll('#miniCart')
        inModalContent();
    }
}

function inModalContent() {
    mCart.forEach((m) => {
        m.addEventListener('mouseover', () => {
            cl = 0;
        })
        m.addEventListener('click', () => {

            if (cl == 0) {
                miniCart.classList.remove("miniCart-active");
                modal.classList.add("modal-active");
            } else {
                modal.classList.remove("modal-active");
                miniCart.classList.add("miniCart-active");
            }

            const modCardImg = m.querySelector('img');
            let nike = modCardImg.getAttribute('src')
            modalBigImg.setAttribute('src', nike)
        
            if(m.querySelector('h3').innerText.includes("Nike")){
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
            
            const cost = m.querySelector('strong')
            let inCost = cost.innerText;
            mCost.innerText = inCost.slice(0, -1) 
            let y = parseInt(parseInt(inCost.replace(/\s/g, ""))) + 789;
            mCostPlus.innerText = y.toLocaleString('ru-RU')
            
            document.getElementById('hModal').innerText = m.querySelector('h3').innerText

            
        })
    })
}
cartElms();


const compound = document.getElementById('compound')
const fullCardsContainer = document.querySelector('.full-cards')
const allFullContainer = document.querySelector('.full-cart-container')
const vectorCart = document.getElementById('vector')

compound.addEventListener('click', () => {
    fullCardsContainer.classList.toggle('full-cards-active')
    if(fullCardsContainer.classList.contains('full-cards-active') && miniCartContainer.childElementCount > 0){
        fullCardsContainer.style.animation = "cartAnimAlt .6s ease-in forwards"
        allFullContainer.style.animation = "cartContainerAlt .6s ease-out forwards"
        vectorCart.style.rotate = "none"
    } else if(miniCartContainer.childElementCount > 0){
        fullCardsContainer.style.animation = "cartAnim .6s ease-out forwards"
        allFullContainer.style.animation = "cartContainer .6s ease-out forwards"
        vectorCart.style.rotate = "180deg"
    }
    displayFull()
})

const maxScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;


  


window.addEventListener('scroll', function() {
    const scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
    );
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const clientHeight = window.innerHeight || document.documentElement.clientHeight;

    if (window.innerWidth < 992) {
        const scrollPosition = window.scrollY || window.pageYOffset;
        if(scrollPosition > 100 && scrollTop + clientHeight < scrollHeight){
            phoneCart.style.display = "block"
        } else {
            phoneCart.style.display = "none"
        }
      }
  });

function displayFull() {
    if (miniCartContainer.childElementCount == 0){
        fullCardsContainer.classList.remove('full-cards-active')
        allFullContainer.style.animation = "cartContainer .6s ease-out forwards"
        vectorCart.style.rotate = "180deg"
    }
}

function displayDel() {
    if(miniCartContainer.childElementCount > 0){
        fullLenghtText.innerText = elInMiniCart.innerText + " шт"
    } else {
        fullLenghtText.innerText = "0 шт"
    }
}

function addFull() {
    fullCardsContainer.classList.add('full-cards-active')
    allFullContainer.style.animation = "none"
    allFullContainer.style.height = "415px"
    vectorCart.style.rotate = "none"
}