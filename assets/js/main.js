/*------------ SHOW MENU-------------*/
const showMneu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    /*valida se se existe as variaveis*/
    if (toggle && nav) {
        /*aqui adiciono a class show-menu na div com a class nav__menu*/
        toggle.addEventListener('click', () => {
            /*adicina a class show-menu na div que tem o id nav-menu */
            nav.classList.toggle('show-menu')
        })
    }
}
showMneu('nav-toggle', 'nav-menu')

/*------------ REMOVER MENU MOBILE-------------*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    /*Quando um link for clicado a class show-menu será removido*/
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== DEIXA O LINK CLICADO COM A CLASS ACTIVE-LINK ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(L => L.classList.remove('active-link'))
        this.classList.add('active-link')
    }
}

linkColor.forEach(L=> L.addEventListener('click', colorLink))

/*------------BOX SHADOW NO HEADER-------------*/
function scrollHeader(){
    const scrollHeader = document.getElementById('header');
    // Quando o scroll tiver um altura maior que 200 será adiconado a class scroll-header na tag Header
    if(this.scrollY >= 200) scrollHeader.classList.add('scroll-header'); else scrollHeader.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*------------SHOW SCROLL TOP------------- */
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // Quando o scroll tiver um altura maior que 560 será adiconado a class scroll-top
    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}
window.addEventListener('scroll', scrollTop)

/*-----------VALIDANDO FORMULARIO-----------*/

const form1 = document.getElementById('form-control');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


/*-----------VALIDANDO NOME--------------*/

form1.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidade();
})

function setError(index){
   campos[index].style.border = '2px solid #e63636';
   campos[index].style.color = '#e63636';
   spans[index].style.display = 'block';
}

function removerError(index){
    campos[index].style.border = '2px solid #2B9348';
    campos[index].style.color = 'black';
    spans[index].style.display = 'none';
}


function nameValidate(){
    if(campos[0].value.length < 3){
        setError(0);
    }else {
        removerError(0);
    }
}

function emailValidade(){
    if(!emailRegex.test(campos[1].value)){
      setError(1);
    }else{
        removerError(1);
    }
}
