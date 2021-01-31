function findMinAndRemove(array){
  let minIndex = 0;
  let min;
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[minIndex]) {
      minIndex = i;
      min = array[1];
    }
  }
  
  array.splice(minIndex, 1);
  return min;
}

function insertionSort(array){

}

let array = [1, 4, 7, 9]
console.log(findMinAndRemove(array))
console.log(array)
