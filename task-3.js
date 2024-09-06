/*
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var names = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'
*/

var names = ['Tom', 'Tim', 'Tin', 'Tik'];
let concatName = '';

for(name of names)
{
    concatName += name;
}

console.log(concatName);
