const guide = ['a', 'e', 'i', 'o', 'u'];

let userPosition = 0;

let div = document.querySelector('div');

// For each letter
guide.forEach((letter, i) => {
	// Create a span element
  let el = document.createElement('span');
  
  // give element a class name
  el.className = i;
  
  // Append letter to span element
  el.innerHTML += letter;

  // Stick span in div
  div.appendChild(el);
});
	

let keyListener = (e) => {

	const code = e.keyCode || e.which,
  			str = String.fromCharCode(code),
        currentChar = guide[userPosition],
        el = document.getElementsByClassName(userPosition)[0];
  
  console.log(el);
  if (str === currentChar) {
    el.style.color = '#e5e5e5'
    userPosition++
  } else {
  	el.style.color = 'red'
  }
}

document.addEventListener('keypress', keyListener);