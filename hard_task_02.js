'use strict'

function minimalNamber (x, y) {
  let minXY  = (x  + y - Math.abs(x - y))/2;
  console.log(minXY);
}


minimalNamber(3, 4);
minimalNamber(333, 425);
minimalNamber(222, 222);
minimalNamber(222, 221);
