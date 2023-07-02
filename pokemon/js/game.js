// 볼안에 메뉴누를시 해당 설명사이트 연결된곳 표시
const $button = document.querySelectorAll(".ball .move");
const $bcon = document.querySelectorAll(".bcon .move");

for (let i = 0; i < $button.length; i++) {
  $button[i].addEventListener("click", () => {
    for (let n = 0; n < $bcon.length; n++) {
      if (!(i == n)) {
        $bcon[n].style.opacity = 0;
      } else {
        $bcon[n].style.opacity = 1;
      }
    }
  });
}
const $top = document.querySelector("#ftop");

$top.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const $bb = document.querySelector(".bb");

$bb.addEventListener("click", () => {
  for (let n = 0; n < $bcon.length; n++) {
    $bcon[n].style.opacity = 0;
  }
});
