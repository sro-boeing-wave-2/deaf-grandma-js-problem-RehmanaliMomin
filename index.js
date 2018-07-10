/**
* @fileOverview Contains logic of Deaf Grandma
*/
const isUppercase = require('./isUpperCase');
const getRandomValue = require('./getRandomValue');
const { prompt, print } = require('./prompt-print');

/**
* Put all the code here which would facilitate your conversation
* with the Deaf Grandma.
*
* You can make use of the
* 1. prompt function to get input from the user
* 2. print function to print text on to the console
*/

let count = 0;
const str = 'NO, NOT SINCE ';
print('What do you want to say to Grandma!!');
while (count < 2) {
  const inp1 = prompt();

  if (inp1 === 'BYE') {
    print(str + getRandomValue(1930, 1950));
    count += 1;
  } else if (isUppercase(inp1)) print(str + getRandomValue(1930, 190));

  else print('HUH?! SPEAK UP, SONNY!');
}
