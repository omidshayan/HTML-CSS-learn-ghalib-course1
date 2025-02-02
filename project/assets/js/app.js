let icon = document.querySelector('.icon-bar')
let menu = document.querySelector('.menu')
let overlay = document.querySelector('.overlay')
let close_menu = document.querySelector('.close-menu')

function headerMenu(){
    if(icon.classList.contains('fa-bars'))
        {
            menu.style.left = 0
            overlay.style.left = 0
            icon.classList = 'fa fa-times icon-bar cursor-p';
        }
        else{
            menu.style.left = '-200px'
            overlay.style.left = '-100%'
            icon.classList = 'fa fa-bars icon-bar cursor-p';
            
        }
}
icon.addEventListener('click', function(){
    
    headerMenu();
    
})

overlay.addEventListener('click', function(){
    
    headerMenu();

})

close_menu.addEventListener('click', function(){
    
    headerMenu();

})

