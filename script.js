// Declare global counter variable
//part1
let counter = 0;

// Define recursive function
function incrementAndCall() {
  try {
    // Increment the counter
    counter++;

    // Log the current counter value
    console.log("Counter value:", counter);

    // Call the function recursively
    incrementAndCall();
  } catch (error) {
    // Log the error and the counter value in the catch block
    console.error("Error:", error.message);
    console.error("Counter value at the time of error:", counter);
  }
}

// Initial function call
incrementAndCall();


  //Part 2 Trampoline

  // Recursive function to flatten an array
function recursiveFlatten(arr) {
    const flattened = [];
  
    function flattenHelper(arr) {
      for (const element of arr) {
        if (Array.isArray(element)) {
          flattenHelper(element);
        } else {
          flattened.push(element);
        }
      }
    }
  
    flattenHelper(arr);
    return flattened;
  }
  
  // Trampoline function to handle recursion
  function trampoline(fn) {
    return function (...args) {
      let result = fn(...args);
      while (typeof result === 'function') {
        result = result();
      }
      return result;
    };
  }
  
  // Example usage
  const nestedArray = [1, [2, [3, 4, [5, 6]], 7], 8];
  
  // Use trampoline with the recursive flatten function
  const trampolineFlatten = trampoline(recursiveFlatten);
  const flattenedArray = trampolineFlatten(nestedArray);
  
  console.log(flattenedArray);
  

  //Part3

  const primeNumbersContainer = document.getElementById('primeNumbersContainer');

  // Function to check if a number is prime
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // Function to add prime numbers up to n to the HTML element
  function addPrimeNumbersToElement(n) {
    primeNumbersContainer.innerHTML = ''; // Clear previous content

    for (let i = 2; i <= n; i++) {
      // Using setTimeout to add numbers to the event queue
      setTimeout(() => {
        if (isPrime(i)) {
          primeNumbersContainer.innerHTML += `<p>${i}</p>`;
        }
      }, 0);
    }

    // Alert when calculation is complete
    setTimeout(() => {
      alert('Prime number calculation is complete!');
    }, 0);
  }

  // Example usage with n = 20
  addPrimeNumbersToElement(20);
  