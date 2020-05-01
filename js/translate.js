
function Translate(word,language){
    this.apikey = "trnsl.1.1.20200430T094119Z.fcb3cffaccaa7301.9f383b774f2aaea42d9be57e8799a3310f7074c1";
    this.word = word;
    this.language = language;
    
    // XHR Object
    
    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback){
    // Ajax Works
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
    
    this.xhr.open("GET",endpoint);
    
    
    this.xhr.onload = () =>{
        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            callback(null,text);

        }else{
            console.log("Bir Hata Oluştu!", null)
        }
    }
    
    
    this.xhr.send();
    
    
};
Translate.prototype.changeParameters = function(newWord,newLanguage){
    this.word=newWord;
    this.language=newLanguage;
}