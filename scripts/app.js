const toggler = document.querySelector('.toggle');
const navbar = document.querySelector('.navbar');
const navItems = document.querySelectorAll('.navItem');
console.log(navItems);

navItems.forEach((item) => {
    console.log(item);
    if(item.querySelector('.subNav')){
        item.addEventListener('click', (e) =>{
            if(item.classList.contains('sactive')){
                item.classList.remove('sactive');
            } else {
                item.classList.add('sactive');
            }   
        })
    }
});

toggler.addEventListener('click', (e) => {
    if(navbar.classList.contains('active')){
        navbar.classList.remove('active');
        toggler.querySelector('a').innerHTML = '<i class="fas fa-bars"></i>';
    } else {
        navbar.classList.add('active');    
        toggler.querySelector('a').innerHTML = '<i class="fas fa-times-circle"></i>';
    }
})