import chalk from 'chalk';

import  upperCase from 'upper-case';

const message = 'Hi ,i am -21IT145 ';

const formattedMessage = chalk.bold.red(upperCase.upperCase(message));


console.log(formattedMessage);
