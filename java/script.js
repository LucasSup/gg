let value = prompt("Hãy nhập năm: ");
console.log(value);

function kiemTraNamNhuan(nam) {
  if ((nam % 400 == 0)|| (nam % 4 == 0) && (nam % 100 == 0)) {
    console.log("Đây là năm nhuận");
  } else {
    console.log("Đây là năm không nhuận");
    }
 }

kiemTraNamNhuan(value);
