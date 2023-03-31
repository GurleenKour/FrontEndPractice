var backdrop = document.querySelector('.backdrop');
// query selector gets the first element with specified proppeprty
console.dir(backdrop);
var selectplaanButton = document.querySelectorAll('.plan button');
var modal = document.querySelector('.modal');
var cancelButton = document.querySelector('.modal__action--negative')
var mobileNav = document.querySelector('.mobile-nav');
var togglebutton = document.querySelector('.toggle-button');
console.dir(togglebutton);
console.dir(mobileNav)
for (var i = 0; i < selectplaanButton.length;i++){
    selectplaanButton[i].addEventListener('click',function(){
    //    modal.style.display = 'block'
    //    backdrop.style.display = 'block'
    //another way to to chnage appearence dynamically
    // modal.className = 'open' -- this will overrite the complete class.
    modal.classList.add('open')
    backdrop.classList.add('open') // this will show the backdrop but not the  modal because modal class is overwritten by the open , reason being (shared css file is imported secondly)
    //classlists obj provides some helper methods- for checking if it contains a class(can be used in if conditions, for adding and removing a class, for toggling a class(add class if its active and remove if not active))
    })
}
cancelButton && cancelButton.addEventListener('click',closeModal)
backdrop.addEventListener('click',function(){
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open')
   closeModal();
})

function closeModal(){
//     modal.style.display = 'none'
//    backdrop.style.display = 'none'
modal && modal.classList.remove('open')
backdrop.classList.remove('open')
}
togglebutton.addEventListener('click',function(){
    // togglebutton.style.display = 'none'
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    backdrop.classList.add('open')
   mobileNav.classList.add('open')
})

//to access the property names -- 
console.dir(backdrop.style['background-image']) 
//or
console.dir(backdrop.style.backgroundImage)