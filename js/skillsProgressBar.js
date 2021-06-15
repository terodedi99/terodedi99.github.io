var lang = {
    "java": "70%",
    "dart": "70%",
    "typescript": "60%",
    "javascript": "50%",
    "python": "50%",

    "prestashop": "70%",
    "html": "60%",
    "css": "60%",
    "angular": "40%",

    "flutter": "70%",
    "android": "50%",

    "espanol": "Nativo",
    "ingles": "B1",

    "linux": "65%",
    "latex": "50%",

    /*
    "mysql": "90%",
    */
};

var multiply = 4;

$.each(lang, function(language, pourcent) {

    var delay = 250;

    setTimeout(function() {
        $('#' + language + '-pourcent').html(pourcent);
    }, delay * multiply);

    multiply++;

});