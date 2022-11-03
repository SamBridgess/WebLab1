// add clean session
function cleanTable(){
    $('#table > tbody').html('');
    $.ajax({
        type: "GET",
        url: "src/php/delete_table.php",
        async: false,
        success: function(data){
            getTable();
        },
        error: function(data) {
            console.log(data);
        }
    })
}