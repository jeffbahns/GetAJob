function fizzBuzzResearchSquare(count) {
    for ( var i = 1; i <= count; i++) { 
        if ( i % 3===0 && i % 5===0) { console.log("Research_Square"); } 
        else if (i % 3 === 0) { console.log("Research"); }
        else if (i % 5 === 0) {console.log("Square"); }
        else { console.log(i); }
    }
}
fizzBuzzResearchSquare(100);