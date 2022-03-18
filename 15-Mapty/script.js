"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

class Workout {
  date = new Date();
  id = (Date.now() + " ").slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords; //[lat,lng]
    this.distance = distance; //Km
    this.duration = duration; //min
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace() {
    //cadence = duration(min)/distance (km)
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }
  calcSpeed() {
    //speed = distance(km) / duration (h)
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

class App {
  #map;
  #mapEvent;
  #workouts = [];
  constructor() {
    this._getPosition();
    form.addEventListener("submit", this._newWorkout.bind(this));
    inputType.addEventListener("change", this._toggleElevatinField);
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), () =>
        console.log(`Couldn't access to your current location!`)
      );
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];
    this.#map = L.map("map").setView(coords, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on("click", this._showForm.bind(this));
  }
  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove("hidden");
    inputDistance.focus();
  }
  _toggleElevatinField() {
    inputDuration.closest(".form__row").classList.toggle("form__row--hidden");
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
  }
  _newWorkout(e) {
    const isNumber = (...nums) => nums.every((num) => Number.isFinite(num));
    const isPositive = (...nums) => nums.every((num) => num >= 0);
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const cadence = +inputCadence.value;
    const elevation = +inputElevation.value;
    const type = inputType.value;
    const { lat, lng } = this.#mapEvent.latlng;

    let workout;

    if (type === "cycling") {
      if (
        isNumber(distance, duration, elevation) &&
        isPositive(distance, duration, elevation)
      ) {
      } else {
        return alert("Input values most be positive numbers!");
      }

      workout = new Cycling([lat, lng], distance, duration, elevation);
      this.#workouts.push(workout);
    }
    if (type === "running") {
      if (
        isNumber(distance, duration, cadence) &&
        isPositive(distance, duration, cadence)
      ) {
      } else {
        return alert("Input values most be positive numbers!");
      }
      workout = new Running([lat, lng], distance, duration, cadence);
      this.#workouts.push(workout);
    }

    e.preventDefault();
    inputCadence.value =
      inputDistance.value =
      inputDuration.value =
      inputElevation.value =
        "";
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 150,
          minWidth: 75,
          autoClose: false,
          closeOnClick: false,
          className: `${type}-popup`,
        })
      )
      .setPopupContent(`${type}`)
      .openPopup();
  }
}

const app = new App();
