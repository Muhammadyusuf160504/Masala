// function fizzBuzz(son) {
//     if (son % 3 == 0) {
//         if (son % 5 == 0) {
//             return console.log("FizzBuzz");
//         }
//         return console.log("Fizz");
//     } else if (son % 5 == 0) {
//         return console.log("Bazz");
//     } else {
//         return console.log("Fizz ha Bazz ham emas");
//     }
// }
// fizzBuzz(15)

/*
function fizzBuzz(son) {
    const arrey = []
    for (let i = 0; i <= son; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            arrey.push(`${i} FizzBuzz`);
        } else if (i % 3 == 0) {
            arrey.push(`${i} Fizz`);
        } else if (i % 5 == 0) {
            arrey.push(`${i} Buzz`);
        } else {
            arrey.push(`${i}Fizz ha Bazz ham emas`);
        }
        
    }
    return arrey
}
console.log(fizzBuzz(90));
*/



// UYGA VAZIFA

// MANTIQIY OPERATORLAR
// 1
// A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni musbat".

/*
let A = prompt("Butun sonni kiriting")

function musbat() {
    if (A > 0) {
        alert(`${A} soni musbat`)
    } else {
        alert(`${A} soni manfiy yoki no'lga teng`)
    }
}
musbat()
*/

// 2
//  A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni toq son".

/*
let A = prompt("Sonni kiriting")

function toqson() {
    if (A % 2 == 0) {
        alert(`${A} toq son emas`)
    } else {
        alert(`Ha ${A} toq son`)
    }
}
toqson()
*/

// 3
// Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A>2 va B <=3".

/*
let A = prompt("A sonini kiriting")
let B = prompt("B sonini kiriting")

function rostlik() {
    if (A > 2 && B <= 3) {
        alert(`True`)
    } else {
        alert(`False`)
    }
}
rostlik()
*/


// 4
// Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A <= B <= C"

/*
let A = prompt("A Butun sonini kiriting")
let B = prompt("B Butun sonini kiriting")
let C = prompt("C Butun sonini kiriting")

if (A <= B && B <= C) {
    alert(`True`)
} else {
    alert(`False`)
}
*/

// SHART OPERATORLARI

// 1
// Butun son berilgan. Agar, berilgan son musbat bo`lsa, 1 ga oshiring, aks holda 2 ga kamaytiring. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.

/*
let a = prompt("Sonni kiriting")

if (a > 0) {
    alert(+a + 1)
} else if (a < 0) {
    alert(a -= 2)
} else {
    alert(`${a} soni musbat ham manfiy ham emas`)
}
*/

// 2
// 1-7 gacha bo'lgan butun sonlar berilgan. Kiritilgan songa mos ravishda hafta kunlarini so'zda ifodalovchi programma tuzilsin. (1-Dushanba, 2-Chorshanba,...h.k)


let a = prompt("1 dan 7 gacha bo'lgan bironta sonni kiriting")
const hafta = ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"]
if (a <=7) {
    alert(`${a}-${hafta[a-1]}`)
} else {
    alert("Hafta 7 kundan iborat")
}


// 3
// Butun son berilgan. Agar, berilgan son musbat bo`lsa, 1 ga oshirilsin, aks holda o`zgartirilmasin. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.

/*
let a = prompt("Sonni kiriting")

if (a > 0) {
    alert(+a + 1)
} else {
    alert(a)
}
*/