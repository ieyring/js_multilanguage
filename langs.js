var langs = {
    CURRENT_LANGUAGE : 'en',
    CURRENT_LOCALE : null,
    
    initialize : function(){
        this.CURRENT_LANGUAGE = navigator.language.split('-')[0];        
        this.CURRENT_LOCALE = locales[this.CURRENT_LANGUAGE] || locales['en'];
    },
    _out : function(saywhat){
        //console.log(this.CURRENT_LOCALE[saywhat]);
        return this.CURRENT_LOCALE[saywhat];
    }
}
