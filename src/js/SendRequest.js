var X_value_array = [];
function sendRequest(){
    for(let i = 0; i < X_value_array.length; i++){
        let X_value = X_value_array[i];

        if (validate(true, X_value)){
    
            let Y_value = $('#Y_value').val();
            let R_value = $('#R_value').val();
    
            $.ajax({
                type: 'GET',
                url: 'src/php/update.php',
                data: {'y': Y_value.trim(), 'x': X_value.trim(), 'r': R_value.trim()},
                success: function (response) {
                    document.querySelector('#table > tbody').innerHTML = response;
                },
                error: function (data) {
                    alert(data); 
                }
            });
        }
    }
    if(X_value_array.length === 0) {
        validate(true, null);
    }
}
function clearCheckboxArray(){
    X_value_array = []
}