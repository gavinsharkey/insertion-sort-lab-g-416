function findMinAndRemove(array){
  let minIndex = 0
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[minIndex]) {
      minIndex = i
    }
  }
  
  return array.splice(minIndex, 1)
}

function insertionSort(array){

}

let array = [1, 4, 7, 9]
console.log(findMinAndRemove(array))
console.log(array)
