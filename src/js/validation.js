function validate(print_permission){
    let X_value = $('#X_value').val();
    let Y_value = $('#Y_value').val();
    let R_value = $('#R_value').val();
    let info = "";
    info += "<span>" + validateY(Y_value) + "</span>";
    info += "<span>" + validateX(X_value) + "</span>";
    info += "<span>" + validateR(R_value) + "</span>";

    if (print_permission) {
        $('.Error_text').html(info);
    }

    return (info === "<span></span>".repeat(3));
}

function validateX(value){
     correct_values = ["-2", "-1.5", "-1", "-0.5", "0", "0.5", "1", "1.5", "2"].map(Number);
     if (!(value.trim() === null)){
        
        if (isNaN(Number(value))){
        return " Incorrect X input";
        }
        const x = parseFloat(value);
        if (!correct_values.includes(x)){
            return " Incorrect X value. Should be inside [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2]";
         }
     return "";

     }    
     else{
        return " Field X is empty";
     }
}

function validateY(value){
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

function validateR(value){
    if (!(value.trim() === "")){
        if (isNaN(Number(value))) {
            return " Incorrect R value\n ";
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