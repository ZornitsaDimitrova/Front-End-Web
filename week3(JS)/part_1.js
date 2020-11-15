let A = [10,5,13,18,51];

function print(array)
{
    for(Element of array){
       console.log(Element);
    }
}

console.log(print(A));

function double(array){
    return array.map(x => x * 2);
}

let B = double(A);
console.log(B);

function evens(array){
    return array.filter(x => x % 2 == 0);
}

console.log(evens(A));

function lowerThan10(array){
    for(element of array){
        if(element < 10) return true;
    }
    return false;
}

console.log(lowerThan10(A));
console.log(lowerThan10(B));

function multipleOf3(array){
    let multiples = array.filter(x => x % 3 == 0);
    return multiples;
}

let C = multipleOf3(A);
console.log(C);

function sum(array){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.reduce(reducer);
}

console.log(sum(A));

function lastTwoElements(array){
    let lastTwo = A.slice(A.length - 2,A.length);
    return lastTwo;
}

console.log(lastTwoElements(A));

