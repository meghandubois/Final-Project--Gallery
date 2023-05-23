// DONE updated style
// DONE pagination (number sequence)
// DONE a carousel (displays all images on the bottom)
// light box (focused view - use fancybox)
//add captions that will be displayed
// add zoom option when photo is selected

// declare variable `pics` and assign array of strings ↓
var pics = [
  "gallery/cleanpic1.jpeg",
  "gallery/cleanpic2.jpeg",
  "gallery/cleanpic3.jpeg",
  "gallery/cleanpic4.jpeg",
  "gallery/cleanpic5.jpeg",
  "gallery/cleanpic6.jpeg",
];

//declare variable `currPic` and assign value of 0 ↓
var currPic = 0;

//`nextPic` function declaration with `(e)` as parameter
function nextPic(e) {
  //prevent page from refreshing when link is clicked
  e.preventDefault();
  //set conditional statement to check if there are more pics in `pics` array.
  if (currPic < pics.length - 1) {
    //IF condition is true (meaning there are more pics available):
    //THEN the `currPic` variable is incremented by 1, which moves to the next picture in `pics`
    currPic++;
    //IF the condition is false (no more pics available):
  } else {
    //reset the current pic index to 0
    currPic = 0;
    //AND the element with the id "prev" is selected, and its property is made visible.
    document.getElementById("prev").style.display = "block";
  }
  //set the `src` attribute of HTML element with id "mainpic" to the URL of the current
  //pic in `pics` array
  document.mainpic.src = pics[currPic];
  //set text content of HTML element with id "picnum" to a string that represents the
  //current picture number and the total number of pictures
  document.getElementById("picnum").textContent =
    "Picture " + (currPic + 1) + " of " + pics.length;
}

//`prevPic` function declaration with `(e)` as parameter
function prevPic(e) {
  //prevent page from refreshing when link is clicked
  e.preventDefault();
  //check if `currPic` index is greater than  0
  //IF condition is true(there is previous pic available):
  if (currPic > 0) {
    //THEN the `currPic` variable is decremented by 1,
    //which moves to the previous picture in `pics` array
    currPic--;
    //IF the condition is false (no prev picture):
  } else {
    //set current pic index to last image
    currPic = pics.length - 1;
  }
  //THEN the element with id of "prev" is selected,
  //and the element is hidden
  document.getElementById("next").style.display = "block";
  //set the `src` attribute of HTML element with id "mainpic" to the URL
  //of the current pic in `pics` array
  document.mainpic.src = pics[currPic];
  //set text content of HTML element with id "picnum" to a string that represents the
  //current picture number and the total number of pictures
  document.getElementById("picnum").textContent =
    "Picture " + (currPic + 1) + " of " + pics.length;
}

//`selectPic` function declaration with `(index)` as parameter
function selectPic(index) {
  //assign value of the `index` parameter to `currPic` variable.
  //this sets current picture index to the selected index.
  currPic = index;
  //checks if the current picture index is 0 (indicating that the selected picture in the first picture in the `pics` array)
  //IF the condition is true (the selected picture is the first picture):
  if (currPic == 0) {
    //THEN the element with the id "prev" is selected and the element is hidden
    document.getElementById("prev").style.display = "none";
    //checks if the current picture index is equal to the last index of the `pics`
    //array, indicating that the selected picture is the last picture.
    //IF the condition is true (the selected picture is the last picture):
  } else if (currPic == pics.length - 1) {
    //THEN the element with the id "next" is selected and its element is hidden
    document.getElementById("next").style.display = "none";
    //IF none of the previous conditions are true (the selected picture is neither the first nor the last):
  } else {
    //THEN the element with the id "prev" is selected and its element made visible
    document.getElementById("prev").style.display = "block";
    //AND the element with the id "next" is selected and its element made visible
    document.getElementById("next").style.display = "block";
  }
  //set the `src` attribute of HTML element with id "mainpic" to the URL
  //of the current pic in `pics` array
  document.mainpic.src = pics[currPic];
  //set text content of HTML element with id "picnum" to a string that represents the
  //current picture number and the total number of pictures
  document.getElementById("picnum").textContent =
    "Picture " + (currPic + 1) + " of " + pics.length;
}
