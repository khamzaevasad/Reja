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

function countLetter(a, b) {
  let result = [];
  const arr = b.split("");
  arr.forEach((element) => {
    if (element.includes(a)) {
      result.push(element);
    }
  });
  return result.length;
}

console.log(countLetter("e", "leo"));
