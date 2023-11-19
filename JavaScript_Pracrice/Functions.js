//Write a JavaScript program to display the current day and time in the following format. 
function displayDay() {
    let today = new Date();
    let day = today.getDay();
    let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    console.log(`Today is ${dayList[day]}.`)
    console.log(`Current Time is ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}.`);
}
//displayDay();

// Write a JavaScript program to get the current date
function displayDate() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    console.log(`\n${month}/${day}/${year}`);
}
//displayDate();

//Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
function area() {
    let side1 = 5; 
    let side2 = 6; 
    let side3 = 7; 
    let s = (side1 + side2 + side3)/2;
    let area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
    console.log("\n" + area);
}
//area();

// Write a JavaScript function that reverse a number. 
function reverseNumber(a) {
    a = String(a);
    return a.split("").reverse().join("");
}
//console.log("\n" + reverseNumber(123));

// / Write a JavaScript function that checks whether a passed string is palindrome or not? 
function palindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str.slice(-1-i)[0]) {
			console.log("\nEntry is not a palindrome.\n");
            return;
		}
    }
    console.log("\nThe entry is a palindrome.\n");
}
//palindrome("goag");

//Write a JavaScript function that generates all combinations of a string
function combinations(str) {
    for (let i = 0; i < str.length; i++) {
        let appendStr = "";
        for (let j = i; j < str.length; j++) {
            appendStr += str[j];
            console.log(appendStr);
        }
        
    }
}

//combinations("tyson");

//Write a JavaScript function that returns a passed string with letters in alphabetical order.
function alphabeticalOrder(str) {
    if (str.length <= 0) return str;
    return str.split("").sort().join("");
}
//console.log(alphabeticalOrder("ZYXWVU"));

//Write a JavaScript function that accepts a string as a parameter and converts the first letter 
//of each word of the string in upper case.
function capitalFirstLetter(str) {
    str = str.split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }
    str = str.join(" ");
    console.log(str);
}
//capitalFirstLetter("the quick brown fox");

//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function longestWord(str) {
    str = str.split(" ");
    let max = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i].length > max.length) max = str[i];
    }
    console.log(`${max} is the longest word in the sentence.`);
}
//longestWord("Pseudostratified Ciliated Columnar Epithelium is a type of tissue")

//Write a JavaScript function which accepts an argument and returns the type
function type(arg) {
    console.log(typeof(arg));
}
//type(false);

//Write a JavaScript function which returns the n rows by n columns identity matrix.
function identityMatrix(num) {
    let str = "";
    for (let i = 0; i < num; i++) {
        str = "";
        for (let j = 0; j < num; j++) {
            if (j === i) str += "1 ";
            else str += "0 ";
        }
        console.log(str);
    } 
}
//identityMatrix(50);

//Write a JavaScript function which will take an array of numbers stored and 
//find the second lowest and second greatest numbers, respectively.
function secondLowHigh(arr) {
    arr = arr.sort(function(a,b) {return a - b});
    console.log(arr);

    console.log(`Second lowest value is ${arr[1]}.\nSecond Highest value is ${arr[arr.length - 2]}.`);
}
//secondLowHigh([6,7,5,3,6,2,5,78,5,3,1,68]);

//Write a JavaScript function to convert an amount to coins.
function toCoins(num, arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (num / arr[i] >= 1) {
            let x = Math.floor(num / arr[i]);
            for (let j = 0; j < x; j++) {
                arr2.push(arr[i]);
                num = num - arr[i];
            }
        }
    }
    return arr2;
}
//console.log(toCoins(46,[25,10,5,2,1]));

//Write a JavaScript function to extract unique characters from a string.
function uniqueLetters(str) {
    let set = new Set();
    for (let i = 0; i < str.length; i++) {
        set.add(str[i]);
    }
    let newStr = "";
    set.forEach((value) => (newStr += value));
    return newStr;
}
//console.log(uniqueLetters("thequickbrownfoxjumpsoverthelazydog"));

//Write a JavaScript function that accepts two arguments, a string and a letter and the 
//function will count the number of occurrences of the specified letter within the string.
function countLetters(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (letter === str[i]) count++;
    }
    return count;
}
//console.log(countLetters("w3resource.com", 'o'));

//
