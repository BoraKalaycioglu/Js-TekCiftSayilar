// Kullanıcıdan en az 10 tane sayı girmesini isteyelim
// Girilen her bir sayı tek ise "tekSayilar" dizisine, çift ise "ciftSayilar" dizisine eklensin.
// Daha sonra console'da "tek sayılar : " ve "çift sayılar : " diye yazdıralım.

function sayilar() {
  let tekSayilar = [];
  let ciftSayilar = [];
  
  for (let i = 0; i < 10; i++) {
    let sayi = prompt("Sayıyı yazın");
    
    if (sayi % 2 === 0) {
      ciftSayilar.push(sayi); 
    } else {
      tekSayilar.push(sayi); 
    }
  }

  console.log(`Tek sayılar: ${tekSayilar}`  );
  console.log(`Çift sayılar: ${ciftSayilar}` );
}

sayilar();
