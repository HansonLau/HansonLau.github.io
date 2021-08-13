// function lights up sections when the scroll 
// is at that position
 
const lightUp = () => {
 
    const light = document.querySelector('.light');
    const about = document.querySelector('#aboutPage');
    const education = document.querySelector('#educationPage');
    const experience = document.querySelector('#experiencePage');
    
    // window.scrollY is the y cor of the scroll
 
    if(window.innerWidth > 960){
        if(window.scrollY < 700){
            about.classList.remove('light');
            return;
        }
        else if(window.scrollY < 1100){
            about.classList.add('light');
            education.classList.remove('light');
            return;
        }
        else if(window.scrollY < 1950){
            about.classList.remove('light');
            education.classList.add('light');
            experience.classList.remove('light');
            return;
        }
        else if(window.scrollY > 2300){
            education.classList.remove('light');
            experience.classList.add('light');
            return;
        }
    }
    else{
        light.classList.remove('light');
    }
 
};
 
window.addEventListener('click', lightUp);
window.addEventListener('scroll', lightUp);
