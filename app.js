const buttonEl = document.querySelectorAll('button');

const reslutEl = document.getElementById('result')

 
for (let i= 0; i < buttonEl.length; i++){
 buttonEl[i].addEventListener('click', ()=>{
   const buttonValue= buttonEl[i].textContent; 
   if (buttonValue === "c"){
        clearResult()
   } else if (buttonValue === '='){
         calculateResult()
   } else {
     appendValue(buttonValue)
   }
 })
}

    function clearResult(){
        reslutEl.value = '';
    }

       
    function calculateResult(){
         reslutEl.value = eval(reslutEl.value)
    }

       function appendValue(buttonValue){
         reslutEl.value  += buttonValue;
       }