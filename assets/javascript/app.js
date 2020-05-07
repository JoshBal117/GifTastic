$('document').ready(function() {


/*   This is going to be my inital array of topics-Heroes */
      let topic = [
        "Avengers",
        "Justice League",
        "Kamen Rider",
        "Power Rangers",
        "Master Chief",
        "Goku",
        "One Punch Man",
      ];

    /* these are going to be the rest of the vairables for the app */


  


    let search = $(this).data("search")
    console.log(search);

    const apiKey = "RvbjeZv71Wbn8T8UwLoknIV7LB7nCZOL";
    const q;
    

    function displayHeroes() {
      let queryURL = "https://api.giphy.com/v1/gifs/search?api_key" + apiKey + "search" + "&limit=10&offset=08rating=PG&lang=en"
    console.log(queryURL);
        $.ajax({ /* this is the ajax request tht will pull the giphs from giphy using the API */
            url: queryURL,
            method: "GET"
          }).then(function(response){/*this is a loop that will go through the array and add the corrct rating*/
            console.log(response)
            for (let i = 0; i < response.data.length; i++) {
              let giphs = response.data[i].images.fixed_height.url;
              let still = response.data[i].images.fixed_height_still.url;
              let heroDiv = $("<div class='Hero'>");
              let rating = $("<p>").text("Rating: " + response.data[i].rating);
              let heroImage = $("<img>"); 
              heroImage.attr("data-giph", giph);
              heroImage.attr("data-still", still);
              heroImage.attr("data-state", giph)
              heroImage.addClass("heroImage")
              eroImage.attr("src", response.data[i].images.fixed_height.url);
              heroDiv.append(heroImage);
              heroDiv.append(rating)
              $("#addedHeroes").prepend(heroDiv);
              
            }
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
        let state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
        });
    
    
    
    
    
    
    
    

     


})



