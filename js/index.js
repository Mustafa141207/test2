

let arrOne=['./images/x1.jfif','./images/x2.jfif','./images/x3.jfif','./images/x4.jfif'];
let arrTwo=['./images/home1.jfif','./images/home2.jfif','./images/home3.jfif','./images/home4.jfif'];
function jorgina(id,name){
    let cartona=``;
    for(let i=0;i<4;i++){
        cartona+=`
        <div class="row rounded-4 my-3 shadow p-3">
        <div class="col-md-4">
            <img src="./images/images.jfif" class="w-100 h-100" alt="">
        </div>
        <div class="col-md-4 text-end">
            <h4 class="special fw-bolder"> ${name}  </h4>
            <h5>العروض حتي شهر يناير</h5>
            <div class="order justify-content-end justify-content-between d-flex">
                <p class="special fw-bold ">5,649 ريال</p>
                <p class="second">7,649 ريال</p>
                <p class="second">8ايام 7ليالي</p>
            </div>
           <div class="list me-3">
           <ul>
           <li>الباكدج يشمل</li>
           <li>زياره 9 مدن سياحيه يوميه</li>
           <li>سيارة خاصه طول مده الرحله</li>
           <li>شامل افخم منتج سياحي</li>
           <li>استقبال وتوديع من المطار</li>
           <li>تامين دولي شامل لكل فرد ف الرحله</li>
           <li>حجز فندق 5نجوم</li>
           <li>شامل واجبه افطار يوميا في الفندق</li>
           </ul>
           </div> 
        </div>
        <div id="xoxo" class="col-md-4  d-flex justify-content-end">
            <div class="side m-3 d-flex flex-column justify-content-between">
                <div class="top text-center">
                    <i class="fa-solid fa-qrcode fs-1"></i>
                </div>
                <div class="bottom">
                    <button id="op" class="btn"> واتساب</button>
                </div>
            </div>
        </div>
    </div>
        `
    }
    document.querySelector(`#${id}`).innerHTML=cartona;
}
jorgina(`jorgina`,'عروض جورجينا');
jorgina(`oz`,'عروض ارذبيجان');

function Setimg(id,arr){
   let cartona=``;
    for(let i=0;i<arr.length;i++){

        cartona+=`
        <div class="col-md-6">
                    <div class="handleImg">
                        <img src="${arr[i]}" class="w-100" alt="">
                    </div>
                </div>
        `
    }
    document.querySelector(id).innerHTML=cartona;
}

Setimg('#imghome',arrTwo);
Setimg('#z',arrOne);

    let home = $("#home").offset().top;
    $('.test').css({'top':'567.075px',


'right':'20px'});


$('.moving button').click(function(e){
    $(e.target).addClass('move');
    $(e.target).siblings().removeClass('move')
})
$('#click').click(function (e) {
    $('#mainSection').addClass('d-block');
  })





