// MENU PROGRAMAS DE ESTUDIO
const programas = document.querySelector('.li__programas');
let ulProgramas = document.createElement('UL');
ulProgramas.classList.add('nav__programas');

let programasEstudio = [`Mantenimiento de Maquinaria Pesada`, 
                        `Mecatrónica Automotriz`,
                        `Mecánica de Producción`,
                        `Electrotecnia Industrial`,
                        `Electrónica Industrial`,
                        `Tecnología de Análisis Químico`,
                        `Diseño y Programación Web`,
                        `Secretariado Ejecutivo`,
                        `Metalurgia`];

for (let i = 0; i < programasEstudio.length; i++) {
    let liProgramas = document.createElement('LI');
    let enlacePrograma = document.createElement('A');
    let iconPrograma = document.createElement('I');

    liProgramas.classList.add('programas');
    enlacePrograma.setAttribute('href', '#');
    iconPrograma.classList.add('fas', 'fa-cog');

    enlacePrograma.innerHTML = programasEstudio[i];
    liProgramas.appendChild(iconPrograma);
    liProgramas.appendChild(enlacePrograma);
    ulProgramas.appendChild(liProgramas);
}

programas.appendChild(ulProgramas);


// MENU POR QUE CAJAS
const porqueCajas = document.querySelector('.li__porque-cajas');
let ulPorqueCajas = document.createElement('UL');
ulPorqueCajas.classList.add('nav__porquecajas');

let cajas = [`Quienes Somos`, `Historia`, `Eventos`, 
             `Titulación`, `Los Profesores`, `Trabajos`];

for (let j = 0; j < cajas.length; j++) {
    let liCajas = document.createElement('LI');
    let enlaceCajas = document.createElement('A');
    let iconCajas = document.createElement('I');

    liCajas.classList.add('porquecajas');
    enlaceCajas.setAttribute('href', '#');
    iconCajas.classList.add('fas', 'fa-cog');

    enlaceCajas.innerHTML = cajas[j];
    liCajas.appendChild(iconCajas);
    liCajas.appendChild(enlaceCajas);
    ulPorqueCajas.appendChild(liCajas);
}

porqueCajas.appendChild(ulPorqueCajas);


// MENU RESPONSIVE
const menu = document.querySelector('#btn-menu');
const menuItens = document.querySelector('.nav__items');
const iconAngleDown = document.querySelectorAll('.fa-angle-down');
let windowX = window.innerWidth;

menu.addEventListener('click', () => {
    menuItens.classList.toggle('items-menu');
    menu.classList.toggle('fa-times');
});


// SUBMENU RESPONSIVE PROGRAMAS DE ESTUDIO
programas.addEventListener('click', () => {
    ulProgramas.classList.toggle('nav__programas--display');
    iconAngleDown[0].classList.toggle('icon-rotacion');
    ulPorqueCajas.classList.remove('nav__porquecajas--display');
    iconAngleDown[1].classList.remove('icon-rotacion');

    if (windowX <= 950) {
        ulProgramas.style.visibility = 'visible';
    }
});

// SUBMENU RESPONSIVE POR QUE CAJAS
porqueCajas.addEventListener('click', () => {
    ulPorqueCajas.classList.toggle('nav__porquecajas--display');
    iconAngleDown[1].classList.toggle('icon-rotacion');
    ulProgramas.classList.remove('nav__programas--display');
    iconAngleDown[0].classList.remove('icon-rotacion');

    if (windowX <= 950) {
        ulPorqueCajas.style.visibility = 'visible';
    }
});


// EFECTO SCROLL MENÚ
let ubicacionPrincipal = window.pageYOffset;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    let ubicacionActual = window.pageYOffset;

    if (ubicacionPrincipal >= ubicacionActual) {
        nav.style.top = '0px';
    } else {
        nav.style.top = '-100px';
        menuItens.classList.remove('items-menu');
        menu.classList.remove('fa-times');
    }
    ubicacionPrincipal = ubicacionActual;
});