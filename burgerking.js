
var picss_i = 0;
var picss_main = document.getElementById('picss')
var picss_array = ["bk1.png","bk2.png","bk3.png","burger_homepage.png"];
var picss_elem;
function picssNext() {
    picss_main.setAttribute("src",picss_array[picss_i])
    picss_i++;
    picss_elem.style.opacity = 0;
    if(picss_i > (picss_array.length - 1)) {
        picss_i = 0;
    }
    setTimeout('picssSlide()',1500);
}
function picssSlide () {
    picss_main.setAttribute("src",picss_array[picss_i])
    picss_elem.innerHTML = picss_array[picss_i];
    picss_elem.style.opacity = 1;
    setTimeout('picssNext()',3000);
}
picss_elem = document.getElementById("picss"); picssSlide();
