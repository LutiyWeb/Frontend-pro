const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, item) {
    array.splice(item, 1)
}
removeElement(array, 0);
console.log(array);
