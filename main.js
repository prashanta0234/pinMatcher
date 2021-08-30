function generateCode(){
    pin();
}
function pin(){

    let code=Math.round(Math.random()*10000)+'';
    let displayPin=document.getElementById('showGeneratePin');
    if(code.length==4){
        displayPin.value=code;
    }
    else{
        pin();
    }
    
}

document.getElementById('calc').addEventListener('click',function(event){
    let calcInput=event.target;
    let showNumber=document.getElementById('calcShowInput');
    let showNumberValue=showNumber.value;   
    if(calcInput.innerText=='C'){
        showNumber.value='';
    }
    else if(calcInput.innerText=='<')
    {
        
        showNumber.value= showNumberValue.slice(0,showNumberValue.length-1);

    }
    else{
        showNumber.value=showNumber.value+calcInput.innerText;

    }
   
   
})

function match(){
    let displayPin=document.getElementById('showGeneratePin').value;
    let showNumber=document.getElementById('calcShowInput').value;
    if(displayPin==showNumber)
    {
        document.getElementById('matchCode').style.display='block';
        document.getElementById('wrongCode').style.display='none';
    }
    else{
        document.getElementById('matchCode').style.display='none';
        document.getElementById('wrongCode').style.display='block';
    }
}