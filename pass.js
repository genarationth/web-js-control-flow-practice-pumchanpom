// conditional ternary operator

let password = '12345699e89385';

let comment = password.length > 12 ? 'Strong' : password.length > 8 ? 'Normal' : 'Poor';
console.log(comment);