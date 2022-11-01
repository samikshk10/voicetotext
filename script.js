const btn = document.getElementById("btn");  
const results = document.getElementById("display");  
const speechrecognition = window.speechRecognition || window.webkitSpeechRecognition;  
const recognition = new speechrecognition();  
const copybtn=document.getElementById('copybtn');


console.log(results.innerHTML);

copybtn.style.display="none";

recognition.onstart = function(){  
    document.getElementById('speakdisplay').style.display="block";
}
recognition.onend= function(){
    
    document.getElementById('speakdisplay').style.display="none";
}  






recognition.onresult = function(e){  
    var text = e.results[0][0].transcript;  
    console.log(text);  
    document.getElementById('speakdisplay').style.display="none";
  document.getElementById("display").innerHTML = text;  
  if(text!="")
  {
    copybtn.style.display="block";
}
else{
      copybtn.style.display="none";

  }
}



copybtn.onclick=function() {  
    var range = document.createRange();  
    range.selectNode(results);  
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range); 
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    document.getElementById('copymsg').style.display="block";
   setTimeout(() => {
        document.getElementById('copymsg').style.display="none";
   }, 2000);
    }
  