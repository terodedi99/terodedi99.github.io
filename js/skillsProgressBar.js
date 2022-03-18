var lang = {
    "java": "70%",
    "dart": "70%",
    "typescript": "70%",
    "javascript": "70%",
    "python": "50%",

    "prestashop": "70%",
    "html": "80%",
    "css": "80%",
    "angular": "60%",

    "flutter": "70%",
    "android": "50%",

    "espanol": "Nativo",
    "ingles": "B1",

    "linux": "70%",
    "latex": "80%",

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
