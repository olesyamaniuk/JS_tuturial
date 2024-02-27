/*
 * Метод window.setTimeout(callback, delay, args)
 */

// console.log("До виклику setTimeout");

// setTimeout(
//   () => console.log("1 - Всередині зворотного виклику для setTimeout"),
//   2000
// )

// setTimeout(
//   () => console.log("2 - Всередині зворотного виклику для setTimeout"),
//   5000
// )

// console.log("Після виклику setTimeout");

/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */
//  

/**
 * Можливість передати параметри для колбеку
 */
// const id = setTimeout((name, country) => {
//   console.log(`Hello, my name is ${name}, I'm from ${country}`);
// }, 1000, 'Alex', 'Ukraine');
// ----------------------------------------------------------------------------------------------
/*
 * Метод setInterval(callback, delay, args)
 */

// const logger = (time) => {
//   console.log(`Лог кожні ${time} мс - ${Date.now()}`);
// };

// console.log("До виклику setInterval");

// setInterval(
//   logger,
//   2000,
//   2000
// )

// console.log("Після виклику setInterval");

/*
 * Очищення інтервалу за допомогою clearInterval(intervalId)
 */

// const intervalId = setInterval(logger, 2000, 2000);

// setTimeout(
//   () => clearInterval(intervalId),
//   10000
// )
// --------------------------------------------------------------------------------------------------------------------

/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */

// const NOTIFICATION_DELAY = 5000;
// let timeoutId = null;
// const notification = document.querySelector(".js-alert");

// /*
//  * Функції
//  */
// function onNotificationClick() {
//   hideNotification()
//   clearTimeout(timeoutId);
// }


// notification.addEventListener('click', onNotificationClick)

// function showNotification() {

//   notification.classList.add('is-visible')

//   console.log(
//     "Закриваємо сповіщення автоматично, щоб воно не залишалося відкритим"
//   );

//   timeoutId = setTimeout(
//     hideNotification,
//     NOTIFICATION_DELAY
//   )

// }

// function hideNotification() {
//   notification.classList.remove('is-visible')
// }

// ---------------------------------------------------------------------------------------------------------------------

/*
 - Створення
 - Unix-час
 - Методи
 - Різниця часу
 - Date.now()
*/

// const date1 = Date.now();
// console.log("date1", date1);


// setTimeout(
//     () => {
//         const date2 = Date.now();

//         const dif = date2 - date1
//        console.log(dif / 1000 / 60)
//     },
//     5000
// )

// const date = new Date('2022-5-22');
// console.log(date);

const date = new Date("March 16, 2030 14:25:00");
console.log("Date: ", date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// Повертає день місяця від 1 до 31
console.log("Day: ", date.getDate()); // 16

// Повертає день тижня від 0 до 6, починається з неділі
console.log("Day of the week: ", date.getDay()); // 6

// Повертає місяць від 0 до 11
console.log("Month: ", date.getMonth()); // 2

// Повертає рік з 4 цифр
console.log("Full year: ", date.getFullYear()); // 2030

// Повертає години
console.log("Hours: ", date.getHours()); // 14

// Повертає хвилини
console.log("Minutes: ", date.getMinutes()); // 25

// Повертає секунди
console.log("Seconds: ", date.getSeconds()); // 0

// Повертає мілісекунди
console.log("Milliseconds: ", date.getMilliseconds()); // 0


date.setMinutes(50); 
console.log(date); // "Sat Mar 16 2030 14:50:00 GMT+0200"

date.setFullYear(2040);
console.log(date); // "Fri Mar 16 2040 14:50:00 GMT+0200"

date.setMonth(4); 
console.log(date); // "Wed May 16 2040 14:50:00 GMT+0300"

// -----------------------------------------------------------------------------------------------------------------

/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

// class Timer {
//     constructor({onTick}) {
//       this.onTick = onTick;
//       this.interval = null;
  
//     }
  
//     start() {
//       const startTime = Date.now();
  
//       this.interval = setInterval(() => {
//         const currentTime = Date.now();
//         const delta = currentTime - startTime;
//         const time = this.getTimeComponents(delta);
  
//         this.onTick(time);
  
//       }, 1000)
  
//     }
  
//     stop() {
//       clearInterval(this.interval);
//       const time = this.getTimeComponents(0);
//       this.onTick(time)
//     }
  
//     /*
//      * - Приймає час в мілісекундах
//      * - Вираховує скільки в них вміщається годин/хвилин/секунд
//      * - Повертає об'єкт з властивостями hours, mins, secs
//      * - Адська копіпаста з stackoverflow 💩
//      */
//     getTimeComponents(time) {
//       const hours = this.pad(
//         Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//       );
//       const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//       const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  
//       return { hours, mins, secs };
//     }
  
//     /*
//      * Приймає число, перетворює його в рядок і додає в початок 0, якщо число менше 2-х знаків
//      */
//     pad(value) {
//       return String(value).padStart(2, "0");
//     }
//   }
  
//   const startBtn = document.querySelector("button[data-action-start]");
//   const stopBtn = document.querySelector("button[data-action-stop]");
//   const clockface = document.querySelector(".js-clockface");
  
//   const timer = new Timer({
//     onTick: updateClockface,
//   });
  
//   startBtn.addEventListener("click", timer.start.bind(timer));
//   stopBtn.addEventListener("click", timer.stop.bind(timer));
  
//   /*
//    * - Приймає час в мілісекундах
//    * - Вираховує скільки в них вміщається годин/хвилин/секунд
//    * - Рисує інтерфейс
//    */
//   function updateClockface({ hours, mins, secs }) {
//     clockface.textContent = `${hours}:${mins}:${secs}`;
//   }
// //   --------------------------------------------------------------------------------------------------------

/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

// проміс - це обʼєкт, який представляє результат асинхронної операції (мікрозадачі)

/*
* Проміс має 3 стани:
- Pending: коли проміс ще не виконався
- Fullfilled: коли проміс виконався успішно
- Rejected: коли проміс виконався не успішно


Ще виділяють таке поняття як Settled (завершений), це не є станом прмоісу, але це поняття використовують для того, щоб описати два стани: або Fullfilled або Rejected
*/

// const promise = new Promise((resolve, reject) => {
//     // resolve - фукнція, яка переводить проміс у стан Fullfilled
//     // reject - фукнція, яка переводить проміс у стан Rejected
  
//     // створення промісу, тобто, наша фукнція executor є абсолютно синхронною операцією
  
//     const canFullfill = Math.random() > 0.5;
  
//     setTimeout(() => {
//       if (canFullfill) {
//         resolve(
//           "Проміс виконався успішно, із результатом (виконаний, fulfilled)"
//         );
//       }
  
//       reject("Проміс виконався з помилкою (відхилений, rejected)");
//     }, 1000);
//   });
  
  //.then((res) => ...) - оброблює успішне виконання промісу, завжди повертає проміс, якщо у нас йде ланцюг з методів then, то кожен наступний then отримає в якості результату те, що повернув попердній
  
  // .catch((err) => ...) - оброблює неуспішне виконання промісу (тобто, стан rejected)
  
  // promise
  //   .then((res) => {
  //     console.log(`Успішна обробка методом then - ${res}`);
  //   })
  //   .catch((err) => {
  //     console.log(`Обробка неуспішного виконання методом catch - ${err}`);
  //   })
  //   .finally(() => {
  //     console.log(
  //       "Блок finally виконається в не залежності від того, який стан у промісу!"
  //     );
  //   });
  
  /**
   * Ланцюги промісів
   * - декілька послідовних then
   * - then повертає проміс
   */
  
//   promise
//     .then((res) => {
//       console.log(`Успішна обробка методом then - ${res}`);
//       return 5;
//     })
//     .then((res) => {
//       console.log(`2й then - ${res}`);
//       return 10;
//     })
//     .then((res) => {
//       console.log(`3й then - ${res}`);
//       return 15;
//     })
//     .then((res) => {
//       console.log(`4й then - ${res}`);
//     })
//     .catch((err) => {
//       console.log(`Обробка неуспішного виконання методом catch - ${err}`);
//     })
//     .finally(() => {
//       console.log(
//         "Блок finally виконається в не залежності від того, який стан у промісу!"
//       );
//     });

// --------------------------------------------------------------------------------------------------------------
    /*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

// const makeOrder = (dish) => {
//   return new Promise((res, rej) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         res(`✅ Ваше замовлення: ${dish}`);
//       }

//       rej("❌ Упс, у нас закінчилися продукти");
//     }, 1000);
//   });
// };

// makeOrder("пиріжок")
//   .then((result) => {
//     console.log("onMakeOrderSuccess");
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("onMakeOrderError");
//     console.log(error);
//   });

/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve() - статичний метод який на ходу створить проміс у стані Fullfilled
 * - Promise.reject() - статичний метод який на ходу ствроить проміс у стані Rejected
 */

// const prepareDish = (dish) => {
//     const passed = Math.random() > 0.5;
  
//     return passed
//       ? Promise.resolve(`✅ Ваше замовлення: ${dish}`)
//       : Promise.reject("❌ Упс, у нас закінчилися продукти");
//   };
  
//   prepareDish("пиріжок")
//     .then((result) => {
//       console.log("onMakeOrderSuccess");
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log("onMakeOrderError");
//       console.log(error);
//     });
// ----------------------------------------------------------------------------------------------------------------
/**
 * Напиши програмне забезпечення для ігрового автомата.
 * Для вирішення завдання використай готову розмітку HTML та базову стилізацію.
 *
 * Після натиснення на кнопку "Start game"
 * в кожному віконці по черзі має з'являтись
 * смайлик з затримкою в 1 секунду ('🤑' або '👿')
 *
 * Під час обробки кожного віконця створи масив з Promis-ами
 * в якому кожен з них буде відповідати за своє віконце,
 * після чого оброби даний масив за допомогою методу Promise.allSettled
 *
 * Після того як всі віконця були заповнені потрібно
 * щоб скріпт автоматично визначав чи гравець переміг, чи ні.
 * Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
 *
 * В поле result виводить повідомлення про статус гри ('Winner' або 'Loser')
 *
 * Після повторного натискання на кнопку "Start game"
 * поле має очищатись, а гра починатись з початку.
 */

const startBtn = document.querySelector(".start-btn");
const container = document.querySelector(".container");
const result = document.querySelector(".result");

/*

1. Вішаємо обробник подій по кліку на кнопку старт
1.1. створюємо масив всіх квадратиків ([...container.children])
1.2. викликаємо метод map для перебору масиву квадратиків з ціллю перетворити його на масив з промісами
1.2.1. створюємо проміс у якому рандомно задаємо смайлик

1.3. викликаємо статичний метод Promise.allSettled, чекаємо виконання всіх промісів і оброблюємо результат в методі then
1.3.1. перебираємо масив промісів та з затримкою в 1 секунду задаємо текстКонтент кожному квадратику у відповідності до смайлику
1.3.2. перевіряємо переможця: якщо кожен проміс з масиву має один й тей сами стан - то ми перемогли (якщо всі fullfilled або якщо всі rejected) і відповідно показуємо текст на екрані через текстКонент 
*/

startBtn.addEventListener("click", handleStart);

function handleStart() {
  result.textContent = "";

  const promises = [...container.children].map((item) => {
    return new Promise((res, rej) =>
      Math.random() > 0.5 ? res("🤑") : rej("👿")
    );

    // return Math.random() > 0.5 ? Promise.resolve("🤑") : Promise.reject("👿");
  });

  Promise.allSettled(promises).then((items) => {
    const isWinner =
      items.every(({ status }) => status === "fulfilled") ||
      items.every(({ status }) => status === "rejected");

    items.forEach((item, i) => {
      container.children[i].textContent = ""; // перед тим як показати нові смайли - очищуємо всі квадратики
      setTimeout(() => {
        container.children[i].textContent = item.value || item.reason;

        // перевірка, що це сеттаймаут для останнього смайлику
        if (i === items.length - 1) {
          result.textContent = isWinner ? "Winner" : "Loser";
        }
      }, 1000 * (i + 1));
    });
  });
}