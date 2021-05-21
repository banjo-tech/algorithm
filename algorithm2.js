// function checkYuGiOh(n){ 
//  n = value
//  let value = [1, n]
//  if (n is a multiple of 2) {
//      `return Yu .` 
//  }els 
// e if (n is a multiple of 3) {
//      `return Gi .`
//  }else if (n is a multiple of 5){
//      `return Oh .`
//  }
// }

function checkYuGiOh(n) {



    if (isNaN(n)) {
        return `invalid parameter: "${n}"`
    }

    let arr = [...Array(n+1).keys()].slice(1);

    let yu = "yu";
    let gi = "gi";
    let oh = "oh";

    let results = [];

    arr.forEach(function(entry) {

        if (entry % 2 === 0) {
            let final = [];

            final.push(yu);

            if (entry % 3 === 0) {
                final.push(gi);
            }

            if (entry % 5 === 0) {
                final.push(oh)
            }

            results.push(final.join('-'))            
        }

        else if (entry % 3 === 0) {
            let final = [];

            final.push(gi);

            if (entry % 5 === 0) {
                final.push(oh)
            }

            results.push(final.join('-'))
        }

        else if (entry % 5 === 0) {
            let final = [];

            final.push(oh)
            results.push(final.join('-'))
        }


        else{
            results.push(entry)
        }
    });

    // console.log(arr);

    return results;
}


const test1 = checkYuGiOh(5)
const test2 = checkYuGiOh(10)
const test3 = checkYuGiOh("fizzbuzz is meh")

console.log(test2);
console.log(test2);
console.log(test3);