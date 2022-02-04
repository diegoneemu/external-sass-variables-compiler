const sass = require('sass');
const request = require('request');
const fs = require('fs');

const writeStream = fs.createWriteStream('./sass/_variables.scss');
const variables = 'https://alessandrogoncalves.com/_variables.scss';

request(variables).pipe(writeStream);

const result  = sass.compile('./styles.scss', {style: 'compressed', verbose: true});
console.log(result.css);