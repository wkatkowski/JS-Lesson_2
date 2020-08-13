"use strict";

function words() {
    let a = 0;
    let vowel = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
    let string = prompt("Введите слово");
    for (let i = 0; i < string.length; i++)
        for (let b = 0; b < vowel.length; b++)
            if (string[i] === vowel[b]) {
                ++a;
                break;
            }
    return a;
  }
  alert("Гласных: " + words());