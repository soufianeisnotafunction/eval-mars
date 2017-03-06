const palindrome = word => {
  word == word.split("").reverse().join("") && word != ""
    ? console.log(`${word} is a palindrome`)
    : console.log(`${word} is not a palindrome`);
};

let args = process.argv.slice(2);
args.map(palindrome);
