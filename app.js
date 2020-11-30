class Job {
  constructor(job, location, category) {
    this.job = job;
    this.location = location;
    this.category = category;
  }
}

class App {
  constructor() {
    this.form = document.getElementById('form');
    this.jobInput = document.getElementById('left-input');
    this.locationInput = document.getElementById('right-input');
    this.categoryInput = document.getElementById('category-input');
    this.list = document.querySelector('.list-unstyled');
    this.searchInput = document.getElementById('search-input');
    this.selectInput = document.getElementById('select-input');
    this.categorySortInputs = document.getElementById('form2');
    this.jobs = [];
  }
  randomNum() {
    return Math.floor(Math.random() * 6);
  }
  getDate() {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }
  handleSubmit(e) {
    e.preventDefault();
    if (
      this.jobInput.value !== '' &&
      this.locationInput.value !== '' &&
      this.categoryInput.value !== ''
    ) {
      const job = new Job(
        this.jobInput.value,
        this.locationInput.value,
        this.categoryInput.value
      );
      this.addJob(job);
      this.render();
      this.clear();
    }
  }
  addEventListener() {
    this.form.addEventListener('submit', (e) => {
      this.handleSubmit(e);
    });
    this.searchInput.addEventListener('keyup', (e) => {
      this.filterList(e);
    });
    this.categorySortInputs.addEventListener('change', () => {
      this.handleChange();
    });
  }
  handleChange() {
    this.categorySortInputs
      .querySelectorAll('#defaultCheck1')
      .forEach((input) => {
        if (input.checked) {
          console.log(input.value);
        }
      });
  }
  filterList(e) {
    const criteria = this.selectInput.value;
    const searchValue = e.target.value.toLowerCase();
    if (searchValue !== '') {
      this.renderSearch(
        this.jobs.filter(
          (job) => job[criteria].toLowerCase().indexOf(searchValue) !== -1
        )
      );
    } else {
      this.render();
    }
  }
  addJob(job) {
    this.jobs = [...this.jobs, { ...job }];
  }
  renderSearch(jobs) {
    this.list.innerHTML = '';
    jobs.forEach((job) => {
      const li = document.createElement('li');
      li.classList.add('border-bottom', 'p-3', 'mb-3');

      const div = document.createElement('div');
      div.classList.add('d-flex');

      const img = document.createElement('img');
      img.src = `https://picsum.photos/100/10${this.randomNum()}`;

      const div2 = document.createElement('div');
      div2.classList.add('ml-3');

      const a = document.createElement('a');
      a.classList.add('font-weight-bold');
      a.innerText = job.job;

      const p = document.createElement('p');
      p.classList.add('font-weight-bold');
      p.innerText = job.location;

      const p2 = document.createElement('p');
      p2.textContent =
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, sed?';

      const dateAndCatP = document.createElement('p');

      const dateSpan = document.createElement('span');
      dateSpan.textContent = this.getDate();

      const categorySpan = document.createElement('span');
      categorySpan.textContent = job.category;

      dateAndCatP.append(dateSpan, categorySpan);

      div2.append(a, p, p2, dateAndCatP);
      div.append(img, div2);
      li.append(div);
      this.list.appendChild(li);
    });
  }
  render() {
    this.list.innerHTML = '';
    this.jobs.forEach((job) => {
      const li = document.createElement('li');
      li.classList.add('border-bottom', 'p-3', 'mb-3');

      const div = document.createElement('div');
      div.classList.add('d-flex');

      const img = document.createElement('img');
      img.src = `https://picsum.photos/100/10${this.randomNum()}`;

      const div2 = document.createElement('div');
      div2.classList.add('ml-3');

      const a = document.createElement('a');
      a.classList.add('font-weight-bold');
      a.innerText = job.job;

      const p = document.createElement('p');
      p.classList.add('font-weight-bold');
      p.innerText = job.location;

      const p2 = document.createElement('p');
      p2.textContent =
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, sed?';

      const dateAndCatP = document.createElement('p');
      dateAndCatP.classList.add(
        'text-muted',
        'd-flex',
        'justify-content-between'
      );

      const dateSpan = document.createElement('span');
      dateSpan.textContent = this.getDate();

      const categorySpan = document.createElement('span');
      categorySpan.textContent = job.category;

      dateAndCatP.append(dateSpan, categorySpan);

      div2.append(a, p, p2, dateAndCatP);
      div.append(img, div2);
      li.append(div);
      this.list.appendChild(li);
    });
  }
  clear() {
    this.jobInput.value = '';
    this.locationInput.value = '';
    this.categoryInput.value = '';
  }
}

let app;

window.addEventListener('DOMContentLoaded', () => {
  app = new App();
  app.addEventListener();
});
