/* Görev 1: Isınalım Biraz :) */

/* TÜM CEVAPLARINI BİR FUNCTION İÇİNDE VERDİĞİNİZ EMİN OL (GÖREV 1D - GÖREV 6). AKSİ TAKTİRDE, OTOMATİK TEST SİSTEMİ ÇALIŞMAYACAKTIR. */

// Görev 1a, 1b ve 1c puanlamaya dahil değildir

/*
Bu görevleri yaparken, yazdığın kod'un doğru çıktı verdiğini kontrol etmek için console.log'u kullanmanı öneririz.
Bunun için cevabı direk console'a logla veya çağırdığın fonksiyondan dönen değeri console'a logla.  
Örneğin:  console.log(ornekFonksiyon(deger1,deger2))
*/

/*
Görev 1a - Ehliyet Yaşı (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. surucuYasi isimli bir değişken yaz ve bir sayı ata.
   2. Eğer yaş 18'den büyük ise Console'da true, değilse false değeri yazdırın.

   İPUCU: fonksiyon oluşturmaya gerek yok
*/
let surucuYasi = 25;

const yasSiniri = (surucuYasi>18) ? true : false;

console.log(yasSiniri);


/*
Görev 1b - Değerler (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. 2 değişken tanımla ve bunlara değerler ata (isimlendirme olarak birinciDeger ikinciDegeri kullanabilirsin)
   2. 1. değeri 2. değer ile karşılaştıran bir koşul oluşturun
   3. 2. adımdaki koşul doğru olduğunda 1. değeri değiştirin
   4. 1. değeri Console'a yazdırın

   İPUCU: fonksiyon oluşturmaya gerek yok
*/
let birinciDeger =25;
let ikinciDegeri =45;

if(ikinciDegeri>birinciDeger){
  birinciDeger = 55;
  console.log(birinciDeger);
}

/*
Görev 1c - String bir değeri Number'a dönüştürün (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. String tipinde ve değeri "1999" olan bir değişken oluşturun
   2. Değeri "1999" olan bu String'i değeri 1999 olan bir integer'a dönüştürün
   3. Sonucu Console'a yazdırın

   İPUCU: Number metoduna bakabilirsin
*/
let binaYili = '1999';
parseInt(binaYili);
console.log(binaYili);


/*
Görev 1d - Çarpma
 
Aşağıdakileri yaparak carpma isimli fonksiyonu tamamla:   
   1. 2 argüman alsın(a ve b olarak tanımlayabilirsin)
   2. a ve b'yi çarpıp, sonucu dönsün
   3. console.log(carpma(7,4)) ile yazdığın fonsiyonu test edin. Console'da sonucu 28 olarak görmelisin.
*/

function carpma(a,b) {
  return a*b;
}
console.log(carpma(7,4));

// function carpmaIki(a,b){
//   return console.log(a*b);
// }
// carpmaIki(7,4);
// const carpmaUc= (a,b) => {
//  console.log(a * b);
// }
// carpmaUc(7,4);

/* Görev 2 : Köpeğin Yaşı */

/*
Aşağıdakileri yap:
 1. Aşağıdaki kopeginYasi fonsiyonunu bir argüman alacak şekilde tanımla.
 2. Gelen değeri kullanarak köpeğin yaşını hesapla (insanlarda 1 yıl köpeklerde 7 yıla denk gelir)
 3. Hesaplanan köpeğin yaşını dönün.
 */

function kopeginYasi(a) {
    let yas = a * 7;
    return yas;
  }
console.log(kopeginYasi(8));

/* Görev 3 */
/*
Aşağıdakileri oyun isimli fonksiyonu kullanarak yap.
1. 2 argüman alın: oyuncunun tercihini alan bir string değer: "Taş", "Kağıt" veya "Makas" 
   ve bilgisayarınkini alan: "Taş", "Kağıt" veya "Makas"
   Not: string değerlerin yazımına dikkat! İlk harf büyük ve türkçe karakterler kullanarak. Yoksa testi geçemez.
2. Aşağıdaki oyun kurallarına göre oyuncunun kazanıp kazanamadığını veya berabere kalıp kalmadığını dönün - (uygulamanın oluşturduğu çıktı tam olarak aşağıdakinin aynısı olmalı)
 - kazanma durumunda "Kazandın!" dönmeli
 - kaybetme durumunda "Kaybettin!" dönmeli
 - beraberlikte "Beraberlik" dönmeli

OYUNUN KURALLARI: Makas Kağıdı yener| Kağıt Taşı yener | Taş Makas'ı yener | veya beraberlik olur.
*/


function oyun(oyuncu, bilgisayar) {
    if(oyuncu===bilgisayar){
      return 'Beraberlik'
  }
    else if(oyuncu === 'Makas'){
    if(bilgisayar === 'Kağıt'){
      return 'Kazandın!';
    }else{
      return 'Kaybettin!'
    }
  } else if(oyuncu === 'Kağıt'){
      if(bilgisayar === 'Taş'){
      return 'Kazandın!';
    } else{
      return 'Kaybettin!'
    }
  } else if(oyuncu === 'Taş'){
      if(bilgisayar === 'Makas'){
      return 'Kazandın!';
    } else{
      return 'Kaybettin!'
    }
  } 
}

// function oyun(oyuncu, bilgisayar) {
//     if(oyuncu === 'Makas'){
//       if(bilgisayar === 'Kağıt'){
//       return 'Kazandın!';
//     }else{
//       return 'Kaybettin!'
//     }
//   } else if(oyuncu === 'Kağıt'){
//       if(bilgisayar === 'Taş'){
//       return 'Kazandın!';
//     } else{
//       return 'Kaybettin!'
//     }
//   } else if(oyuncu === 'Taş'){
//       if(bilgisayar === 'Makas'){
//       return 'Kazandın!';
//     } else{
//       return 'Kaybettin!'
//     }
//   } else if(oyuncu===bilgisayar){
//     return 'Beraberlik'
//   } 
// }

console.log(oyun('Makas','Taş'));

// Şimdi Taş, Kağıt, Makas oyununu bilgisayara karşı oynayalım!
/*
Öncelikle aşağıdakileri yap:
1. Bilgisayarın seçimini rastgele oluşturacağım bir fonksiyon tanımla. Örn: 
   function bilgisayarinSecimi() {
   
   }
2. Fonsiyonun içinde bilgisayarın seçimi için bir değişken tanımla
3. Math.random'ı kullanarak bilgisayarın seçimini oluşturun (Math.random 0-1 arasında bir değer verecek)
4. Bu rastgele değeri "Taş", "Kağıt" veya "Makas"a dönüştüren bir koşul oluşturun
5. Oluşan değeri geri dönün

Şimdi kendi seçtiğin bir seçime karşı bilgisayarın rastgele oluşturduğu seçimi yukarıda yazdığın oyun fonsiyonu ile oynayın ve sonucu console'a yazdırın.
Örn: console.log(oyun("Makas",bilgisayarinSecimi()))
*/ 


function game(player,bilgisayar){
  switch (player){
  case 'Makas' :
    if(bilgisayar == 'Makas'){
        return 'Beraberlik!'
    } else if (bilgisayar == 'Kağıt'){
        return 'Kazandın'

    } else{
        return 'Kaybettin!'
    }
  case 'Taş' :
    if(bilgisayar == 'Taş'){
        return 'Beraberlik!'
    } else if (bilgisayar == 'Makas'){
        return 'Kazandın'
    } else{
        return 'Kaybettin!'
    }
    case 'Kağıt' :
    if(bilgisayar == 'Kağıt'){
        return 'Beraberlik!'
    } else if (bilgisayar == 'Taş'){
        return 'Kazandın'
    } else{
        return 'Kaybettin!'
    }
  }
};

function bilgisayarinSecimi(){
  let randomSayi = Math.ceil(Math.random()*30);
  let secim;
  if(randomSayi>=0 && randomSayi<=10){
    secim = 'Makas'
  } else if (randomSayi>10 && randomSayi<=20){
    secim = 'Kağıt'
  } else {
    secim = 'Taş'
  } 
  return secim;
}
let bilgisayarinSecimiSonuc = bilgisayarinSecimi();
console.log('bilgisayarsecimideger',bilgisayarinSecimiSonuc);

console.log(game('Taş',bilgisayarinSecimiSonuc));


/* Görev 4 : Metrik Dönüştürücü */

//Görev 4a - Kilometreden Mil
/*
Aşağdaki milDonusturucu fonksiyonunu aşağıdakileri kullanarak tamamla:
1. Kilometre değerini argüman olarak alın.
2. Aldığın bu değeri Mil'e dönüştürün
3. Mil değerini geri dönün
*/

function milDonusturucu(km) {
  let mil = km*0.621371;
  return mil;
}
console.log(milDonusturucu(10));

//Görev 4b - Santimetreden Feet
/*
Aşağıdakileri feetDonusturucu fonsiyonunu kullanarak yap:
1. Santimetre değerini argüman olarak alın.
2. Aldığın bu değeri feet'e dönüştürün
3. feet değerini geri dönün

Google'da arama ipucu: "feet cm dönüştürme"
*/

function feetDonusturucu(cm) {
 return cm/30.48;
}
console.log(feetDonusturucu(1));

/* Görev 5 : 5 küçük maymun yatakta zıplamış şarkısını çocuklar için hazırladığımı varsayalım. https://www.youtube.com/watch?v=e4EJ34xnlxk */

/*
Aşağıdakileri cocukSarkisi fonksiyonunda yap:
1. Başlangıçta var olan maymun sayısını alın.
2. cocukSarkisi fonksiyonu aşağıdaki satırı sadece 1 kere yazacak şekilde kodunuzu yazın:

    "{sayı} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kmış: Bir daha yatakta zıplamak yok!"

3. Bu fonksiyonun dışında bir yerde, maymun sayısının her seferinde 1 azaldığı ve maymun sayısı 1 olana kadar devem eden bir döngü oluşturun. 
4. Bu döngüde, her seferinde cocukSarkisi fonsiyonu çalışsın ve console.log'a dönen metni yazdırsın.
*/


function cocukSarkisi(a) {
  return a + ' küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!'
}

console.log(cocukSarkisi(5));

let i= 5;

for(i;i>0;i=i-1){
  console.log(cocukSarkisi(i));
}

/* Görev 6 : Not Hesaplayıcı */

/*
Aşağdakileri notHesapla fonksiyonunda yap.
1. 100'lük sistemde bir sınav sonucu alın.
2. Aşağıdaki tabloya göre notu dönün.

 90-100 arasında 'A aldın' 
 80-89 arasında 'B aldın'
 70-79 arasında 'C aldın'
 60-69 arasında 'D aldın'
 daha aşağıda 'F aldın'
 dönün
*/

function notHesapla(a) {
  if(a<=100 && a>=90){
    return 'A aldın';
  } else if(a<=89 && a>=80){
    return 'B aldın';
  } else if(a<=79 && a>=70){
    return 'C aldın';
  } else if(a<=69 && a>=60){
    return 'D aldın';
  } else{
    return 'F aldın'
  }
}
console.log(notHesapla(55));

/* Bonus Çalışma: Sesli harf sayacı - Kaç tane sesli harf var? */

/*
Aşağıdakileri sesliHarfSayaci fonskiyonunda yap.
1. Bir argüman alın, string olsun.
2. Bu string'in içindeki sesli harfleri sayın ve sayısını geri dönün.  (hem büyük hem de küçük harflerin sayısını dönmeli).

İPUCU - yarın işlenecek array(dizi) konusunu önden araştırman gerekecek. (https://www.w3schools.com/js/js_arrays.asp)
İPUCU - .includes() methoduna bakabilirsin. (https://www.w3schools.com/jsref/jsref_includes.asp)
*/

// function sesliHarfSayaci(a) {
//   let kucukHarfler = a.toLowerCase();
//   let kucukHarflerSayisi =0;
//   for(i=0;i<=kucukHarfler.length-1;i++){
//     if('aeıioöuü'.includes(kucukHarfler[i])){
//       kucukHarflerSayisi +=1;
//     }
//   }  
//   return kucukHarflerSayisi;
// }
// console.log('sesliHarfSayaci ->',sesliHarfSayaci('SerKantOraMAn'));


function sesliHarfSayaci(a) {
    let kucukHarfler =Array.from(a.toLowerCase());
    // console.log(kucukHarfler);
    const kucukHarflerSayisi = kucukHarfler.reduce((sayac,num) => {
      console.log(sayac,num);
      if('aeıioöuü'.includes(num)){
        sayac++;
       }
       return sayac;
      },0)
      return kucukHarflerSayisi;
    }

  console.log('sesliHarfSayaci ->',sesliHarfSayaci('SerKantOraMAn'));


// function vowelCount(a){
//   let lowerCaseLetters = a.toLowerCase();
//   let numberofVowels = 0;
//   for(i=0;i<=lowerCaseLetters.length-1;i++){
//     if((lowerCaseLetters[i]=='a')||(lowerCaseLetters[i]=='e')||(lowerCaseLetters[i]=='ı')||(lowerCaseLetters[i]=='i')||(lowerCaseLetters[i]=='o')||(lowerCaseLetters[i]=='ö')||(lowerCaseLetters[i]=='u')||(lowerCaseLetters[i]=='ü')){
//       numberofVowels +=1;
//       }
//     }
//       return numberofVowels;
//   }
//   console.log(vowelCount('SerKantOraMAn'));


/* Lütfen bu satırın alt tarafını değiştirmeyin */
function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
/* Bu satırdan sonrasını değiştirmeyin */
module.exports = {
  sa,
  carpma,
  kopeginYasi,
  oyun,
  milDonusturucu,
  feetDonusturucu,
  cocukSarkisi,
  notHesapla,
};
