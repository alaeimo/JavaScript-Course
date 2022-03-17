"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const displayCountry = function (data, countryClass = "") {
  const html = `
        <article class="country ${countryClass}">
            <img class="country__img" src="${data.flags.svg}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  data.population / 1000000
                ).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${Object.values(
                  data.languages
                ).join(",")}</p>
                <p class="country__row"><span>💰</span>${Object.values(
                  data.currencies
                )
                  .map((curr) => curr.name)
                  .join(",")}</p>
            </div>
        </article>
      `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
};

const displayError = function (message) {
  countriesContainer.insertAdjacentText(
    "beforeend",
    `Something went wrong! ${message}, Try again!`
  );
};
///////////////////////////////////////
// Our First AJAX Call XMLHttpRequest

/*
const getCountryInfo = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `
    <article class="country">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${Object.values(
              data.languages
            ).join(",")}</p>
            <p class="country__row"><span>💰</span>${Object.values(
              data.currencies
            )
              .map((curr) => curr.name)
              .join(",")}</p>
        </div>
    </article>
  `;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryInfo("Switzerland");
getCountryInfo("Germany");
getCountryInfo("USA");
*/
///////////////////////////////////////////////////////////
//Welcome to Callback Hell
/*
const displayCountry = function (data, countryClass = "") {
  const html = `
    <article class="country ${countryClass}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${Object.values(
              data.languages
            ).join(",")}</p>
            <p class="country__row"><span>💰</span>${Object.values(
              data.currencies
            )
              .map((curr) => curr.name)
              .join(",")}</p>
        </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getCountryWithNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    displayCountry(data);
    const [border] = data.borders;
    if (!border) return;
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v3.1/alpha/${border}`);
    request.send();
    request.addEventListener("load", function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);
      displayCountry(data, "neighbour");
    });
  });
};

getCountryWithNeighbour("Switzerland");
*/

////////////////////////////////////////////////////////////
//Consuming Promises

/*
const geteCountryInfo = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
};
*/
/*
const getCountryInfo = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => displayCountry(data[0]));
};
getCountryInfo("Switzerland");
*/
/////////////////////////////////////////////////
// Chaining Promises
/*
const getCountryInfo = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      displayCountry(data[0]);
      const border = data[0].borders[0];
      if (!border) return;
      return fetch(`https://restcountries.com/v3.1/alpha/${border}`);
    })
    .then((response) => response.json())
    .then((data) => displayCountry(data[0], "neighbour"));
};

// getCountryInfo("Switzerland");
getCountryInfo("United Kingdom");
*/
/////////////////////////////////////////////////
//Handling Rejected Promises

// const getCountryInfo = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => response.json() /*, err=>console.log(err)*/)
//     .then((data) => {
//       displayCountry(data[0]);
//       const border = data[0].borders[0];
//       if (!border) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${border}`);
//     })
//     .then((response) => response.json() /*, err=>console.log(err)*/)
//     .then((data) => displayCountry(data[0], "neighbour"))
//     .catch((err) => {
//       console.log(`Something went wrong! ${err.message}`);
//       displayError(err.message);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// btn.addEventListener("click", function () {
//   getCountryInfo("United Kingdom");
// });

////////////////////////////////////////////////////////////
// Throwing Errors Manually

const getJson = function (url, errMsg) {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errMsg}`);
    return response.json();
  });
};
// const getCountryInfo = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//       if (!response.ok) throw new Error("Country not found!");
//       return response.json();
//       })
//     .then((data) => {
//       displayCountry(data[0]);
//       const border = data[0].borders[0];
//       if (!border) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${border}`);
//     })
//     .then((response) => {
//       if (!response.ok) throw new Error("Country not found!");
//        response.json();
//        })
//     .then((data) => displayCountry(data[0], "neighbour"))
//     .catch((err) => {
//       console.log(`Something went wrong! ${err.message}`);
//       displayError(err.message);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };
/*
const getCountryInfo = function (country) {
  getJson(
    `https://restcountries.com/v3.1/name/${country}`,
    "Country not Found!"
  )
    .then((data) => {
      displayCountry(data[0]);
      if (!data[0].borders) throw new Error("No neighbour found!");
      const border = data[0].borders[0];
      return getJson(
        `https://restcountries.com/v3.1/alpha/${border}`,
        "Country not found!"
      );
    })
    .then((data) => displayCountry(data[0], "neighbour"))
    .catch((err) => {
      console.log(`Something went wrong! ${err.message}`);
      displayError(err.message);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener("click", function () {
  getCountryInfo("Australia");
});
*/

/////////////////////////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
/*
const whereAmI = function (lat, lng) {
  fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
  )
    .then((response) => {
      console.log(response);
      if (!response.ok) throw new Error("Location not found!");
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.address.city}, ${data.address.country}`);
      return fetch(
        `https://restcountries.com/v3.1/name/${data.address.country}`
      );
    })
    .then((response) => {
      if (!response.ok) throw new Error("Country not found!");
      return response.json();
    })
    .then((data) => displayCountry(data[0]))
    .catch((err) => console.log(`Something went wrong! ${err.message}`))
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener("click", function () {
  whereAmI("52.508", "13.381");
  whereAmI("19.037", "72.873");
  whereAmI("-33.933", "18.474");
});
*/

//////////////////////////////////////////////////////////
//The Event Loop in Practice
/*
console.log("Start task");
setTimeout(() => console.log("timer ends at 0 s"), 0);
Promise.resolve("Promise 0").then((res) => console.log(res));
Promise.resolve("Promise 1").then((res) => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
});
console.log("End task");
*/

///////////////////////////////////////////////////////////
// Building a Simple Promise
/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery draw is happening!");
  setTimeout(() => {
    if (Math.random() >= 0.5) resolve("You win.");
    else reject(new Error("You lost your money!"));
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
*/

//convert callbacks to promises
/*
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log("1 second passed!");
    return wait(1);
  })
  .then(() => {
    console.log("2 seconds passed!");
    return wait(1);
  })
  .then(() => {
    console.log("3 seconds passed!");
    return wait(1);
  })
  .then(() => {
    console.log("4 seconds passed!");
    return wait(1);
  });

Promise.resolve("abc").then((x) => console.log(x));
Promise.reject(new Error("Problem"))
  .then((x) => console.log(x))
  .catch((x) => console.error(x));
*/

///////////////////////////////////////////////////////
//Promisifying the Geolocation API
/*
const getLocation = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //     (res) => console.log(res),
    //     (err) => console.error(err)
    //   );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = function () {
  getLocation().then((pos) => {
    const { latitude: lat, longitude: lng } = pos.coords;
    console.log(lat, lng);
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    )
      .then((response) => {
        console.log(response);
        if (!response.ok) throw new Error("Location not found!");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(`You are in ${data.address.city}, ${data.address.country}`);
        return fetch(
          `https://restcountries.com/v3.1/name/${data.address.country}`
        );
      })
      .then((response) => {
        if (!response.ok) throw new Error("Country not found!");
        return response.json();
      })
      .then((data) => displayCountry(data[0]))
      .catch((err) => console.log(`Something went wrong! ${err.message}`))
      .finally(() => (countriesContainer.style.opacity = 1));
  });
};

btn.addEventListener("click", whereAmI);
*/

//////////////////////////////////////////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

/*
const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;
    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Error in loading image!"));
    });
  });
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), seconds * 1000);
  });
};

let currentImg;
createImage("./img/img-1.jpg")
  .then((img) => {
    currentImg = img;
    console.log("Image 1 loaded!");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("./img/img-2.jpg");
  })
  .then((img) => {
    currentImg = img;
    console.log("Image 2 loaded!");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
  })
  .catch((err) => console.error(err));
*/

//////////////////////////////////////////////////
//Consuming Promises with AsyncAwait
/*
const getLocation = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //     (res) => console.log(res),
    //     (err) => console.error(err)
    //   );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  const location = await getLocation();
  const { latitude: lat, longitude: lng } = location.coords;
  const respGeo = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
  );
  const dataGeo = await respGeo.json();
  console.log(`You are in ${dataGeo.address.town}, ${dataGeo.address.country}`);
  const resp = await fetch(
    `https://restcountries.com/v3.1/name/${dataGeo.address.country}`
  );
  const data = await resp.json();
  const dataCountry = data.filter((country) =>
    country.name.official
      .toLowerCase()
      .includes(dataGeo.address.country.toLowerCase(), 0)
  );
  displayCountry(dataCountry[0]);
  countriesContainer.style.opacity = 1;
};

btn.addEventListener("click", whereAmI);
*/

///////////////////////////////////////////////////////////
// Error Handling With try...catch
/*
const getLocation = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //     (res) => console.log(res),
    //     (err) => console.error(err)
    //   );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    const location = await getLocation();
    const { latitude: lat, longitude: lng } = location.coords;
    const respGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    );
    if (!respGeo.ok) throw new Error(`Can't get location information!`);
    const dataGeo = await respGeo.json();
    console.log(
      `You are in ${dataGeo.address.town}, ${dataGeo.address.country}`
    );
    const resp = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.address.country}`
    );
    if (!resp.ok) throw new Error(`Can't get country info!`);
    const data = await resp.json();
    const dataCountry = data.filter((country) =>
      country.name.official
        .toLowerCase()
        .includes(dataGeo.address.country.toLowerCase(), 0)
    );
    displayCountry(dataCountry[0]);
    countriesContainer.style.opacity = 1;
  } catch (err) {
    console.log(err);
  }
};

btn.addEventListener("click", whereAmI);
*/

/////////////////////////////////////////////////////
//Returning Values from Async Functions
/*
const getLocation = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //     (res) => console.log(res),
    //     (err) => console.error(err)
    //   );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    const location = await getLocation();
    const { latitude: lat, longitude: lng } = location.coords;
    const respGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    );
    if (!respGeo.ok) throw new Error(`Can't get location information!`);
    const dataGeo = await respGeo.json();
    const resp = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.address.country}`
    );
    if (!resp.ok) throw new Error(`Can't get country info!`);
    const data = await resp.json();
    const dataCountry = data.filter((country) =>
      country.name.official
        .toLowerCase()
        .includes(dataGeo.address.country.toLowerCase(), 0)
    );
    displayCountry(dataCountry[0]);
    countriesContainer.style.opacity = 1;
    return `You are in ${dataGeo.address.town}, ${dataGeo.address.country}`;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

console.log("01: task zero");
// whereAmI()
//   .then((city) => console.log(`02: ${city}`))
//   .catch((err) => console.error(`02: ${err}`))
//   .finally(() => console.log("03: task three"));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`02: ${city}`);
  } catch (err) {
    console.error(`02: ${err}`);
  }
  console.log("03: task three");
})();

*/

////////////////////////////////////////////////////////////
//Running Promises in Parallel
/*
const get3Countries = async function (c1, c2, c3) {
  try {
    const [data1] = await getJson(
      `https://restcountries.com/v3.1/name/${c1}`,
      "Country not found!"
    );
    const [data2] = await getJson(
      `https://restcountries.com/v3.1/name/${c2}`,
      "Country not found!"
    );
    const [data3] = await getJson(
      `https://restcountries.com/v3.1/name/${c3}`,
      "Country not found!"
    );
    console.log(data1.capital, data2.capital, data3.capital);
    const data = await Promise.all([
      getJson(
        `https://restcountries.com/v3.1/name/${c1}`,
        "Country not found!"
      ),
      getJson(
        `https://restcountries.com/v3.1/name/${c2}`,
        "Country not found!"
      ),
      getJson(
        `https://restcountries.com/v3.1/name/${c3}`,
        "Country not found!"
      ),
    ]);

    console.log(data.map((d) => d[0].capital[0]));
  } catch (err) {
    console.error(`Something went wrong! + ${err}`);
  }
};

get3Countries("America", "Ireland", "Germany");
*/

///////////////////////////////////////////////////////////
//Other Promise Combinators race, allSettled and any
/*
//Promise.race
(async function () {
  const res = await Promise.race([
    getJson(`https://restcountries.com/v3.1/name/Italy`, "Country not found!"),
    getJson(
      `https://restcountries.com/v3.1/name/Switzerland`,
      "Country not found!"
    ),
    getJson(`https://restcountries.com/v3.1/name/China`, "Country not found!"),
  ]);
  console.log(res[0]);
})();

////Promise.race
const timeout = function (sec) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => reject(new Error("This task takes too long!")),
      sec * 1000
    );
  });
};
////Promise.race
Promise.race([getJson("https://restcountries.com/v3.1/name/Italy"), timeout(1)])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

////Promise.allSettled
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Error"),
  Promise.resolve("Another success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

////Promise.eny[ES2021]
Promise.any([
  Promise.resolve("Success"),
  Promise.reject("Error"),
  Promise.resolve("Another success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
*/

/////////////////////////////////////////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

//Part 2
const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;
    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Error in loading image!"));
    });
  });
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), seconds * 1000);
  });
};

/*


let currentImg;
const loadNPause = async function () {
  try {
    currentImg = await createImage("./img/img-1.jpg");
    console.log("Image 1 loaded!");
    await wait(2);
    currentImg.style.display = "none";
    currentImg = await createImage("./img/img-2.jpg");
    console.log("Image 2 loaded!");
    await wait(2);
    currentImg.style.display = "none";
  } catch (err) {
    return `Something went wrong! ${err}`;
  }
};

loadNPause().catch((err) => console.error(err));
*/
//Part 2
// 1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
// 2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
// 3. Check out the 'imgs' array in the console! Is it like you expected?
// 4. Use a promise combinator function to actually get the images from the array 😉
// 5. Add the 'paralell' class to all the images (it has some CSS styles).

// TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (imgPath) => await createImage(imgPath));
    console.log(imgs);
    const imgsEl = await Promise.all(imgs);
    imgsEl.forEach((img) => img.classList.add("paralell"));
    console.log(imgsEl);
  } catch (err) {
    return `Something went wrong! ${err}`;
  }
};

loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]).catch((err) =>
  console.error(err)
);
