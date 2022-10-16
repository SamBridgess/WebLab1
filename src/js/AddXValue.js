function add_X_value(id){
    let got_x = document.getElementById(id);
    if(X_value_array.includes(got_x.value)) {
        var idx = X_value_array.indexOf(got_x.value);
        X_value_array.splice(idx, 1);
    } else {
        X_value_array.push(got_x.value);   
    }
}