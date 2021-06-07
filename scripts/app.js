const toggler = document.querySelector('.toggle');
const navbar = document.querySelector('.navbar');
const navItems = document.querySelectorAll('.navItem');
console.log(navItems);

//display submenu when one of the navigation menus is 'clicked'
navItems.forEach((item) => {
    console.log(item);
    if(item.querySelector('.subNav')){
        item.addEventListener('click', (e) =>{
            if(item.classList.contains('sactive')){
                item.classList.remove('sactive');
            }else if (navbar.querySelector('.sactive')) {
                //if there are any other submenu already open, close it
                navbar.querySelector('.sactive').classList.remove('sactive');
                item.classList.add('sactive');
            }else {
                item.classList.add('sactive');
             }   
        });
    }
});

//display menu when the bars icon on navigation is 'clicked'
toggler.addEventListener('click', (e) => {
    if(navbar.classList.contains('active')){
        navbar.classList.remove('active');
        toggler.querySelector('a').innerHTML = '<i class="fas fa-bars"></i>';
    } else {
        navbar.classList.add('active');    
        toggler.querySelector('a').innerHTML = '<i class="fas fa-times-circle"></i>';
    }
});

//close submenu from anywhere in the page
function closeSubMenu(e) {
    let isClickInside = navbar.contains(e.target);

    if(!isClickInside && navbar.querySelector('.sactive')){
        navbar.querySelector('.sactive').classList.remove('sactive');
    }
}
document.addEventListener('click', closeSubMenu, false);