console.log('some stuff');
var $ = require('jquery');
$('h1').html('We wildl rock you');


let data = {
  name: 'name',
  age: 30,
  results: ['foo', 'bar'],
  count: 39
}

let {results, count} = data;

console.log( results, count );
