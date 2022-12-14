// slideshow
let myImg = [
  "./Image/my country.jpg",
  "./Image/mycontry2.jpg",
  "./Image/myconutry4.jpg",
];
let a = 0; // tạo bien để lưu kết quả.
function changeImg() {
  document.getElementById("img").src = myImg[a];
  //lấy ra nguồn ảnh qua id, gán vào phần tử a trong mảng myImg
  a++; //tăng 1
  a == myImg.length ? (a = 0) : null; //toán tử ba ngôi
}
setInterval(changeImg, 2000); //không gọi hàm;
//not this > setInterval(changeImg(), 2000);

// ----------------------------------------------

// Js thông báo popup
function thongbaopopup() {
  document.getElementById("tbpopup-1").classList.toggle("active");
}
