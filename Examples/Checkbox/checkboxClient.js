function chkHome() {

    $('#divJ2HTMLCheckboxExamples').hide();
    $('#divJ2HTMLCheckbox').show();
}


function setCheckboxMenu(id) {

    if ($('#divJ2HTMLCheckboxExamples').is(':visible') === false) {

        $('#divJ2HTMLCheckbox').hide();
        $('#divJ2HTMLCheckboxExamples').show();
        $('.j2HTMLCheckBoxMenu').removeClass('active');
        $('#' + id).addClass('active');
    } else {
        $('.j2HTMLCheckBoxMenu').removeClass('active');
        $('#' + id).addClass('active');
    }
}
/*
 ***************************************************************************** 
 ************************************* CHECKBOX ******************************
 ***************************************************************************** 
 */

/*
                REQUIRED    
                    Data: JSON OBJECT
                    AppendTo: CONTROL NAME
                    Text: NAME OF THE COLUM
                OPTIONAL
                    Value: NAME OF THE COLUMN
                    GroupName: Name of the radio button list
                    Direction: 'Vertical'
                                By Default is horizontal   
    
               1. Create DIV TAG in HTML
               
                    <div id="divCheckbox"></div>
                    
                In the following Example Text:'CITY' will get all the Cities from the 
                JSON object and bind to Radio button    
*/



function verticalCheckbox() {

    GetCustomers(function(myObject) {

        j2HTML.Checkbox({

            Data: myObject,
            AppendTo: '#divCheckbox',
            Text: 'City',
            Direction: 'Vertical'

        });
        setCheckboxMenu('VerticalCHK');

    });
}

function horizontalCheckbox() {

    GetCustomers(function(myObject) {

        j2HTML.Checkbox({

            Data: myObject,
            AppendTo: '#divCheckbox',
            Text: 'City',
            Value: 'CustomerID'

        });

        setCheckboxMenu('HorizontalCHK');
    });
}