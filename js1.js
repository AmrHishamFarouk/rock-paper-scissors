const name1 = "amr";
const try3 = `i am ${name1}`;
console.log(try3);

const newline = `amr is me 
and donot ask more`
console.log(newline)

const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

function add7(num){
    ans = num +7 ;
    return ans;
}
console.log(add7(5))

let multiply = (a,b) => a*b;
console.log(multiply(2,4))

function capitalize(word){
    let firstletter = word.slice(0,1)
    let FLcap = firstletter.toUpperCase()
    let rest = word.slice(1,word.length)
    let result = FLcap.concat(rest);
    return result;
}
console.log(capitalize('amrhiesham'))

