eventListeners();

function eventListeners(){
    let form = document.getElementById("translate-form");
    form.addEventListener("submit", translateWord);
    
    document.querySelector('.firstlanguages').onchange = function(){
        //Arayüz işlemleri
        ui.changeUI();
    }
    
}
const ui = new UI();

function translateWord(e){
    let word = document.getElementById("word").value;
    let lang = document.getElementById("langs").value;
    const translate = new Translate(word,lang);
    translate.changeParameters(word,lang);
    translate.translateWord(function(err,response){
        if(err){
            console.log(err)
        }
        else(
            ui.displayTranslate(response)
        )
    });
    
    e.preventDefault();
}

// UI Update ; 

function UI(){
    this.languageList = document.querySelector('.firstlanguages');
    this.outputWord = document.querySelector('.secondmsj');
}

UI.prototype.changeUI = function(){
    console.log(this.languageList.options)
}

UI.prototype.displayTranslate = function(word) {
    this.outputWord.textContent = word;
}