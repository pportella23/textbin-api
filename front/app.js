import * as braille from '../dictionary.js';

let payload = {
    "status": "",
    "size": "",
    "line_1": "",
    "line_2": "",
    "line_3": "",
    "line_4": "",
    "line_5": ""
}



var button = document.getElementById('button');
button.addEventListener('click', function(){
    breakIntoPayload();
}, false);

function breakIntoPayload(){
    let bruteText = document.getElementById('textArea').value
    let j = 0;
    let treatedText = bruteText.split('\n');

    console.log(treatedText);

    for (let i = 0; i < treatedText.length; i++){

        if (treatedText[i].length > 25){
            var line = treatedText[i];
            
            treatedText[i] = [line.slice(0, 26), '\n', line.slice(26)].join('');
            
            //console.log(resultado);

            treatedText = treatedText[i].split('\n');
            //var result = "foo baz".splice(4, 0, "bar ");
        }

    }

    //treatedText = treatedText.split('\n');

    console.log(treatedText);

    //treatedText = bruteText.split('\n');
    
    let texto = [];
    
    for (let i = 0; i < treatedText.length; i++){
        texto[i] = braille.toBraille(treatedText[i]);
    }
    
    //texto[0][1]
    payload.line_6 = "usguri";

    

    //console.log(texto);
    
    //console.log(texto[0][1].charAt(0));
    
    //console.log(payload);


  }