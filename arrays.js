var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){

    return [element, ...array];
  }
function destructivelyAddElementToBeginningOfArray(array, element){
    array.unshift(element);
    return array;
}
function addElementToEndOfArray(array, element){
    return [...array, element]
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
