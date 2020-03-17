//Javascript 6

//Contructor review
//Write a constructor function called Person that takes in name, age, and birthday properties.

//Attach a prototype method to the Person constructor called introduceSelf.  It should return a string with the person's name and age.

//Create two new people and have them introduce themselves.

//Classes
//Create a class called Aircraft that takes in name and range, a string and number respectively.  Also initialize a property called milesFlown and set it to 0.  Attach a prototype method called fly that add the range of the aircraft to the milesFlown.  Then return the updated object.

//Use your class to create a new Aircraft and invoke fly.

//Create a new class called Plane that extends aircraft.  It should also take in passengerCount and initialize a passengersFlown property at 0 and a destinations property as an empty array.  Modify the exising fly method to take in a destination parameter, It should add the passengerCount to the passengersFlown and push the destination to the destinations array.  It should  return a string stating 'name has flown passengersFlown passengers a total of milesFlown miles.  It has gone to destinations'.  Make sure all previous functionality of fly is maintained.

//Use yoru class to create a new Airplane and make it fly somewhere!

//Create a new class called PrivateJet that extends Plane.  It should also take in an owner property. Modify the existing fly method to instead return 'name has flown owner and passengersFlown friends milesFlown miles.  It has gone to destinations.  Make sure all previous functionality of fly is maintained.

//Use your class to create a new PrivateJet and have it fly wherever you want.

// Closures

//Write a function called secretNumber.  This function should initialize a number variable at 0 and return a function that increments the number variable.

//Use your function to initialize a new instance of num and invoke the returned function to increment it.

//Write a function called someonesNumber that takes in a name paramter.  Initialize a number variable at 0 and return a function that will return the string `name's number is`

//Invoke someonesNumber to create a new instance of num and then invoke that returned function to change the number.  Repeat this process to show that there are two separate instances of num.

//Module Pattern

//Use the module pattern to create a calculator.  It should have functionality to add, subtract, multiply, divide, and clear.
