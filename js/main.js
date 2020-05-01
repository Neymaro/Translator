function UI(){
    this.languageList = document.querySelector('.firstlanguages');
}

UI.prototype.changeUI = function(){
    console.log(this.languageList.options)
}
