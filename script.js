let flag = 0;
slidShow(flag);
function controller(x){
    flag = flag + x;
    slidShow(flag);
}


function slidShow(num){
    let slides = document.getElementsByClassName("slide");


    if(num === slides.length){
        flag = 0;
        num = 0;
    }
    if( num < 0){
        flag = slides.length-1;
        num = slides.length-1

    }
    for(let y of slides){
        y.style.display = "none"
    }
    slides[num].style.display ="block";
    console.log(flag)
    console.log(num)
}