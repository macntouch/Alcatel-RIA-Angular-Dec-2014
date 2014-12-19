//Create a function "getSpinner" that returns an object

var spinner = getSpinner();

//The object "spinner"  is expected to exhibit the followin behavior

spinner.up() // => 1
spinner.up() // => 2
spinner.up() // => 3
spinner.up() // => 4

spinner.down() // => 3
spinner.down() // => 2
spinner.down() // => 1
spinner.down() // => 0
spinner.down() // => -1

//make sure the variable used to track the value is "private"

