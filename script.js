/* 
1-if
2-else if
3-else if
4-else
*/

// let SecilenYol = prompt("Lütfen gitmek istediğiniz yolu seçiniz : ");

// if(SecilenYol ==1){
//     alert("Seçilen yol" + SecilenYol + ". yoldur.");
// }
// else if(SecilenYol ==2){
//     alert("Seçilen yol" + SecilenYol + ". yoldur.");
// }
// else if(SecilenYol ==3){
//     alert("Seçilen yol" + SecilenYol + ". yoldur.");
// }
// else{
//     alert("Lütfen geçerli bir yol seçiniz !!!");
// }

//ÇOKLU İF YAPILARI



// let ad = prompt("Adınızı giriniz");
// let tckn = prompt("tc kimliğinizi giriniz");

// kontrolEt(ad,tckn);
// kontrolEt2(ad,tckn);

// function kontrolEt(ad, tckn){
//     if(ad!=""){
//         if(tckn.length ==11){
//             console.log(" isim ve Tc kimliğiniz başarıyla girildi");
//         }else{
//             console.log("Tc nizi lütfen doğru giriniz.");
//         }
//     } else{
//         console.log("Adınızı lütfen doğru giriniz.");
//     }
// }

// function kontrolEt2(ad, tckn){
//     if(ad==""){
//         console.log("lütfen isminizi doğru giriniz.");
//         return;
//     }
//     if(tckn.length !=11){
//         console.log("Lütfen tcnizi 11 karakter giriniz.");
//         return;
//     }

//     console.log("İsim ve tckn problemsiz girildi.")
// }


// BEDEN KİTLE ENDEKSİ

// let kilo = Number(prompt("Lütfen kilonuzu giriniz"));

// let boy = Number(prompt("Lütfen boyunuzu giriniz"));

// let sonuc = kilo/(boy*2);

// if (sonuc<18.5){
//     console.log("İdeal kilonun altında" + sonuc);
// }else if(sonuc>=18.5 && sonuc<=24.9){
//     console.log("İdeal kilonun altında" + sonuc);
// }else if(sonuc>=25 && sonuc <=29.9){
//     console.log("İdeal kiloda" + sonuc);
// }else if(sonuc>=30 && sonuc<=39.5){
//     console.log("İdeal kilonun çok (obez)" + sonuc);
// }else if(sonuc>=40){
//     console.log("İdeal kilonun çok üstünde(morbid obez)" + sonuc);
// } 

//Benzin İstasyonu

/* 

1-Dizel : 24.53
2-Benzin : 22.25
3-LPG : 11.1


Gelen müşterilerden alacağımız bilgiler;
1-Yakıt tipi
2-Yüklenecek yakıt litresi

*/ 

// let dizel = 24.53 , benzin = 22.25, lpg = 11.1;
// const yeniSatir = "\r\n";

// const yakitMetni = "1-Dizel "+yeniSatir + "2-Benzin" + yeniSatir + "3-LPG" + yeniSatir + "Yakıt türünü seçiniz";

//  let yakitTipi = prompt(yakitMetni);
//  if(yakitTipi=="1" || yakitTipi == "2" || yakitTipi == "3"){
//  let yakitLitresi = Number(prompt("Yakıt litresini girin : "));
//  let bakiye = Number(prompt("Lütfen bakiyenizi giriniz."));

//  if(yakitTipi == "1"){
//     //DİZEL
//     let odenecekTutar = dizel*yakitLitresi;
//     if(odenecekTutar<bakiye){
//         // bakiyeniz yeterli
//         bakiye = bakiye - odenecekTutar;
//         alert("Yakıt alma işleminiz başarılı" + yeniSatir + "Kalan Bakiye : "+ bakiye );
//     }else {
//         //bakiyeniz yeterli değil
//         alert("Bakiyeniz yeterli değildir" + yeniSatir+"Ödenecek Tutar" + yeniSatir + "Bakiye : " + bakiye + yeniSatir + "Eksik Tutar : " + (odenecekTutar-bakiye));
//     }
    
//  }else if(yakitTipi == "2"){
//     // BENZİN
//     let odenecekTutar = benzin*yakitLitresi;
//     if(odenecekTutar<bakiye){
//         // bakiyeniz yeterli
//         bakiye = bakiye - odenecekTutar;
//         alert("Yakıt alma işleminiz başarılı" + yeniSatir + "Kalan Bakiye : "+ bakiye );
//     }else {
//         //bakiyeniz yeterli değil
//         alert("Bakiyeniz yeterli değildir" + yeniSatir+"Ödenecek Tutar" + yeniSatir + "Bakiye : " + bakiye + yeniSatir + "Eksik Tutar : " + (odenecekTutar-bakiye));
//     }
//  }else if(yakitTipi=="3"){
//     //LPG
//     let odenecekTutar = lpg*yakitLitresi;
//     if(odenecekTutar<bakiye){
//         // bakiyeniz yeterli
//         bakiye = bakiye - odenecekTutar;
//         alert("Yakıt alma işleminiz başarılı" + yeniSatir + "Kalan Bakiye : "+ bakiye );
//     }else {
//         //bakiyeniz yeterli değil
//         alert("Bakiyeniz yeterli değildir" + yeniSatir+"Ödenecek Tutar" + yeniSatir + "Bakiye : " + bakiye + yeniSatir + "Eksik Tutar : " + (odenecekTutar-bakiye));
//     }
//  }
// }
//  else{
//     alert("Lütfen geçerli bir yakıt türü seçiniz.");
//  }


// let arabalar = ["bmw","toyota","renault","mercedes","porsche"];
// let arabalar2 = ["hundai","tofaş"];
//PUSH METOT

// console.log(arabalar.length);
// let diziUzunluk = arabalar.push("opel");

// console.log(diziUzunluk);


//UNSHIFT METOT
// arabalar.unshift("hyundai");
// console.log(arabalar);

//POP METOT
// let silinenEleman = arabalar.pop();
// console.log(arabalar);
// console.log(silinenEleman);

//SHIFT METOT
// arabalar.shift();
// console.log(arabalar);

//SPLİCE METOT
// console.log(arabalar);
// arabalar.splice(3,0,"hundai");
// console.log(arabalar);

// 2 parametreli kullanımı
// arabalar.splice(1,2);
// console.log(arabalar);

//3 parametreli kullanımı

// arabalar.splice(2,2,"hundai");
// console.log(arabalar);

//TOSTRİNG METODU
// let stringArabalar = arabalar.toString();
// console.log(typeof stringArabalar);

//JOIN METOT
// let stringArabalar = arabalar.join("?");
// console.log(stringArabalar);

//CONCAT METODU
// let birlesmisDizi = arabalar1.concat(arabalar2);
// console.log(birlesmisDizi);

//SLİCE METODU
// console.log(arabalar);
// let ayriDizi = arabalar.slice(2);
// console.log(ayriDizi);

//LENGTH ÖZELLİK
// console.log(arabalar.length);

//REVERSE METOT
// console.log(arabalar);
// arabalar.reverse();
// console.log(arabalar);

//SPLİT METOT
// let isimler = "Enes,Ali,Veli";

// let isimlerDizi = isimler.split(",");
// console.log(typeof isimlerDizi);

//INDEXOF METOT

// let index = arabalar.indexOf("bmw");
// if(index==0){
//     console.log("belirtilen değer vardır.");
// }else{
//     console.log("belirtilen değer yoktur.");
// }

//INCLUDES METOT

// let sonuc = arabalar.includes("renault12");
// if(sonuc){
//     console.log("eleman vardır.");
// }else{
//     console.log("eleman yoktur.")
// }

//URUN ARAMA UYGULAMASI

// let urun1 = {
//     isim : "ACER Swift",
//     kategori:"Teknoloji",
//     fiyat : 6219
// };

// let urun2 = {
//     isim : "ACER Nitro 5",
//     kategori: "Teknoloji",
//     fiyat : 15.475
// };


// let urun3 = {
//     isim : "LENOVO V15",
//     kategori : "Teknoloji",
//     fiyat : 13999
// };

// let urun4 = {
//     isim : "LENOVO V14",
//     kategori : "Teknoloji",
//     fiyat : 4399
// };

// let urun5 = {
//     isim : "LENOVO Ideeapad",
//     kategori : "Teknoloji",
//     fiyat : 4510
// };

// let urunler = [urun1,urun2,urun3,urun4,urun5];
// let filtreliUrunler = [];
// let kullaniciUrunIsmi = prompt("Bir ürün ismi giriniz");

// filtreliUrunleriDoldur(urunler);
// filtreliUrunleriYazdir(filtreliUrunler);

// function filtreliUrunleriDoldur(urunler) {
//     urunler.forEach(function (urun){
//         if(urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)) {
//             filtreliUrunler.push(urun);
//         }
//     });
// }

// function filtreliUrunleriYazdir(urunler){
//     urunler.forEach(function (urun){
//         console.log("------------------------------------------");
//         console.log("|" + urun.ismi + "|" + urun.fiyat + "|" + urun.kategori);
//         console.log("------------------------------------------");
//     });
// }


