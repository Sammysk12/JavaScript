let fullName = prompt("Enter your fullname without space: ");

let userName = "@"+fullName;

let num = fullName.length;
userName = userName.concat(num);

alert("Your username is "+ userName)