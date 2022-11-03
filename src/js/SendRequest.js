var X_value_array = [];
function sendRequest(){
    let validate_flag = true;
    for(let i = 0; i < X_value_array.length; i++) {
        let X_value = X_value_array[i]
        if(!validate(true, X_value)) {
            validate_flag = false;
            break;
        }
    }
    if(X_value_array.length === 0) {
        validate(true, null);
    } else if(validate_flag) {   
        let Y_value = $('#Y_value').val();
        let R_value = $('#R_value').val();

        $.ajax({
            type: 'GET',
            url: 'src/php/update.php',
            data: {
                'x_array': X_value_array,
                'y': Y_value.trim(),   
                //'x': X_value.trim(),
                'r': R_value.trim(),
                'hours': new Date().getHours(),
                'minutes': new Date().getMinutes(),
                'seconds': new Date().getSeconds()
            },
            success: function (response) {
                document.querySelector('#table > tbody').innerHTML = response;
            },
            error: function (data) {
                console.log(data);
            }
        });
    }
}
function clearCheckboxArray(){
    X_value_array = []
}