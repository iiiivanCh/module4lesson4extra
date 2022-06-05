'use strict'

const NOD = (a, b) => {

  if (Number.isInteger(a) && Number.isInteger(b)) {
    if (a === b && a != 0 && b != 0) {
      console.log('Любое из предложенных цифр дает искомую величину:', a);
    } else {
      if (a === 0 || b === 0) {
        console.log('Одна или обе цифры равны нулю, НОД не существует');
      } else {
        while (a != b) {
          if (a > b) {
            a = a - b;
          } else {
            b = b - a;
          }
          console.log(a);
        }
      }
    }
  } else {
    console.log('Неверные данные, требуется предоставить два натуральных числа');
  }
}

NOD(400, 400);