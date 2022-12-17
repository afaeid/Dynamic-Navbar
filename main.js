const sections = document.querySelectorAll('section');
const navManue = document.querySelectorAll('nav ul li a');


  window.addEventListener('scroll', ()=>{
      let current = '';
sections.forEach((section) => {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;
   if(pageYOffset >= sectionTop - (sectionHeight/1.5)){
     current = section.getAttribute('id');
   }
  
  })
 navManue.forEach((li)=> {
 li.classList.remove('active')
   if(li.classList.contains(current)){
   li.classList.add('active');
   }
 })
})