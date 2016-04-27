// Array for Days!!

// For any methods that we didn't cover, please refer to the Array Documentation.
// Discovering new things is fun and a great way to learn!!

// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!

// ==========================================================================

// 1. Declare a variable whose value is an empty array.
//    Use any method you choose to add at least 4 items to it.

console.log("Question 1");
var hawks = [ ];
hawks.push('toews');
hawks.unshift('keith');
hawks.splice(1, 0, 'panarin', 'hjalmarsson');
console.log(hawks);

// 2. Add an additional item to the beginning of your array.

console.log("Question 2");
hawks.unshift('crawford');
console.log(hawks);

// 3. Remove the second and third items in your array.

console.log("Question 3");
hawks.splice(1,2);
console.log(hawks);

// 4. Add two new items after the second item.

console.log("Question 4");
hawks.splice(1,0,'ladd', 'teravainen');
console.log(hawks);

// 5. Write 'The current length of the array is....' using the .length method

console.log("Question 5");
console.log('The current length of the array is ' + hawks.length + '.');

// Use the following Array for questions 6-11:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'

console.log("Question 6");
things[2] = 'keyboard';
console.log(things);

// 7. Combine all of the elements of the array into a string.
//    (Hint: check out the 'join' method.)

console.log("Question 7");
var thingsString = things.join();
console.log(thingsString);

// 8. Declare a variable called lastItem using .pop() on the things array.
//    Add two new items to lastItem, one at the beginning and one at the end.

console.log("Question 8");
var lastItem = [things.pop()];
lastItem.unshift('potato');
lastItem.push('trash');
console.log(lastItem);

// 9. Create a new Array called itemLast.
//    The items should be the same as lastItem, only in reverse order.

console.log("Question 9");
var itemLast = lastItem.reverse();
console.log(itemLast);

// 10. Remove the first item of itemLast.

console.log("Question 10");
itemLast.shift();
console.log(itemLast);

// 11. Remove all items from itemLast.

console.log("Question 11");
itemLast.splice(0,2);
console.log(itemLast);

// 12. Using the Arrays below, create a single Array
//     called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];

console.log("Question 12");
var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];
var numberPets = firstArray.slice();
numberPets.splice(4, 0, secondArray[0], secondArray[1]);
console.log(numberPets);

// Use the following array for questions 13-16:
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 13. Add two new people after 'Doug'

console.log("Question 13");
people.push('Steve', 'Quimby');
console.log(people);

// 14. Remove everybody except 'Andrea' and 'Ted'

console.log("Question 14");
people.shift(1);
people.splice(1,1);
people.splice(2,3);
console.log(people);

// 15. Add a new person to the beginning of the Array

console.log("Question 15");
people.unshift('Jethro');
console.log(people);

// 16. Arrange the items alphabetically. Store this Array as orderedPeople

console.log("Question 16");
people.sort();
var orderedPeople = people.slice();
console.log(orderedPeople);

// 17. Create an array of arrays with the following three arrays:
var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]

// Goal:
var array4 = [
                ["Fido", "Spot", "Rex", "Sparky"],
                ["Bulldog", "Lab", "Dalmation", "Beagle"],
                ["White", "Black", "Spotted", "Tri-color"]
              ]

console.log("Question 17");
array1.splice(4, 0, array2, array3);
var array4 = array1.slice();
console.log(array4);

// 18. Remove "Sparky" and "White" from the above array of arrays.

console.log("Question 18");
array4.splice(3,1);
array4.splice(8,1);
console.log(array4);

// BONUS 1: Try to arrange the following items from smallest to largest:
var sortingNumbers = [2, 5, 98, 55, 77, 300]
// If it doesn't sort as expected, explain why.

// BONUS 2: Transform array1 into array2 using as few lines of code as you can without directly changing the value of an item (ie array1[0] = item)
var array1 = [2, 'dog', 34, 'Bill', 'plant', 'mug', 17];
// Goal:
var array2 = ['plant', 17, 2, 'Bill', 'dog'];
