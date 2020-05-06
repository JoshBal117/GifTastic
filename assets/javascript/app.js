$('document').ready(function() {


/*   This is going to be my inital  empty array of giphs to be pulled. */
      let topic = []

    /* these are going to be the rest of the vairables for the app */

    const key = "RvbjeZv71Wbn8T8UwLoknIV7LB7nCZOL";
    const q;
    let queryURL: "https://api.giphy.com/v1/gifs/search?api_keys=" + key + "&q=" +
    console.log(queryURL);

    function displayHeroes() {
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response){
              
            let results = Response.data;
            console.log(results)
        })
    }


    function renderButton() {
        $("#giphDisplay").empty();

        for (let i = 0; i < giphs.length; i++) {
        
            let a = $("<buttons>");
            a.addClass("image");
            a.attr("data-name", images[i]);
            a.text(images[i]);
            $("giphDisplay").append(a);
            
        }
    }




    $(".gif").on("click", function() {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
        });
    
    
    
    
    
    
    
    

     


})



