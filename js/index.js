
const burgerMenu = document.querySelector ('.burger__menu');
const headerNav = document.querySelector ('.header__nav');



burgerMenu.addEventListener('click', function(){
    burgerMenu.classList.toggle ('active');
    headerNav.classList.toggle ('active');
    document.body.classList.toggle ('lock');

})




// PARALAX================================================

if (window.innerWidth >=768){
    window.onload = function(){
        const paralax = document.querySelector ('.basic');
    
        if (paralax){ 
            const pasta = document.querySelector ('.basic__image-pasta');
            const saladOne = document.querySelector ('.basic__image-salad1');
            const saladTwo = document.querySelector ('.basic__image-salad2');
    
    
            const forPasta = 5;
            const forsaladOne = 3;
            const forsaladTwo = 4;
    
            const speed = 0.05;
    
    
            let positionX = 0 , positionY = 0;
            let coordXprocent = 0 , coordYprocent = 0;
    
            function setMouthParalaxStyle (){
                const distX = coordXprocent - positionX;
                const distY = coordYprocent - positionY;
                positionX = positionX + (distX * speed);
                positionY = positionY + (distY * speed);
    
                pasta.style.cssText = `transform: translate(${positionX / forPasta}%, ${positionY / forPasta}%)`;
                saladOne.style.cssText = `transform: translate(${positionX / forsaladOne}%, ${positionY / forsaladOne}%)`;
                saladTwo.style.cssText = `transform: translate(${positionX / forsaladTwo}%, ${positionY / forsaladTwo}%)`;
    
                requestAnimationFrame(setMouthParalaxStyle);
            }
            setMouthParalaxStyle();
    
            paralax.addEventListener('mousemove', function(e){
                const paralaxWidth = paralax.offsetWidth;
                const paralaxHeight = paralax.offsetHeight;
    
                const coordX = e.pageX - paralaxWidth / 2;
                const coordY = e.pageY - paralaxHeight / 2;
    
                coordXprocent = coordX / paralaxWidth * 100;
                coordYprocent = coordY / paralaxHeight * 100;
    
            })
        }
    }
}

// ===========================================================================