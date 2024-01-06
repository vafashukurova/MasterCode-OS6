/* 1.
 * Verilmis String`i tersine ceviren bir funksiya yazin
 * Funksiya 1 eded string qebul etmeli ve geriye string qaytarmalidir(methodsuz)
 */

function reverseStr(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    // console.log(str[i])
    result += str[i];
  }
  return result;
}

console.log(reverseStr("alma"));
console.log(reverseStr("test"));

/* 2 funksiya yaradirsiniz bu funksiya string qebul edir ve geriye string qaytarmalidir, bu string polindromdursa true, deyilse false qaytarsin  (methodsuz)
 */

function polindromStr(str1) {
  let reverseString = reverseStr(str1);
  console.log(reverseString);
  if (reverseString === str1) {
    return true;
  }
  return false;
}

console.log(polindromStr("ders"));
console.log(polindromStr("ses"));

// function polindromStr(str1){
//   let newStr=str1.split("").reverse().join("");
//   return newStr===str1 ? true : false;

// }

// console.log(polindromStr("test"));

//3. funksiya yazirsiniz number tipi parametr qebul edir, stringe cevirme olmadan verilmis reqemin sonuna 1 elave etmelisiniz

//  55 ==> 551
//  12345 ==> 123451

// ! Metod istifadəsi ilə

/* 4. "dunen bazardan iki manata utu aldim. hemen utunu ana chox beyendi. kicik hediyye olmasina baxmayaraq bu hediyye cox ses saldi" cümləsində polindrom sözləri və onların yerləşdiyi index`ləri təyin edib, obyekt daxilində nizamlı şəkildə çıxışa verin
 */

let str2 =
  "dunen bazardan iki manata utu aldim. hemen utunu ana chox beyendi. kicik hediyye olmasina baxmayaraq bu hediyye cox ses saldi";

function findIndex(str2) {
  let arr = str2.split(" ");
  let resultObj = {};

  arr.forEach((word) => {
    if (polindromStr(word)) {
      resultObj[word] = arr.indexOf(word);
    }
  });
  return resultObj;
}

console.log(findIndex(str2));

/* 5. "sdfg546cv5fgs9szdf3sSzP4dsf7sdf032ghj5dfgh8Qrrghfj1fdQEdrh5902fgh89YM" verilmiş nümunədə rəqəmlərin cəmini tapan funksiya tərtib edin
 */

let str3 =
  "sdfg546cv5fgs9szdf3sSzP4dsf7sdf032ghj5dfgh8Qrrghfj1fdQEdrh5902fgh89YM";

function NumberSum(str3) {
  let sum = 0;

  for (let i = 0; i < str3.length; i++) {
    if (str3.charCodeAt(i) >= 48 && str3.charCodeAt(i) <= 57) {
      sum += Number(str3[i]);
    }
  }
  return sum;
}

console.log(NumberSum(str3));
