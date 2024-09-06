/*
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
*/

const statement = 'I am a hard working person';
const splitStatement = statement.split(' ');
const reversedSplit = [];
let reversedStatement = '';

for(const word of splitStatement)
{
    reversedSplit.unshift(word);
}

for(const Word of reversedSplit)
{
    reversedStatement += Word + ' ';
}

console.log(reversedStatement);