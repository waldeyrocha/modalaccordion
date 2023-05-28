// variables

 const accordion = document.querySelectorAll('.js-accordion');
 const sideBar = document.querySelector('.js-sidebar');
 const button = document.querySelector('.js-button');
 const nav = document.querySelectorAll('.js-nav');
 const modalOverlay = document.querySelector('.modal-overlay');
 const modalContent = document.querySelector('.modal-content');
 const closeBtn = document.querySelector('.close-btn');
 const openBtn = document.querySelector('.btn');
 const hideMain = document.querySelector('.questions');


//fuction for open and close modal


 const openModal = () => {
   modalOverlay.classList.add('show-modal')
   hideMain.classList.add('hiddenMain')
 }

 
 const closeModal = () => {
   modalOverlay.classList.remove('show-modal')
   hideMain.classList.remove('hiddenMain')
 }


 // event for open and close modal callback

 openBtn.addEventListener('click', openModal)

 closeBtn.addEventListener('click', closeModal)


 //function for section

 nav.forEach(item => {
   item.addEventListener('click', event => {
     item.classList.toggle('ativo')
   })
 });


 //event for open and close sidebar


 button.addEventListener('click', () => {
   sideBar.classList.toggle('show-sidebarleft')
 });


 //event for open and close questios

 accordion.forEach(item => {
   item.addEventListener('click', event => {
     item.classList.toggle('active')
   })
 });