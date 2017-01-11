//Practice
function shouldwepartytonight(dayoftheweek) {
    if (dayoftheweek == "Monday" || dayoftheweek =="Tuesday"|| dayoftheweek == "Wednesday") {
        console.log ("no way you should be coding");
}
    else if (dayoftheweek == "Thursday") {
        console.log("depends is there is special on wings?");
}
    else if (dayoftheweek == "Friday") {
        console.log("yeah I guess if you need a break");
}
    else if (dayoftheweek == "Saturday" || dayoftheweek == "Sunday") {
        console.log ("I don't know, seems like a good day for Javascript");
}
    else {
        console.log ("Thats not a day");
    }
};
// Practice 2

function givemetheprice(item) {
    switch (item) {
        case "oranges":
        console.log("oranges are $0.59 a lb.");
        break;
        case "bananas":
        console.log("bananas are $0.39 a lb.");
        break;
        case "cherries":
        console.log("cherries are $0.48 a lb.");
        break;
        case "mangoes":
        case "papayas":
        console.log("mangoes and papayas are $0.35 a lb.");
        break;
        default:
        console.log ("sorry we are out of "+ item +".");
    }
};

//magic eightball challenge

var numberofreplys = 2;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys + 1);
    var reply = 
        if (numberofreplys == 3 || numberofreplys == 5) {
            console.log("Hello");
        }
        else if (numberofreplys == 2 || numberofreplys == 4) {
            console.log("World");
        }
        else (numberofreplys == 1 || numberofreplys == 9) {
            console.log("Hello World")
        }

    console.log(choice);
}

ask();

