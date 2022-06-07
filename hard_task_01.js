'use strict'

const calcLeastCommonDenominator = (a, b) => {

  if (Number.isInteger(a) && Number.isInteger(b)) {
    if (a === b && a != 0 && b != 0) {
      console.log('Любое из предложенных цифр дает искомую величину:', a);
      return;
    } else {
      if (a === 0 || b === 0) {
        console.log('Одна или обе цифры равны нулю, НОД не существует');
        return;
      } else {
        while (a != b) {
          if (a > b) {
            a = a - b;
          } else {
            b = b - a;
          }
        }
        console.log(a);
      }
    }
  } else {
    console.log('Неверные данные, требуется предоставить два натуральных числа');
  }
}

calcLeastCommonDenominator(680, 1258960);
calcLeastCommonDenominator(0, 600);
calcLeastCommonDenominator(0, 0);
calcLeastCommonDenominator(20, 20);
calcLeastCommonDenominator('a', 20);