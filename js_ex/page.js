const hamburger = document.querySelector(".hamburger");
const gnb = document.querySelector(".gnb");
const close = document.querySelector(".close");
hamburger.addEventListener("click", function () {
  gnb.classList.add("on");
  close.classList.add("on");
});

close.addEventListener("click", function () {
  gnb.classList.remove("on");
  close.classList.remove("on");
});

// 시간의 개념이 포함된 반복 실행 함수
// setInterval(함수, 시간)
// 일정 시간이 지난 후 실행 함수
// setTimeout(함수, 시간)
// 시간 매개 변수값은 값의 단위가 ms : 1000ms=1s

let currentIndex = 0;
let nextIndex = 1;
const slide = document.querySelector(".slide");

setInterval(function () {
  slide[currentIndex].classList.add(".active");
  slide[nextIndex].classList.add(".active");
}, 2000);
