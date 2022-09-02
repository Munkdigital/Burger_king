const   body = document.querySelector("body"),
        nav = document.querySelector("nav"),
        modeToggle = document.querySelector(".dark-light"),
        searchToggle = document.querySelector(".searchToggle"),
        sidebarOpen = document.querySelector(".sidebarOpen"),
        sidebarClose = document.querySelector(".sidebarClose");

        let getMode = localStorage.getItem("mode");
            if(getMode && getMode === "dark-mode")
                body.classList.add("dark");
        

// Js code to toggle dark and light mode
        modeToggle.addEventListener("click" , () => {
            modeToggle.classList.toggle("active");
            body.classList.toggle("dark");


//Js code to keep user selected mode even page refresh or file reopen
            if(!body.classList.contains("dark")){
                localStorage.setItem("mode" , "light-mode");
            }else{
                localStorage.setItem("mode" , "dark-mode");
            }
        });

// Js code to toggle search box
        searchToggle.addEventListener("click" , () => {
            searchToggle.classList.toggle("active");
        });


// Js code to toggle sidebar
        sidebarOpen.addEventListener("click" , () =>{
                nav.classList.add("active");
        });

        body.addEventListener("click" , e =>{
            let clickedElm = e.target;
            
            if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu"))
                nav.classList.remove("active"); 
        });

var picss_i = 0;
var picss_main = document.getElementById('picss')
var picss_array = ["bk_slideshow/burger1.png","bk_slideshow/burger2.png","bk_slideshow/burger3.png","bk_slideshow/burger4.png"];
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
        