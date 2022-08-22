const topHead = document.querySelector(".top-head");
const bellowHead =document.querySelector(".bellow-head");
 window.onscroll =function(){
      if(window.pageYOffset >= 350 ){
            topHead.classList.add("show-none");
            bellowHead.classList.add("fixed");
      }else{
            topHead.classList.remove("show-none");
            bellowHead.classList.remove("fixed");
      }
      
      
 }
// //Function handel slider
// function handelSlider (idparent,slider,next,pre,product){
//      slder = document.querySelector(idparent).querySelector(slider);
//      next=document.querySelector(idparent).querySelector(next);
//      pre =document.querySelector(idparent).querySelector(pre);
//      lastproduct = document.querySelector(idparent).querySelector(`${product}:last-child`);
//      first = document.querySelector(idparent).querySelector(`${product}:first-child`);   
//      postion = {
//         idparent:0
//     };
//     next.onclick = function(){
         
//         if(postion>=((lastproduct.offsetLeft-1000)*-1)){
//             postion-=161;
//             slder.style.transform = `translate(${postion}px,0)`;
//         }
      
//     }
//     pre.onclick=function(){
  
//         if(postion<first.offsetLeft-6){
//             postion+=161;
//             slder.style.transform = `translate(${postion}px,0)`;
//         }
        
//     }
  
// }
// handelSlider("#sale",".box-products",".next",".pre",".product");
// handelSlider("#hots",".box-products",".next",".pre",".product");
