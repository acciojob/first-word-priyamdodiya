function firstWord(s) {
  // your code here
	let a=s.trim().split(" ");
	for(let i=0;i<=s.length;i++){
		let firstword=a[0];
		return firstword;
	}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
