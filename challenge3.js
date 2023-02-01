/*
    DOM[Challenge 3]
*/

//styling the body : 
let body = document.body ; 
body.style.cssText = "background-color : rgb(236 , 236 , 236) ; margin : 0 ; font-family : Tahoma, Arial";
//Create the header : 
let header = document.createElement("header") ; 
header.className = "website-head" ; 
let logo = document.createElement("h3") ; 
logo.append("Elzero") ;
let ul = document.createElement("ul") ; 
let liValues = ["Home" , "About" , "Service" , "Contact"] ;
for(let i = 0 ; i < liValues.length ; i++){
    let li = document.createElement("li") ; 
    li.append(liValues[i]) ; 
    ul.appendChild(li) ; 
}
//
header.appendChild(logo) ; 
header.appendChild(ul) ; 
body.appendChild(header) ; 
//styling the header 
header.style.cssText = "display : flex ; justify-content : space-between ; align-items : center ;  padding : 20px ; background-color : white ; max-height : 30px" ;
logo.style.cssText = "color : #14835d ; font-size: 26px; font-weight : bold" ; 
ul.style.cssText = "list-style : none ; display : flex ; flex : 1 ; justify-content : end ; color : rgb(136 , 136 , 136)" ; 
window.onload = function(){
    document.querySelectorAll("li").forEach(function(element , index){
        element.style.cssText = "margin-right : 12px ; font-size : 17px;" ; 
        if(index === document.querySelectorAll("li").length - 1){
            element.style.marginRight = "0"; 
        }
    }) ;
};
//Create content section :
let content = document.createElement("div") ; 
content.className = "content" ; 
content.style.cssText = "display : flex ; padding : 20px ; justify-content : center ;flex-wrap : wrap ; gap : 20px ; min-height : calc(100vh - 129px) ; box-sizing : border-box";
for(let i = 0 ; i < 15 ; i++){
    let product = document.createElement("div") ;
    let span = document.createElement("span") ; 
    span.append(`${i+1}`) ;
    product.appendChild(span) ; 
    product.append("Product") ;
    content.appendChild(product) ; 
    body.appendChild(content) ; 
    product.style.cssText = "background-color : white ; border-radius : 6px ; width : calc((100% - 40px) / 3) ; color : rgb(136 , 136 , 136) ; box-sizing : border-box ; padding : 20px ; border : 1px solid rgb(221 , 221 , 221) ; text-align : center ; font-size : 14px" ;
    span.style.cssText = "display : block ; color : black ; font-size : 30px ; margin-bottom : 5px ;margin-top : 5px ; font-weight : normal" ;  
}
//create Footer : 
let footer = document.createElement("footer") ; 
footer.className = "footer" ;
footer.append("Copyright 2023") ;
body.appendChild(footer) ; 
//styling the footer : 
footer.style.cssText = "padding : 20px ; text-align : center ; background-color :#14835d ; color : white ; font-size : 20px"