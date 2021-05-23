'use strict'

const autocannon = require('autocannon')

function tt(t,a) {
     console.log(t,a)
    console.log(obj)
}
let obj = {
    'First':0,
    'Second':0,
    'Third':0
}
function onResponseFunction(status,body,context, headers) {
    obj[body]++;
    //console.log(body);
}


const instance = autocannon({
  url: 'http://localhost:8080?delay=5',
  connections: 200, //default
  pipelining: 30, // default
  duration: 60, // default
  requests: [
      {
        onResponse: onResponseFunction
      }
  ]
}, tt)

autocannon.track(instance, {renderProgressBar: true, renderResultsTable: true, renderLatencyTable: true})