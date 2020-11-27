const form = document.querySelector(".form-inline");

function handleSubmit(e) {
  e.preventDefault();
  if (ui.jobInputValue !== "" || ui.locationInputValue !== "") {
    const job = new Job(ui.jobInputValue, ui.locationInputValue);
    ui.clear();
    app.addJobb(job);
    console.log(app);
  }
}

form.addEventListener("submit", handleSubmit);

class Job {
  constructor(job, location) {
    this.job = job;
    this.location = location;
  }
}

class App {
  constructor() {
    this.jobs = [];
  }
  addJobb(job) {
    this.jobs = [...this.jobs, { ...job }];
  }
}

class UI {
  constructor() {
    this.jobInput = document.getElementById("left-input");
    this.locationInput = document.getElementById("right-input");
  }
  get jobInputValue() {
    return this.jobInput.value;
  }
  get locationInputValue() {
    return this.locationInput.value;
  }
  clear() {
    this.jobInput.value = "";
    this.locationInput.value = "";
  }

  render() {}
}
const ui = new UI();
const app = new App();
