// Asynchronous fns dont need the javascript thread, they are long running tasks and off loaded to other CPU cores. 
// They will start running and process but will not stop the next functions to run until this stops processed
// Generally javascript functions are single threaded functions which run on a single core sequentially
// Asynchronous will parallelize the tasks that means they can run on parallel cores where your code need not run sequentially, asynchronous function can run as much as time it requires mean while other functions will return their output which is controlled by single threaded javascript and then async functions's output will be returned

function printToScreen() {
  console.log('hello world');
}

setTimeout(printToScreen, 1 * 1000);
// printToScreen can wait 1 sec while the below code runs and doesn't wait for printToScreen run first


let counter = 0;
for (let i = 0; i < 10000000 / 2; i++) {
  counter = counter + i;
} // This code is very expensive as it takes very long time to run

console.log(counter);