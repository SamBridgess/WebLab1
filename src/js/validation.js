function validate(print_permission){
    let Y_value = $('#Y_value').val();
    let X_value = $('#X_value').val();
    let R_value = $('#R_value').val();
    let info = "";
    info += "<span>" + validate_y(Y_value) + "</span>";
    info += "<span>" + validate_x(X_value) + "</span>";
    info += "<span>" + validate_r(R_value) + "</span>";

    if (print_permission) {
        $('.Error_text').html(info);
    }

    return (info === "<span></span>".repeat(3));
}

function validate_x(value){
     correct_values = ["-2", "-1.5", "-1", "-0.5", "0", "0.5", "1", "1.5", "2"].map(Number);
     if (!(value.trim() === null)){
        
        if (isNaN(Number(value))){
        return " Incorrect R input";
        }
        const x = parseFloat(value);
        if (!correct_values.includes(x)){
            return " Incorrect R value. Should be inside [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2]";
         }
     return "";

     }    
     else{
        return " Field X is empty";
     }
}

function validate_y(value){
    if (!(value.trim() === "")){
        if (isNaN(Number(value))) {
            return " Incorrect Y value\n ";
        }
        const y = parseFloat(value);

        if (y < -3 || y > 5 ){
            return " Y should be between -3 and 5";
        }
        return "";
    }   
    else{
        return " Field Y is empty";
    }  
}

function validate_r(value){
    if (!(value.trim() === "")){
        if (isNaN(Number(value))) {
            return " Incorrect Y value\n ";
        }
        const r = parseFloat(value);

        if (r < 1 || r > 4 ){
            return " R should be between 1 and 4";
        }
        return "";
    }   
    else{
        return " Field R is empty";
    }  
}