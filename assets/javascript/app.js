$('document').ready(function() {
  console.log("ready, set go!!")


/*   This is going to be my inital array of topics-Heroes */
      let topicHeroes = [
        "Avengers",
        "Justice League",
        "Kamen Rider",
        "Power Rangers",
        "Master Chief",
        "Goku",
        "One Punch Man",
        
      ];

    /* these are going to be the rest of the vairables for the app */

    function renderButtons() {
      $("#addedButtons").empty();
      for (let i = 0; i < topicHeroes.length; i++) {
        var heroButtons =$("<button>")
        heroButtons.addClass("hero-btn");
        heroButtons.attr("data-name", topicHeroes[i]);
        heroButtons.text(topicHeroes[i]);
        $("#addedButtons").append(heroButtons);
     }
    }; 
  
  
    

    let search = $(this).data("search")
    console.log("search, ready");

    const apiKey = "RvbjeZv71Wbn8T8UwLoknIV7LB7nCZOL";
    var q = $(this).attr("data-name");
    

    function displayHeroes(heroName) {
      console.log("heroName")
      let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey +  "&q=" + q +  "&limit=10&offset=08rating=PG&lang=en"
        $.ajax({ /* this is the ajax request tht will pull the giphs from giphy using the API */
            url: queryURL,
            method: "GET"
          }).then(function(response){/*this is a loop that will go through the array and add the corrct rating*/
            console.log(response)
                //this is the loop that will pull data from the giphy website
            for (let i = 0; i < response.data.length; i++) {
              let gif = response.data[i].images.fixed_height.url;
              let still = response.data[i].images.fixed_height_still.url;
              let heroDiv = $("<div class='Hero'>");
              let rating = $("<p>").text("Rating: " + response.data[i].rating);
              let heroImage = $("<img>"); 
              heroImage.attr("data-gif", gif);
              heroImage.attr("data-still", still);
              heroImage.attr("data-state", gif)
              heroImage.addClass("heroImage")
              heroImage.attr("src", response.data[i].images.fixed_height.url);
              heroDiv.append(heroImage);
              heroDiv.append(rating)
              $("#addedHeroes").prepend(heroDiv);
              
            }
        })
    }

    $('#add-hero').click(function(event) {
      event.preventDefault();
      let hero = $('#hero-input').val().trim();
      if (topicHeroes.length > 2) {
        topicHeroes.push(topicHeroes)
      } 
      renderButtons();
    });

    $(document).on("click", ".hero-btn", function(){
      var heroName = $(this).data("name");
      console.log("heroName")
      console.log($(this));
      displayHeroes(heroName);






    $(document).on("click", ".heroImage", function() {
        let image = $(this)
        
        if (image.attr('data-state') === 'gif') {
            image.attr('src', image.attr('data-still')); 
            image.attr('data-state', 'still');
          } else {
            image.attr('src', image.attr('data-gif'));
            image.attr('data-state', 'gif');
          }
        });
    
    });
})