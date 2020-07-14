/**
 * Event loop
 * refer animated : https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
 */


function eventLoop() {
    console.log('script starts');

    setTimeout(() => {
        console.log('timeout logged')
    }, 0);

    Promise.resolve()
        .then(() => {
            console.log('Promise 1 logged');
        })
        .then(() => {
            console.log('Promise 2 logged');
        });

    console.log('script ends');
}

eventLoop();

/**
 * output of the above - based on browser support and race condition
 * script starts
 * script ends
 * Promise 1 logged
 * Promise 2 logged
 * timeout logged
 */



