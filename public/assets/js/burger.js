$(function() {
  $(".change-status").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("neweat");

    var newEatenStatus = {
      devoured: "true"
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenStatus
    }).then(function() {
      console.log("changed devoured to ", newDevoured);
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burgtoeat")
        .val()
        .trim(),
      devoured: 0
    };

    console.log(newBurger);

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      location.reload();
    });
  });
});
