// add clean session
function cleanTable(){
    $('#table > tbody').html('');
    $.ajax({
        type: "DELETE",
        url: "src/php/table.php",
        async: false,
        success: function(data){
            getTable();
        },
        error: function(data) {
            alert(data);
        }
    })
}