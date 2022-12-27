function getArrayParams(...arr) {
  let max = -Infinity;
  let min = Infinity;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if(arr[i] > max) {
      max = arr[i];
}
    
  if(arr[i] < min) {
    min = arr[i];
    }
  }

  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
  
  return sum;
}



function differenceMaxMinWorker(...arr) {
  let max = -Infinity;
  let min = Infinity;
  
for(let i = 0; i < arr.length; i++) {
  if(arr[i] > max) {
      max = arr[i];
}

  if(arr[i] < min) {
      min = arr[i];
  }   
}
  return max - min;
}  

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
    for (let i of arr) { 
      if (i % 2 === 0) {
      sumEvenElement += i; 
    } else if (!i % 2 === 0) {
      sumOddElement += i;
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let countEvenElement = 0;
  let sumEvenElement = 0; 
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        countEvenElement += 1;
        sumEvenElement += arr[i];
  }
} 

  return sumEvenElement / countEvenElement;
  
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const funcResult = func(...arrOfArr[i]);
    if(funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }
  }

  return maxWorkerResult;
}

