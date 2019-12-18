// import * as braille  from '../dictionary.js';
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

    //console.log(bruteText.length);


    for (let i = 0; i < treatedText.length; i++){

        if (treatedText[i].length > 24){
            var line = treatedText[i];

            //qqqqqqqqqqqqqqqqqqqqqqqqqqqqqeeee
            
            treatedText[i] = [line.slice(0, 25), '\n', line.slice(25)].join('');

            let aux = treatedText[i].split('\n');
            
            //console.log("largo");
            console.log(aux);

            treatedText.splice(i,0,aux[1]);
            
            treatedText[i] = aux[0];
            
            
            //console.log(treatedText);


            //treatedText.splice(i, 0, aux);
            
            //console.log(treatedText[i]);            
            //console.log(treatedText);

            //treatedText = treatedText[i].split('\n');
            
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