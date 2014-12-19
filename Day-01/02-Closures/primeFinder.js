//create a function that checks if the given number is a prime numer or not.

isPrime(100) // runs the algorithm
isPrime(99)  // runs the algorithm
isPrime(100) // returns from the cache
isPrime(99)  // returns from the cache

// make sure that the "cache"  is "private"

function getPrimeFinder(){
	var cache = {};
	function checkPrime(n){
		if (n <= 3) return true;
		for(var i=2;i<=(n/2);n++)
			if (n % i === 0) return false;
		return true;
	}
	return function(n){
		if (typeof cache[n] !== "undefined"){
			console.log("From cache..");
			return cache[n];
		}
		cache[n] = checkPrime(n);
		console.log("Juz processed..");
		return cache[n];
	}
}

var isPrime = getPrimeFinder();
isPrime(100);
