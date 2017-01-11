//practice
for (var i = 0; i < 9; i++){
    console.log(i);
}

//practice 2

var i = 0;
while (i < 9) {
    console.log(i);
    i = i + 1;
}

//challenge 1

var x = 0;
for (var x = 0; x < 100; x++){
    console.log(x)
}

//challenge 2

var y = "#"
for (var y = "#"; y.length < 7; y + "#"){
    console.log(y)
}


//challenge 3

for (var z = 0; z < 100; z++){
    if(z % 3 == 0  && z % 5 == 0){
        console.log('fizzbuzz');
    }
    else if (z % 5 == 0) {
        console.log('fizz');
    }
    else if (z % 3 == 0) {
        console.log('buzz');
    }
    else {
        console.log(z)
    }
}

//challenge 4


