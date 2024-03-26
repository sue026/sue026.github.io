
$(function() {
    $('header #gnb>li').mouseenter(function () { 
        $(this).children('header #gnb li .dep2_wrap').slideDown();
    });
    $('header #gnb>li').mouseleave(function () { 
        $(this).children('header #gnb li .dep2_wrap').hide();
    });
    $('#search_open').click(function() {
      $('.search_wrap').show()
    })
    $('.btn_search_close').click(function() {
        $('.search_wrap').hide()
  })
})//ready()
const visSwiper = new Swiper('.visual_wrap .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect : 'fade',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
new Swiper('.news-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});
new Swiper('.news .promotion .swiper-container', {
  direction: 'horizontal', // 수평 슬라이드
  autoplay: {
      delay : 5000
  },
  loop: true,
  slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 20, // 슬라이드 사이 여백
  breakpoints: {
    //480이하 (520) => 1단 (기본)
    //480(520) ~ 768 => 2단

    //768~ 1280 => 3단
    768 : { //이상
        slidesPerView: 2,
        
    },
    1280 : {
        slidesPerView: 3,
        
    },
    1440 : {
        slidesPerView: 3
    }
},
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용 여부
      el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
      clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
      prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
      nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
});

// // pagination fraction
// new Swiper(".inner__txt .swiper-container", {
//   direction: 'horizontal',
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     type: "fraction",
//   },
//   navigation: {
//     nextEl: ".dir_btns .next",
//     prevEl: ".dir_btns .prev",
//   },
// });
// Product Thumbs Swiper
const swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
  navigation: {
    nextEl: ".product .swiper-next",
    prevEl: ".product .swiper-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion =!isHidePromotion //true
    if(isHidePromotion) {
        //숨김처리
        promotionEl.classList.add('hide');
    } else {
        //나타나기
        promotionEl.classList.remove('hide');
    }
});

const allmenuOpen = document.querySelector('.allmenu_open')
const allmenuWrap = document.querySelector('.allmenuWrap')
const btnClose = document.querySelector('.allmenuClosed')
function toggleMenu() {  
  allmenuWrap.classList.toggle('show')
}
allmenuOpen.addEventListener('click', function () {  
  toggleMenu();
})
btnClose.addEventListener('click',function(){
  toggleMenu()
})
// 현재 날짜를 가져오는 함수
function getCurrentDate() {
  const date = new Date(); // 현재 날짜를 가져옴
  const year = date.getFullYear(); // 연도 가져오기
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월 가져오기 (0부터 시작하므로 1을 더하고 문자열로 변환하여 두 자리수로 만듦)
  const day = String(date.getDate()).padStart(2, '0'); // 일 가져오기 (문자열로 변환하여 두 자리수로 만듦)
  return `${year}-${month}-${day}`; // yyyy-mm-dd 형식으로 날짜 포맷팅
}

// 모든 <span class="date"> 요소를 선택
const dateSpans = document.querySelectorAll('.date');

// 각 <span class="date"> 요소에 대해 반복
dateSpans.forEach(dateSpan => {
  // 현재 날짜를 가져와서 <span class="date"> 요소에 삽입
  dateSpan.textContent = getCurrentDate();
});


