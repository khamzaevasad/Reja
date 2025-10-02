// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba bo'ling", // 0-20
//   "togri boshliq tanlang va ko'proq xato qiling", // 20-30
//   "uzingizga ishlashni boshlang", // 30-40
//   "siz kuchli bo'lgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling foydasi yoq endi", //60
// ];

// function maslaxatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(() => {
//       callback(null, list[5]);
//     }, 1000);

//     // callback(null, list[5]);
//   }
// }
// console.log("passed here 0");
// maslaxatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("Javob:", data);
//   }
// });
// console.log("passed here 1");

// async

// async function maslaxatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number", null);
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
// return new Promise((resovle, reject) => {
//   setTimeout(() => {
//     resovle(list[5]);
//   }, 3000);
// });

//   setInterval(() => {
//     resovle(list[5]);
//   }, 3000);
// });
// setTimeout(() => {
//   return list[5];
// }, 5000);

// callback(null, list[5]);
//   }
// }

// callback hell

// console.log("passed here 0");
// maslaxatBering(25)
//   .then((data) => {
//     maslaxatBering(65)
//       .then((data) => {
//         console.log("Javob:", data);
//       })
//       .catch((err) => {
//         console.log("ERROR", err);
//       });

//     console.log("passed here 1");

//     maslaxatBering(40)
//       .then((data) => {
//         console.log("Javob:", data);
//       })
//       .catch((err) => {
//         console.log("ERROR", err);
//       });

//     console.log("passed here 1");

//     maslaxatBering(30)
//       .then((data) => {
//         console.log("Javob:", data);
//       })
//       .catch((err) => {
//         console.log("ERROR", err);
//       });

//     console.log("passed here 1");

//     console.log("Javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR", err);
//   });

// console.log("passed here 1");

// async / await
// async function run() {
//   let javob = await maslaxatBering(65);
//   console.log(javob);
// javob = await maslaxatBering(70);
// console.log(javob);
// javob = await maslaxatBering(41);
// console.log(javob);
// }
// run();

// A-TASK:
/* Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi. */

// function countLetter(a, b) {
//   const result = b.split("").filter((item) => item === a).length;
//   return result;
// }
// console.log(countLetter("e", "leo"));



// B-TASK:
/*
Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") return 7 
*/

// function countDigits(str) {
//   let count = 0;
//   for (char of str) {
//     if (char >= "0" && char <= "9") {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countDigits("ad2a54y79wet0sfgb9"));

// C-TASK:
/*
Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/

// function checkContent(str1, str2) {
//   return str1.split("").sort().join() === str2.split("").sort().join();
// }

// console.log(checkContent("mitgroup", "gmtiprou"));


// D-TASK:
/*
Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
*/

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.products = {
//       non,
//       lagmon,
//       cola,
//     };
//   }

//   getTime() {
//     const now = new Date();
//     const hh = String(now.getHours()).padStart(2, "0");
//     const mm = String(now.getMinutes()).padStart(2, "0");
//     return `${hh}:${mm}`;
//   }

//   qoldiq() {
//     const t = this.getTime();
//     console.log(
//       `hozir ${t}da ${this.products.non}ta non, ${this.products.lagmon}ta lagmon va ${this.products.cola}ta cola mavjud!`
//     );
//   }

//   sotish(nomi, soni) {
//     if (this.products[nomi] === undefined) {
//       console.log(`Bunday mahsulot yo‘q: ${nomi}`);
//       return;
//     }
//     if (this.products[nomi] < soni) {
//       console.log(`Hozircha yetarli ${nomi} yo‘q!`);
//       return;
//     }
//     this.products[nomi] -= soni;
//     console.log(`${this.getTime()} da ${soni}ta ${nomi} sotildi.`);
//   }

//   qabul(nomi, soni) {
//     if (this.products[nomi] === undefined) {
//       console.log(`Bunday mahsulot yo‘q: ${nomi}`);
//       return;
//     }
//     this.products[nomi] += soni;
//     console.log(`${this.getTime()} da ${soni}ta ${nomi} qabul qilindi.`);
//   }
// }

// const shop = new Shop(4, 5, 2);

// shop.qoldiq();
// shop.sotish("non", 3);
// shop.qabul("cola", 4);
// shop.qoldiq();

// E-TASK:
/*
Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("leo") return qilsin "oel"
 */

function getReverse(str) {
  return str.split("").reverse().join("");
}
console.log(getReverse("kebdasA"));
