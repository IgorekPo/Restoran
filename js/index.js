
const burgerMenu = document.querySelector ('.burger__menu');
const headerNav = document.querySelector ('.header__nav');



burgerMenu.addEventListener('click', function(){
    burgerMenu.classList.toggle ('active');
    headerNav.classList.toggle ('active');
    document.body.classList.toggle ('lock');
})




// PARALAX================================================


// window.onload = function(){
//     const paralax = document.querySelector ('.paralax');

//     if (paralax){
//         const content = document.querySelector ('.paralax__conteiner');
//         const leaf = document.querySelector ('.paralax__leaf1');

//         const forLeaf = 2;

//         const speed = 0.5;


//         let positionX = 0 , positionY = 0;
//         let coordXprocent = 0 , coordYprocent = 0;

//         function setMouthParalaxStyle (){
//             const distX = coordXprocent - positionX;
//             const distY = coordYprocent - positionY;
//             positionX = positionX + (distX * speed);
//             positionY = positionY + (distY * speed);

//             leaf.style.cssText = `transform: translate(${positionX / forLeaf}%, ${positionY / forLeaf}%)`;
//             requestAnimationFrame(setMouthParalaxStyle);
//         }
//         setMouthParalaxStyle();

//         paralax.addEventListener('mousemove', function(e){
//             const paralaxWidth = paralax.offsetWidth;
//             const paralaxHeight = paralax.offsetHeight;

//             const coordX = e.pageX - paralaxWidth / 2;
//             const coordY = e.pageY - paralaxHeight / 2;

//             coordXprocent = coordX / paralaxWidth * 100;
//             coordYprocent = coordY / paralaxHeight * 100;

//         })
//     }
// }

// ===========================================================================