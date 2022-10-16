document.querySelector('.values').onchange = function () {
    let X_value = X_value_array[0];
    let Y_value = $('#Y_value').val();
    let R_value = $('#R_value').val();


    let dot_id_array = ['#d1', '#d2', '#d3', '#d4', '#d5', '#d6', '#d7', '#d8', '#d9' ]

    for(let i = 0; i < X_value_array.length; i++) {
        if (validate(false, X_value)) {
            let dot = $(dot_id_array[i]);
            dot.attr('r', '3px');
            dot.attr('cx', 150 + 100 / R_value * X_value_array[i]);
            dot.attr('cy', 150 - 100 / R_value * Y_value);
        }
    }
    for(let i = X_value_array.length; i < dot_id_array.length; i++) {
        let dot = $(dot_id_array[i]);
    }
}
