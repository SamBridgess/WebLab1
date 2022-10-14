 function getTable(){
    $.ajax({
        type: "GET",
        url: "src/php/table.php",
        async: false,
        success: function(response) {
            document.querySelector('#table > tbody').innerHTML = response;
        },
        error: function(data) {
            alert(data);
        }
    });
}



getTable();