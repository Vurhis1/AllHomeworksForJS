function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((v, i) => v === arr2[i]); 
}


function getUsersNamesInAgeRange(users, gender) {
  return users
    .filter(user => user.gender === gender)
    .map(user => user.age)
    .reduce((summ, userAge, index, array) => userAge / array.length + summ, 0)
}