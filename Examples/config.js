$(document).ready(function() {

    //----------- ******* BIND EVENTS ***** --------------------
    $('header').empty();
    $('header').load('/Examples/header.html');

    $('footer').empty();
    $('footer').load('/Examples/footer.html', function() {

        $('#txtFooter').html('&copy; ' + new Date().getFullYear() + ' - Wahid Technology');

    });

    $('main').load('j2HTML.html');

});

function addHistory(path) {
    history.pushState(path, null, null);
}

window.addEventListener('popstate', function(e) {

    var location = e.state;

    if (location !== null) {

        $('main').empty();
        $('main').load(location, function() {});

    } else {

        window.history.back();
    }
});

function loadPage(pageName, id, callback) {

    $('.j2HTMLMenu').removeClass('active');
    $('#' + id).addClass('active');

    $('main').empty();

    addHistory(pageName);

    $('main').load(pageName, function() {

        if (callback !== undefined) {
            callback();
        }

    });
}


//LOAD TAB CONTENT
function loadTabsContent(id, instrution, js, html, css, callback) {


    $('#' + id).load('codeTemplateTabs.html', function() {

        if (callback !== undefined) {

            $('#codeInstructions').empty();
            $('#codeInstructions').html(instrution);

            $('#codeJavascript').empty();
            $('#codeJavascript').html(js);

            callback();
        }



    });
}