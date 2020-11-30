// class App {
//   constructor() {
//     this.jobs = [];
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     if (ui.jobInputValue !== '' || ui.locationInputValue !== '') {
//       const job = new Job(ui.jobInputValue, ui.locationInputValue);
//       ui.clear();
//       this.addJobb(job);
//       console.log(this.jobs);
//       // ui.render(this.jobs);
//     }
//   }
//   addJobb(job) {
//     console.log('hej');
//     // this.jobs = [...this.jobs, { ...job }];
//   }
// }

// class UI {
//   constructor() {
//     this.jobInput = document.getElementById('left-input');
//     this.locationInput = document.getElementById('right-input');
//     this.form = document.querySelector('.form-inline');
//   }
//   get jobInputValue() {
//     return this.jobInput.value;
//   }
//   get locationInputValue() {
//     return this.locationInput.value;
//   }
//   clear() {
//     this.jobInput.value = '';
//     this.locationInput.value = '';
//   }

//   render(jobs) {
//     console.log(jobs);
//     // jobs.forEach((job) => {
//     //   const li = document.createElement('li');
//     //   li.classList.add('border-bottom');
//     // });
//   }
// }

// const ui = new UI();
// const app = new App();

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

let name = 'lastName';

console.log(person.age);
