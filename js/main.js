const moreBtn = document.getElementById('showMore');
const crossCards = document.querySelectorAll('.cross-card');

moreBtn.addEventListener('click', more);

function more() {
    crossCards.forEach((e) => {
        e.classList.remove('hidden-cross-card');
    })
    moreBtn.style.display = 'none';
}

const StepBtn1 = document.querySelector('#stepBtn1');
const ideal = document.querySelectorAll('.ideal-main');
const Icontainer = document.querySelectorAll('.ideal-card');
let nextIndex = 0;



function tus() {
    Icontainer.forEach((e) => {
        const fake = e.querySelector('.fake-chek');
        fake.style.animation = 'IdealAnim .2s linear';
    })
}

function tusN() {
    Icontainer.forEach((e) => {
        const fake = e.querySelector('.fake-chek');
        fake.style.animation = 'none';
    })
}



StepBtn1.addEventListener('click', () => {
    nextIndex++;
    iop();
})


let Icount = 0;

Icontainer.forEach((e) => {
    const allInp = e.querySelectorAll('input[type="checkbox"]');
    allInp.forEach((i) => {
        i.addEventListener('change', () => {
            if (i.checked === true) {
                Icount++;
            }
            if (!i.checked){
                Icount--;
            }
        })
    })
})

function iop(){
        if(Icount < 1){
            nextIndex = 0;
            ideal[nextIndex].classList.remove('ideal-hide');
            tus();
            setTimeout(tusN, 200);
        } else {
            ideal[parseInt(nextIndex)].classList.remove('ideal-hide');
            ideal[parseInt(nextIndex) - 1].classList.add('ideal-hide');
        }
}

const StepBtn2 = document.querySelector('#stepBtn2');
const idealFilter = document.querySelector('.ideal__filter');
const FilterInput = idealFilter.querySelectorAll('input[type="checkbox"]');
let Ifilter = 0;

StepBtn2.addEventListener('click', () => {
    nextIndex++;
    ifil();
})

FilterInput.forEach((i) => {
    i.addEventListener('change', () => {
        if (i.checked === true) {
            Ifilter++;
            console.log(4123);
        }
        if (!i.checked){
            Ifilter--;
        }
    })
})


function Ftus() {
    const fake = idealFilter.querySelectorAll('.fake-chek');
    fake.forEach((e) => {
        e.style.animation = 'IdealAnim .2s linear';
    })
}

function FtusN() {
    const fake = idealFilter.querySelectorAll('.fake-chek');
    fake.forEach((e) => {
        e.style.animation = 'none';
    })
}


function ifil(){
    if(Ifilter < 1){
        nextIndex = 1;
        ideal[nextIndex].classList.remove('ideal-hide');
        Ftus();
        setTimeout(FtusN, 200);
    } else {
        ideal[parseInt(nextIndex)].classList.remove('ideal-hide');
        ideal[parseInt(nextIndex) - 1].classList.add('ideal-hide');
    }
}


const StepBtn3 = document.querySelector('#stepBtn3');
const textArea = document.querySelector('textarea');

function Atus() {
    textArea.style.animation = 'IdealAnim .2s linear';
}

function AtusN() {
    textArea.style.animation = 'none';
}

StepBtn3.addEventListener('click', () => {
    nextIndex++;
    if (textArea.value == ''){
        nextIndex = 2;
        ideal[nextIndex].classList.remove('ideal-hide');
        Atus();
        setTimeout(AtusN, 200);
    } else {
        ideal[parseInt(nextIndex)].classList.remove('ideal-hide');
        ideal[parseInt(nextIndex) - 1].classList.add('ideal-hide');
    }
})


const lInpts = document.querySelectorAll('#lInpt');
const fBtn = document.querySelectorAll('#fBtn');

fBtn.forEach((e) => {
    e.addEventListener('click', (event) => {
        event.preventDefault();
        lInpts.forEach((e) => {
            if (e.value == ''){
                nextIndex = 3;
                FtusF();
                setTimeout(FtusL, 200);
            } else {
                nextIndex++;
                ideal[parseInt(nextIndex)].classList.remove('ideal-hide');
                ideal[parseInt(nextIndex) - 1].classList.add('ideal-hide');
                setTimeout(Ires, 5000);
            }
        })
    }) 
})



function Ires() {
    Icount = 0;
    nextIndex = 0;
    Ifilter = 0;
    textArea.value = '';
    ideal[0].classList.remove('ideal-hide');
    ideal[1].classList.add('ideal-hide');
    ideal[4].classList.add('ideal-hide');
    Icontainer.forEach((e) => {
        const allInp = e.querySelectorAll('input[type="checkbox"]');
        allInp.forEach((i) => {
            i.checked = false;
        })
    })
    FilterInput.forEach((t) => {
        t.checked = false;
    })
    lInpts.forEach((z) => {
        z.value = '';
    })
}

function FtusF() {
    lInpts.forEach((e) => {
        e.style.animation = 'IdealAnim .2s linear';
    })
}
function FtusL() {
    lInpts.forEach((e) => {
        e.style.animation = 'none';
    })
}

const mobNavBtn = document.querySelectorAll('.mobile-menu-btn')
const mobileMenu = document.querySelector('.mobile-menu')
const mobNav = mobileMenu.querySelector('nav')
const mobNavLinks = mobNav.querySelectorAll('a')

mobNavLinks.forEach((e) => {
    e.addEventListener('click', () => {
        mobileMenu.classList.remove('mobile-menu-active')
    })
})

mobNavBtn.forEach((e) => {
    e.addEventListener('click', () => {
        mobileMenu.classList.add('mobile-menu-active')
    })
})