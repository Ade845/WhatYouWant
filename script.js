const butt2 = document.getElementById("butt2");
butt2.addEventListener("click", king);

function king() {
  let header = document.getElementById("head");
  header.innerHTML = "Krol Zylety: Tadeusz Norek";
  header.classList.add("texx");
  document.getElementById("tadzio").style.display = "block";
}
