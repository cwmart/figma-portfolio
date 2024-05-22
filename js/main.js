'use strict' 

const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')
const navBtnImg = document.querySelector('#nav-btn-img')

navBtn.onclick = () => {
  if (nav.classList.toggle('open')) {
    navBtnImg.src = './img/Media/NAV CLOSE.png'
  } else {
    navBtnImg.src = './img/Media/NAV.png'
  }
}

AOS.init();

AOS.init({
  disable: 'phone',
  disable: 'mobile',
  once: true
}) 