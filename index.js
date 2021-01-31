function findMinAndRemove(array){
  let minIndex = 0;
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[minIndex]) {
      minIndex = i
    }
  }
  
  return array.splice(minIndex, 1)[0]
}

function insertionSort(array){
  
}
