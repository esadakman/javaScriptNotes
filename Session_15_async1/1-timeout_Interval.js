//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? ---------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ---------------------------------------------------------------

// const bekle = (ms) => {
//   // ! blocking code
//   const start = new Date().getTime();
//   //   2000;
//   while (new Date().getTime() < start + ms) {
//     // 2010 < 2000 + 3000;
//   }
// };

// console.log("hello");
// alert("ITF"); // ! Alert kodu blocking olduğu için kodu blocklar
// console.time("timer");
// bekle(3000);
// console.timeEnd("timer");
// console.log("FS11");

// * Asenkron (setTimeout)
// * ------------------------------------------------
//  ! macro task kuyruğu
// setTimeout(() => {
// ! non-blocking code
//   console.log("Selamün Aleyküm");
// }, 1000);

// ! micro task kuyruğu
// console.log("Aleyküm Selam");
// console.log("Merhaba");

// setTimeout(() => {
//   ! non-blocking code
//   console.log("Dostum naber?");
// }, 500);

// * Asenkron (setInternal, clearInterval)
// * ------------------------------------------------

// console.log("Counter Started");
// let counter = 0;

// const sec1 = setInterval(() => {
//   //   ! non-blocking
//   console.log(++counter);

//   if (counter == 10) {
//     clearInterval(sec1);
//   }
// }, 1000);

// console.log("Counter finished");

//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakta bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
  console.log("john:Hi");
  setTimeout(() => {
    console.log("Sarah: Hello");
    setTimeout(() => {
      console.log("John: How Are you?");
      setTimeout(() => {
        console.log("Fine and you?");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

//? COZUMLER:
//?----------------------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)
