"use strict";

const taskList = {
  tasks: [],
  add: function (task) {
    this.tasks.push(task);
  },
  delete: function (id) {
    const filtered = this.tasks.filter((el) => {
      return el.id !== id;
    });
    this.tasks = filtered;
  },
  update: function (id, task) {
    this.tasks.map((el) => {
      if (el.id === id) {
        Object.assign(el, task);
      }
    });
  },
  sort: function () {
    const sorted = this.tasks.slice().sort((a, b) => {
      return a.priority > b.priority ? 1 : -1
    });
    return sorted;
  },
};

taskList.add({ title: "Поесть", id: 1, priority: 1 });
taskList.add({ title: "Поспать", id: 2, priority: 1 });
taskList.add({ title: "Полежать", id: 3, priority: 1 });
taskList.add({ title: "Посмотреть", id: 4, priority: 2 });
taskList.add({ title: "Покодить", id: 5, priority: 3 });
taskList.add({ title: "Послушать", id: 6, priority: 3 });
taskList.add({ title: "Почитать", id: 7, priority: 5 });
taskList.add({ title: "Попить", id: 8, priority: 1 });

console.log(taskList.tasks);
taskList.delete(8);
console.log(taskList.tasks);
taskList.update(5, { title: "Кодить усерднее", priority: 1 });
console.log(taskList.tasks);
console.log(taskList.sort());

