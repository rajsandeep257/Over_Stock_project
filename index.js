document.querySelector(".burger").addEventListener("click",func);
document.querySelector("#sub1").addEventListener("click",function(){
    document.querySelector(".livingfurni-bar").style.display="block";
})
document.querySelector("#sub2").addEventListener("click",function(){
    document.querySelector(".bedfurni-bar").style.display="block";
})
document.querySelector("#ac").addEventListener("click",function(){
    document.querySelector(".acc-bar").style.display="block";
});
document.querySelector("#con").addEventListener("click",function(){
    document.querySelector(".con-bar").style.display="block";
});
document.querySelector("#one").addEventListener("click",function(){
    document.querySelector(".furni-bar").style.display="block";
});
document.querySelector("#two").addEventListener("click",function(){
    document.querySelector(".rugs-bar").style.display="block";
});
document.querySelector("#three").addEventListener("click",function(){
    document.querySelector(".decor-bar").style.display="block";
});
document.querySelector("#four").addEventListener("click",function(){
    document.querySelector(".bed-bar").style.display="block";
});
document.querySelector("#five").addEventListener("click",function(){
    document.querySelector(".home-bar").style.display="block";
});
document.querySelector("#six").addEventListener("click",function(){
    document.querySelector(".kitchen-bar").style.display="block";
});
document.querySelector("#seven").addEventListener("click",function(){
    document.querySelector(".outdoor-bar").style.display="block";
});
document.querySelector("#eight").addEventListener("click",function(){
    document.querySelector(".jewelry-bar").style.display="block";
});
document.querySelector("#nine").addEventListener("click",function(){
    document.querySelector(".lighting-bar").style.display="block";
});
document.querySelector("#ten").addEventListener("click",function(){
    document.querySelector(".kids-bar").style.display="block";
});
document.querySelector("#eleven").addEventListener("click",function(){
    document.querySelector(".more-bar").style.display="block";
});
document.querySelector("#twelve").addEventListener("click",function(){
    document.querySelector(".ideas-bar").style.display="block";
});
window.addEventListener("mouseup",function(event){
    var box=document.querySelector(".sidebar");
    var sub1=document.querySelector(".furni-bar");
    var sub2=document.querySelector(".rugs-bar");
    var sub3=document.querySelector(".decor-bar");
    var sub4=document.querySelector(".bed-bar");
    var sub5=document.querySelector(".home-bar");
    var sub6=document.querySelector(".kitchen-bar");
    var sub7=document.querySelector(".outdoor-bar");
    var sub8=document.querySelector(".jewelry-bar");
    var sub9=document.querySelector(".lighting-bar");
    var sub10=document.querySelector(".kids-bar");
    var sub11=document.querySelector(".more-bar");
    var sub12=document.querySelector(".ideas-bar");
    var ac=document.querySelector(".acc-bar");
    var con=document.querySelector(".con-bar");
    var c1=document.querySelector(".livingfurni-bar");
    var c2=document.querySelector(".bedfurni-bar");
    if(event.target!=box && event.target.parentNode != box)
    {
        box.style.display="none";
    }
    if(event.target!=sub1||sub2||sub3||sub4||sub5||sub6||sub7||sub8||sub9||sub10||sub11||sub12||ac||con && event.target.parentNode != sub1||sub2||sub3||sub4||sub5||sub6||sub7||sub8||sub9||sub10||sub11||sub12||ac||con)
    {
         sub1.style.display="none";
         sub2.style.display="none";
         sub3.style.display="none";
         sub4.style.display="none";
         sub5.style.display="none";
         sub6.style.display="none";
         sub7.style.display="none";
         sub8.style.display="none";
         sub9.style.display="none";
         sub10.style.display="none";
         sub11.style.display="none";
         sub12.style.display="none";
         ac.style.display="none";
         con.style.display="none";
    }
    if(event.target!=c1||c2 && event.target.parentNode!=c1||c2)
    {
        c1.style.display="none";
        c2.style.display="none";
    }
});
function func(){
    var div=document.querySelector(".sidebar");
    div.style.display="block";

    

}
function myfunc(){
    document.querySelector(".sidebar").style.display="block";
}
function func1(){
    document.querySelector(".furni-bar").style.display="block";
}

