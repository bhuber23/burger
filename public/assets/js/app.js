$(function () {
    $("#submitBtn").on("click", function (event) {
        event.preventDefault();

        var burgerName = {
            burger_name: $("#burger-input").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: burgerName
        }).then(function () {
            console.log(burgerName)
            location.reload();
        });
    });

    $(".devoured").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        $.ajax({
            type: "PUT",
            url: "/api/burgers/" + id
            
        }).then(
            function() {
                location.reload();
            }
        );
    }
    );
});

