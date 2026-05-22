//Exercices Truthy / Falsy

// Expression 1
true && !false; //true

// Expression 2
false || (true && true); //true

// Expression 3
!(5 > 3) && 4 < 8; //false

// Expression 4
10 == "10" && 10 === "10"; //false

// Expression 5
"Pomme" !== "pomme" || false; //true

// Expression 6
!true && !false; //false

// Expression 7
(8 >= 8) && (2 <= 1); //false

// Expression 8
!("" == false); //false

// Expression 9
0 === false || 1 == true; //true

// Expression 10
(10 % 3 === 1) && true; //true

// Expression 11
!(100 !== "100"); //false

// Expression 12
(5 * 2 == 11) || ("abc".length === 4); //false

// Expression 13
"a" + "b" === "ba" || 4 / 2 < 1; //false

// Expression 14
!(!(4 === 4)); //true

// Expression 15
(null == undefined) && false; //false

// Expression 16
(3 ** 2 === 9) && !(5 == 5); //false

// Expression 17
(10 - 5 > 4) || (10 - 5 < 6); //true

// Expression 18
"Test".toLowerCase() === "test" && 1 !== 2; //true

// Expression 19
(Math.random() > 2) && true; //false

// Expression 20
false || false || !false; //true