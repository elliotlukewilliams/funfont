$(document).ready(function() {

  //dropdown menus
  $('.dropdown-button').on('click', function(event) {
    $(event.currentTarget).next().slideToggle();
  })


  //live text update
  $('#input').on('keyup', function(event) {
    $('#place-holder-text').html($(event.currentTarget).val());
  })
  //color change
  $('#black').on('click', function() {
    $('#place-holder-text').css({
      color: 'black'
    })
  })
  $('#grey').on('click', function() {
    $('#place-holder-text').css({
      color: 'grey'
    })
  })
  $('#blue').on('click', function() {
    $('#place-holder-text').css({
      color: 'blue'
    })
  })
  $('#green').on('click', function() {
    $('#place-holder-text').css({
      color: 'green'
    })
  })
  $('#red').on('click', function() {
    $('#place-holder-text').css({
      color: 'red'
    })
  })
  $('#orange').on('click', function() {
    $('#place-holder-text').css({
      color: 'orange'
    })
  })
  $('#yellow').on('click', function() {
    $('#place-holder-text').css({
      color: 'yellow'
    })
  })
  $('#purple').on('click', function() {
    $('#place-holder-text').css({
      color: 'purple'
    })
  })
  $('#white').on('click', function() {
    $('#place-holder-text').css({
      color: 'white'
    })
  })

  $('#named-color').on('keyup', function(event) {

    $('#place-holder-text').css({
      color: $(event.currentTarget).val()
    })

  })

  //font change
  $('#times').on('click', function() {

    $('#place-holder-text').css({
      fontFamily: 'Times'
    })
  })
  $('#oswald').on('click', function() {

    $('#place-holder-text').css({
      fontFamily: 'Oswald'
    })
  })
  $('#trade').on('click', function() {

    $('#place-holder-text').css({
      fontFamily: 'Trade Winds'
    })
  })
  $('#dancing').on('click', function() {

    $('#place-holder-text').css({
      fontFamily: 'Dancing Script'
    })
  })
  $('#shadows').on('click', function() {

    $('#place-holder-text').css({
      fontFamily: 'Shadows Into Light'
    })
  })

  $('#right').on('click', function() {

    $('#place-holder-text').css({
        fontFamily: 'Righteous'
    })
  })


  //font-size slider

  var range = $('#font-size');
  var value = $('#place-holder-text');

  value.html(range.attr('value'));

  range.on('input', function() {

    value.css({
      fontSize: range.val() + "px",
    })

  });



  //opacity slider

  var opacity = $('#opacity')

  $('#opacity').on('input', function() {

    value.css({
      opacity: $('#opacity').val()
    })

  })

  //background color change

  $('#background-menu #black').on('click', function(event) {
     $('#text-preview').css({
       background: "black"
     })
  })
  $('#background-menu #grey').on('click', function(event) {
     $('#text-preview').css({
       background: "grey"
     })
  })
  $('#background-menu #blue').on('click', function(event) {
     $('#text-preview').css({
       background: "blue"
     })
  })
  $('#background-menu #green').on('click', function(event) {
     $('#text-preview').css({
       background: "green"
     })
  })
  $('#background-menu #red').on('click', function(event) {
     $('#text-preview').css({
       background: "red"
     })
  })
  $('#background-menu #orange').on('click', function(event) {
     $('#text-preview').css({
       background: "orange"
     })
  })
  $('#background-menu #yellow').on('click', function(event) {
     $('#text-preview').css({
       background: "yellow"
     })
  })
  $('#background-menu #purple').on('click', function(event) {
     $('#text-preview').css({
       background: "purple"
     })
  })
  $('#background-menu #white').on('click', function(event) {
     $('#text-preview').css({
       background: "white"
     })
  })
  $('#named-background-color').on('keyup', function(event) {

    $('#text-preview').css({
      backgroundColor: $(event.currentTarget).val()
    })

  })




})
