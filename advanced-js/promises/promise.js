/**
 * @description
 * Promise status: Pending, Fulfilled, Rejected)
 * Settled -> Fulfilled or Rejected
 * Promise.race -> returns the fastest of the input promise
 */


/**
 * @description
 * Promise.race() -> returns the fastest of the input promise
 */
function resolveAfter(ms, value) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, ms);
    });
}

const promiseA = resolveAfter(1000, "A");
const promiseB = resolveAfter(2000, "B");

const fastestPromise = Promise.race({ promiseA, promiseB })
fastestPromise.then(value => {
    console.log(value);
});


/**
 * @description - Promise.all() -> returns after all the promises are settled
 * For parallel requests -> Takes multiple promises as parameters
 * exmaple 2: The returned promise is fulfilled only if all of the promises are fulfilled
 */

//  example 1
promise
    .then(([films, planets]) => {
        output.innerText =
            '${films.length} films, ' +
            '${planets.length} planets ';
    })
    .catch(error => {
        console.warn(error);
        output.innerText = ":(";
    })
    .finally(() => {
        spinner.remove();
    });

// example 2
Promise.all([
    Promise.resolve(10),
    Promise.reject(new Error('error'))
]);


/**
 * @description - allSettled
 * Promise returned by allSettled is always settled. Even if one of the promise parameter would fail
 * The rejected promise can be determined by using the reason property
 * The resolved promise can be determined by using the value property
*/

Promise.allSettled([
    Promise.resolve(10),
    Promise.reject(new Error('error'))
]);