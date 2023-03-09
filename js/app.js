const getColor=()=>{
    //hex code
    const randomNumber=Math.floor(Math.random()*16777215);
    const randomCode="#" +randomNumber.toString(16);
    document.body.style.backgroundColor=randomCode;
    document.getElementById("color_code").innerText=randomCode;

   
}
//event call
document.getElementById("btn_change").addEventListener("click",getColor);

//init call
getColor();