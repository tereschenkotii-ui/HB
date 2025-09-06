function openBtn () {
    const btn = document.querySelector('.btn-open');
    const con = document.querySelector('.con-block');
    const firstPhoto = document.querySelector('.photo');
    const conPhoto = document.querySelector('.con-photo');
    const textPhoto = document.querySelector('.con-text');
    
    btn.addEventListener('click', () => {
    
con.classList.add('active')
conPhoto.classList.add('active')
firstPhoto.classList.add('active')
textPhoto.classList.add('active')

  });

   return console.log("Кнопка")

}
openBtn()

function nextBtn () {
    const btnNext = document.querySelector('.btn-next');
    const firstPhoto = document.querySelector('.photo');
      const firstPhoto2 = document.querySelector('.photo2');
    const conPhoto = document.querySelector('.con-photo');
        const conPhoto2 = document.querySelector('.con-photo2');
    const textPhoto = document.querySelector('.con-text');
    const textPhoto2 = document.querySelector('.con-text2');
    
    btnNext.addEventListener('click', () => {
    
conPhoto2.classList.add('active')
firstPhoto2.classList.add('active')
conPhoto.classList.remove('active')

firstPhoto.classList.remove('active')
textPhoto.classList.remove('active')
textPhoto2.classList.add('active')
btnNext.classList.add('active')

  });

   return console.log("Кнопка 2")

}
nextBtn () 