import { recipes } from "/src/js/data/recipe.js";

$(function () {
    // Hides the UID
    $('div.recipeCards p:first-child').hide();
    
    // Hides the description, ingredients and other p elements from the import
    $('.recipeCards p:nth-child(4), .recipeCards p:nth-child(5), .recipeCards p:nth-child(6), .recipeCards p:nth-child(7), .recipeCards p:nth-child(8), .recipeCards p:last-child').hide();

    // Hides the ul from the import
    $('.recipeCards ul').hide();
  
    // Displays estimated cook time when mouse enters img
    $('div.recipeCards img').on('mouseenter', function(e) {

      // grabbing sibs to only show completionTime
      $(this).siblings('p:last-child').show();

    });
  
    // Hides estimated cook time when mouse leaves img, ties to the above function keeps it displayed for the selected recipe card
    $('div.recipeCards img').on('mouseleave', function(e) {

      // Check if the recipe card is not selected before hiding the last p element
      if (!$(this).parent().hasClass('selected')) {
        $(this).siblings('p:last-child').hide();
      }
    });
  
  // Shows all elements when img is clicked
    $('.recipeCards img').on('click', function(e) {


    // slideToggle the 'selected' class on the clicked recipe card to show/hide the elements
    $(this).parent().toggleClass('selected').find('p:nth-child(4), p:nth-child(5), p:nth-child(6), p:nth-child(7), p:nth-child(8), p:last-child').slideToggle();
    //had to grab ul as well
    $(this).parent().find('ul').slideToggle();

    // Toggle the last p element in the clicked recipe card based on whether it's selected or not
    $(this).siblings('p:last-child').slideDown($(this).parent().hasClass('selected'));
   
  });
});



// displays cards via innerHTML
let cards = document.querySelector('.recipeCardDisplay');
for(let i = 0; i < recipes.length; i++)
{

    cards.innerHTML += `
    <div class = "recipeCards">
        <p style="display:none;">${recipes[i].uid}</p>
        <p style="font-size:24px; margin: 10px"><strong>${recipes[i].recipeName}</strong></p>
        <p style="font-size:18px; margin: 10px"><strong>${recipes[i].category}</strong></p>
        <img src='${recipes[i].image}'>
        <p><strong>Recipe Directions:</strong>${recipes[i].description}</p>
        <p>${recipes[i].ingredients}</p>
        <p><strong>Estimated Cook Time: </strong>${recipes[i].completionTime}</p>
    </div>

    `
}