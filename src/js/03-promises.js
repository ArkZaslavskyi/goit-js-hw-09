import {Notify} from 'notiflix';

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  
  const { delay, step, amount } = e.target.elements;

  let delay_count = Number(delay.value);

  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(i, delay_count)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
       })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    
    delay_count += Number(step.value);
  };
  
  e.target.reset();
};


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    }, delay);
     });

}
















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

/*
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
  */

// const horses = [
//   'Secretariat',
//   'Eclipse',
//   'West Australian',
//   'Flying fox',
//   'Seabisquit',
// ];

// console.log('%c Заезд начался, ставки не принимаются!',
//             'color: brown; font-size: 14px;',
// );

// const promises = horses.map(run); 
// console.log(promises);

// Promise.race(promises).then(({ horse, time }) => {
//   console.log(
//     `%c Победил ${horse}, финишировав за ${time} времени`,
//     'color: green; font-size: 14px;',
//   );
// });


// // run('Mango')
// //   .then(x => console.log(x));


// function run(horse) {
//   return new Promise((resolve) => {
//     const time = getRandomTime(2000, 3500);

//     setTimeout(() => {
//       resolve({ horse, time });
//     }, time);
//   });
// };


// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };



// console.log('%c Заезд окончен, принимаются ставки',
//             'color: blue; font-size: 14px;',
// );

