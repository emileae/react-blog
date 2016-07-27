var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log("Current timestamp", now.unix());

var timestamp = 1467750778;
var currentMoment = moment.unix(timestamp);

console.log('current moment: ', currentMoment.format('D MMM YY @ h:mm a'));

console.log('different format moment: ', currentMoment.format('MMMM Do YYYY @ HH:MM A'));
