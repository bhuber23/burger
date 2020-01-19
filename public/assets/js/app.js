$(function() {
    $("#submitBtn").on("click", function(event) {
        event.preventDefault();

        var burgerName = {
            burger_name: $("#burger-input").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: burgerName
        }).then(function() {
            console.log(burgerName)
            location.reload();
        });
    });

    $(".devoured").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        if(!devoured){
            $.ajax("/api/burgers/" + id, {
                type: "PUT"
               }).then(
                function() {
                    location.reload();
                }
            );
        }else{
            $.ajax({
                url: "/api/burgers/" + id,
                type: "DELETE"
            }).then(
                function() {
                    console.log("deleted burger: ", id)
                    location.reload();
                });
        }      
    });
});

