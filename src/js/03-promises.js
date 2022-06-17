/*
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
*/

/*
const makeOrder = dish => {
  const DELAY = 1000;

  return new Promise((resolve, reject) => {
    const passed = Math.random() > 0.5;
    
    setTimeout(() => {
      if (passed) {
        resolve(`вот ваш заказ: ${dish}`);
      };

      reject('извините, закончились продукты');
    }, DELAY);
  });
}

makeOrder('пирожок')
  .then(onMakeOrderSuccess)
  .catch(onMakeOrderError);
*/
/*
const makeOrder = dish => {
  return Promise.resolve(`вот ваш заказ: ${dish}`);
}

makeOrder('пирожок').then(onMakeOrderSuccess);

function onMakeOrderSuccess(result) {
  console.log('onMakeOrderSuccess');
  console.log(result);
}

function onMakeOrderError(error) {
  console.log('onMakeOrderError');
  console.log(error);
}
*/

// https://pokeapi.co/
// fetch('https://pokeapi.co/api/v2/pokemon/1')
//   .then(r => r.json())
//   .then(pokemon => {
//     console.log('блок then');
//     console.log(pokemon);
//   })
//   .catch(error => {
//     console.log('блок catch');
//     console.log(error);
//   });

/*
const fetchPokemonById = id => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(r => r.json());
};

fetchPokemonById(1)
  .then(onFetchSuccess)
  .catch(onFetchError);

function onFetchSuccess(pokemon) {
  console.log('onFetchSuccess');
  console.log(pokemon);
}

function onFetchError(error) {
  console.log('onFetchError');
  console.log(error);
}
*/
const makePromise = () => {
  return new Promise((resolve, reject) => {
    const isPassed = Math.random() > 0.5;

    setTimeout(() => {
      if (isPassed) {
        resolve('Куку это resolve')
      };

      reject('все пропало это reject');
    }, 1000);
  });
};

makePromise()
  .then(result => console.log(result))
  .catch(error => console.log(error));