// add clean session
function cleanTable(){
    $('#table > tbody').html('');
    $.ajax({
        type: "DELETE",
        url: "src/php/table.php",
        async: false,
        success: function(data){
            get_table();
        },
        error: function(data) {
            alert(data);
        }
    })
}