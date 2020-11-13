/*
 Name: Tony Dam
 Email: tony_dam@student.uml.edu
 Affiliation: Junior Student at UMass Lowell in COMP.4610-201
              91.61 GUI Programming I
Date created: 10/26/20

Sources from: W3Schools, Stackoverflow, Youtube,
and https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient

Website was created for personal use. Creates a dynamic interactive
table for users to generate a multiplication table of any length of
their choosing.
Copyright (c) October 26th, 2020 Tony Dam. All rights reserved.
May be freely copied or excerpted for educational purposes with credit to
author.
*/

// NOTE: I have no idea how to check for no input from user
// through this method
$(document).ready(function () {
  $("input").keypress(function (input) {
     //if the letter is not digit then display error and don't type anything
     if (input.which != 8 && input.which != 0 && 
      (input.which < 48 || input.which > 57)) {
        //display error message
        $("#errmsg").html("Numeric inputs only").show();
        return false;
    }
    if (!(input.which != 8 && input.which != 0 && 
      (input.which < 48 || input.which > 57))) {
      //display error message
      $("#errmsg").html("").show();
      return true;
  }
   });
});

function table() {
var minCol = +document.getElementById("input1").value;
var maxCol = +document.getElementById("input2").value;
var minRow = +document.getElementById("input3").value;
var maxRow = +document.getElementById("input4").value;
var error = '';
var counter = 0;
var rows = '';
//var columns = '<td>';

/*Checks if there is more than one empty input */
if (minCol == "" || maxCol == "" || minRow == "" || maxRow == "") {
  error += "(!) Missing inputs! Please input values!";
  document.getElementById("Updates").innerHTML = error; // prints error message
  rows = '';
  document.getElementById("multiTable").innerHTML = rows; //empty table
  return false;
}

// checks if user entered a greater max column than min column input
if (minCol > maxCol)
{
  counter += 1; //used for formatting between two errors
  error += "(!) Swapped column's min and max values";
  minCol = maxCol; //makes min = to max
  maxCol = +document.getElementById("input1").value; //makes max = to min
}
// checks if user entered a greater max row than min row input
if (minRow > maxRow)
{
  //counter is used to format whether if the previous if statement was
  //used
  if (counter >= 1) { //uses line break if previous if was used
  error += "</br>(!) Swapped row's min and max values";
  }
  else { //no line break if previous if wasn't used
      error += "(!) Swapped row's min and max values";
  }
  minRow = maxRow; //makes minRow = to max
  maxRow =  +document.getElementById("input3").value; //max row is = to min
}

//prints errors that were found
document.getElementById("Updates").innerHTML = error;

//checks if user has inputs
if (!(minCol == "") || !(maxCol == "") || !(minRow == "") || !(maxRow == "")) {
  rows += '<td>' + '' + '</td>'; //empty top left grid box

  //creates first row of numbers
  for (var i = minRow; i <= maxRow; i++){
    rows += '<td>' + i + '</td>';
  }
  rows += '</tr>';

  //creates first column of numbers
  for(var i= minCol; i <= maxCol; i++){
    rows += '<tr>';
    rows += '<td>' + i + '</td>';

    // the multiplication between the numbers
  for(var j = minRow; j <= maxRow; j++){
      rows += '<td>' + i*j + '</td>';
    }
    rows += '</tr>';
  }
  //outputs table
  document.getElementById("multiTable").innerHTML = rows;
}
}
