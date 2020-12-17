

// var name=prompt("Please enter your name");

// alert("Hi "+name);

var btnTranslate = document.querySelector("#btn-translate");
var inputTextarea= document.querySelector("#input_textarea");
var outputDiv=document.querySelector("#outputDiv");


var apiUrl="https://api.funtranslations.com/translate/sindarin.json";
;

function getTranslationURL(text) {
    
    return apiUrl + "?"+ "text="+ text
}


btnTranslate.addEventListener("click",handleTranslateClick);

// function handleTranslateButtonClick() {
    
//     alert("Hello Moto")
// }

// inputTextarea.addEventListener("change",handleInputTextareaChange)

function errorHandler(err) {
   
  
    alert("something went wrong");
}


function handleTranslateClick() {

    var input=inputTextarea.value;
    fetch(getTranslationURL(input))
    .then(response=>response.json())
    .then(res=>{
        
        console.log(res);
        
            var translatedText=res.contents.translated;
        outputDiv.innerHTML=translatedText;
        
        

    })
    .catch(errorHandler);
}


