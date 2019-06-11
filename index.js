/* eslint-disable no-console */
'use strict';

function getDogImages(num) {
  let url = 'https://dog.ceo/api/breeds/image/random/' + num;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
      //displayResults(responseJson))


    .catch(error => alert('Something went wrong. Try again later.'));
}

// function verifyNum(num) {
//   return(num >= 1 && num <= 50);
// }

// function displayResults(responseJson) {
//   console.log(responseJson);
//   //replace the existing image with the new one
//   $('.results-img').replaceWith(
//     `<img src="${responseJson.message}" class="results-img">`
//   )
//   //display the results section
//   $('.results').removeClass('hidden');
// }

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let numImgs = $('.numberInput').val();

    getDogImages(numImgs);
    console.log(getDogImages(numImgs));
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});