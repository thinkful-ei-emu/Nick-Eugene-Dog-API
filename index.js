/* eslint-disable no-console */
'use strict';

function getDogImages(num) {
  let url = 'https://dog.ceo/api/breeds/image/random/' + num;
  fetch(url)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson) {
  //replace the existing image with the new one
  $('.results-img').empty();
  responseJson.message.forEach(response => {
    $('.results-img').append(`<img src="${response}" class="results-img">`);
  });
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let numImgs = $('.numberInput').val();

    getDogImages(numImgs);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});