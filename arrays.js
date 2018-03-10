var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
    var myarray = [element, ...array];
     return myarray;
  }
function destructivelyAddElementToBeginningOfArray(array, element){
    array.unshift(element);
    return array;
}
function addElementToEndOfArray(array, element){

    var myarrays = [...array, element]
    return myarrays;
}
function destructivelyAddElementToEndOfArray(array, element){
  
}
function accessElementInArray(array, index){

}
function destructivelyRemoveElementFromBeginningOfArray(array){

}
function removeElementFromBeginningOfArray(array){

}
function destructivelyAddElementToEndOfArray(array){

}
function removeElementFromEndOfArray(array){

}
