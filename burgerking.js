
var picss_i = 0;
var picss_array = ["god","damn","javascript","sutter","røv"];
var picss_elem;
function picssNext() {
    picss_i++;
    picss_elem.style.opacity = 0;
    if(picss_i > (picss_array.length - 1)) {
        picss_i = 0;
    }
    setTimeout('picssSlide()',1000);
}
function picssSlide () {
    picss_elem.innerHTML = picss_array[picss_i];
    picss_elem.style.opacity = 1;
    setTimeout('picssNext()',2000);
}
picss_elem = document.getElementById("picss"); picssSlide();
