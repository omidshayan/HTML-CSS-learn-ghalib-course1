let icon = document.querySelector('.icon-bar')
let menu = document.querySelector('.menu')
let overlay = document.querySelector('.overlay')
let close = document.querySelector('.overlay')

function headerMenu(){
    if(icon.classList.contains('fa-bars'))
        {
            menu.style.left = 0
            overlay.style.left = 0
            icon.classList = 'fa fa-times icon-bar';
        }
        else{
            menu.style.left = '-200px'
            overlay.style.left = '-100%'
            icon.classList = 'fa fa-bars icon-bar';
            
        }
}
icon.addEventListener('click', function(){
    
    headerMenu();
    
})

overlay.addEventListener('click', function(){
    
    headerMenu();

})


