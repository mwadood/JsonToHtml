function checkbox() {
    var args = arguments[0][0];


    var data = false;
    var groupName = 'chkGroupName';
    var value = false;
    var text = false;
    var direction = 'Horizontal';
    var appendTo = false;

    //ONLY FOR MODAL
    var isModal = false;

    var error = '';

    if (args.Data !== undefined) {
        data = args.Data;
    }
    if (args.GroupName !== undefined) {
        groupName = args.GroupName;
    }
    if (args.Value !== undefined) {
        value = args.Value;

        if (data !== false) {
            if (data[0].hasOwnProperty(value) === false) {
                error += 'Value "' + value + '" not found\n';
            }
        }


    }
    if (args.Text !== undefined) {
        text = args.Text;

        if (data !== false) {
            if (data[0].hasOwnProperty(text) === false) {
                error += 'Text "' + text + '" not found\n';
            }
        }
    } else {
        error += 'Text is required';
    }
    if (args.Direction !== undefined) {
        direction = args.Direction;
    }
    // if (args.AppendTo !== undefined) {
    //     appendTo = args.AppendTo;
    // }


    if (args.isModal !== undefined) {
        isModal = args.isModal;
    }

    if (args.AppendTo !== undefined) {
        appendTo = args.AppendTo;

        if (isModal === true) {

            var chkModalId = appendTo.replace('#', '');
            appendTo = '#chk' + chkModalId;
        }
    } else {
        if (isModal === true) {

            appendTo = '#chkj2HTMLModal';
        }
    }









    //var error = '';
    if (data === false) {
        error += 'Data is required \n';
    }
    if (appendTo === false) {
        error += 'Control ID is required to append radion button(AppendTo) \n';
    }
    // if (text === false) {
    //     error += 'Text for radio button is required';
    // }


    var chk = '';

    if (error === '') {
        //IF OBJECT
        if (data.length > 0) {

            $.each(data, function(i, v) {

                var count = 0;
                var chkValue = '';
                var chkText = '';
                $.each(data[i], function(ii, vv) {

                    if (value !== undefined && ii === value) {
                        chkValue = vv;
                    }

                    if (ii === text) {
                        chkText = vv;
                    }

                    count = count + 1;

                    if (Object.keys(data[0]).length == count) {

                        //VERTICAL WITH VALUE
                        if (value !== false && direction !== 'Horizontal') {

                            chk += '<label style="display:block"><input type="checkbox" name="' + groupName + '" value="' + chkValue + '">' + chkText + '</label>';
                        }
                        //HORIZONTAL WITH VALUE
                        if (value !== false && direction === 'Horizontal') {
                            chk += '<label style="margin-left:10px;"><input type="checkbox" name="' + groupName + '" value="' + chkValue + '">' + chkText + '</label>';
                        }
                        //VERTICAL WITH NO VALUE
                        if (value === false && direction !== 'Horizontal') {

                            chk += '<label style="display:block"><input type="checkbox" name="' + groupName + '">' + chkText + '</label>';
                        }
                        //HORIZONTAL WITH NO VALUE
                        if (value === false && direction === 'Horizontal') {
                            chk += '<label style="margin-left:10px;"><input type="checkbox" name="' + groupName + '">' + chkText + '</label>';
                        }



                    }
                });
            });

            $(appendTo).empty();
            $(appendTo).append(chk);
        }
        // IF ARRAY
        else {
            var count = 0;
            var chkValue = '';
            var chkText = '';
            $.each(data, function(ii, vv) {

                if (value !== undefined && ii === value) {
                    chkValue = vv;
                }

                if (ii === text) {
                    chkText = vv;
                }

                count = count + 1;

                if (Object.keys(data).length == count) {

                    //VERTICAL WITH VALUE
                    if (value !== false && direction !== 'Horizontal') {

                        chk += '<label style="display:block"><input type="checkbox" name="' + groupName + '" value="' + chkValue + '">' + chkText + '</label>';
                    }
                    //HORIZONTAL WITH VALUE
                    if (value !== false && direction === 'Horizontal') {
                        chk += '<label style="margin-left:10px;"><input type="checkbox" name="' + groupName + '" value="' + chkValue + '">' + chkText + '</label>';
                    }
                    //VERTICAL WITH NO VALUE
                    if (value === false && direction !== 'Horizontal') {

                        chk += '<label style="display:block"><input type="checkbox" name="' + groupName + '">' + chkText + '</label>';
                    }
                    //HORIZONTAL WITH NO VALUE
                    if (value === false && direction === 'Horizontal') {
                        chk += '<label style="margin-left:10px;"><input type="checkbox" name="' + groupName + '">' + chkText + '</label>';
                    }
                }
            });

            $(appendTo).empty();
            $(appendTo).append(chk);
        }

    } else {
        alert(error);
    }

}