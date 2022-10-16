document.querySelector('.values').onchange = function () {
    let X_value = X_value_array[0];
    let Y_value = $('#Y_value').val();
    let R_value = $('#R_value').val();
    let dot = $('#dot');

    if (validate(false, X_value)) {
        dot.attr('r', '3px');
        dot.attr('cx', 150 + 100 / R_value * X_value);
        dot.attr('cy', 150 - 100 / R_value * Y_value);
    }
}