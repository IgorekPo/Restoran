
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
        const welcomParalax = document.querySelector ('.welcome__body');
    
        if (welcomParalax){ 
            const welcomeMainImg = document.querySelector ('.welcome__main-image');
            const leafOne = document.querySelector ('.welcome__leaf-image1');
            const leafTwo = document.querySelector ('.welcome__leaf-image2');
            const leafThree = document.querySelector ('.welcome__leaf-image3');
    
    
            const forWelcomeMainImg = 20;
            const forLeafOne = 3;
            const forLeafTwo = 3.5;
            const forLeafThree = 2.5;

    
            const speed = 0.1;
    
    
            let positionX = 0 , positionY = 0;
            let coordXprocent = 0 , coordYprocent = 0;
    
            function setMouthParalaxStyle (){
                const distX = coordXprocent - positionX;
                const distY = coordYprocent - positionY;
                positionX = positionX + (distX * speed);
                positionY = positionY + (distY * speed);
    
                welcomeMainImg.style.cssText = `transform: translate(${positionX / forWelcomeMainImg}%, ${positionY / forWelcomeMainImg}%)`;
                leafOne.style.cssText = `transform: translate(${positionX / forLeafOne}%, ${positionY / forLeafOne}%)`;
                leafTwo.style.cssText = `transform: translate(${positionX / forLeafTwo}%, ${positionY / forLeafTwo}%)`;
                leafThree.style.cssText = `transform: translate(${positionX / forLeafThree}%, ${positionY / forLeafThree}%)`;
    
                requestAnimationFrame(setMouthParalaxStyle);
            }
            setMouthParalaxStyle();
    
            welcomParalax.addEventListener('mousemove', function(e){
                const paralaxWidth = welcomParalax.offsetWidth;
                const paralaxHeight = welcomParalax.offsetHeight;
    
                const coordX = e.pageX - paralaxWidth / 2;
                const coordY = e.pageY - paralaxHeight / 2;
    
                coordXprocent = coordX / paralaxWidth * 100;
                coordYprocent = coordY / paralaxHeight * 100;
    
            })
        }
    }
}

// ===========================================================================