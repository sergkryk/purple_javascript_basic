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
    for (let el of this.tasks) {
      if (el.id === id) {
        Object.assign(el, task);
        break;
      }
    }
  },
  sort: function () {
    const sorted = this.tasks.slice().sort((a, b) => {
      return a.priority > b.priority ? 1 : -1
    });
    return sorted;
  },
};

const anotherTaskList = {
  tasks: [],
  add: taskList.add,
  delete: taskList.delete,
  update: taskList.update,
  sort: taskList.sort,
}

anotherTaskList.add({ title: "Поесть", id: 1, priority: 1 });
anotherTaskList.add({ title: "Поспать", id: 2, priority: 1 });
anotherTaskList.add({ title: "Полежать", id: 3, priority: 1 });
anotherTaskList.add({ title: "Посмотреть", id: 4, priority: 2 });
anotherTaskList.add({ title: "Покодить", id: 5, priority: 3 });
anotherTaskList.add({ title: "Послушать", id: 6, priority: 3 });
anotherTaskList.add({ title: "Почитать", id: 7, priority: 5 });
anotherTaskList.add({ title: "Попить", id: 8, priority: 1 });

console.log(anotherTaskList.tasks);
anotherTaskList.delete(8);
console.log(anotherTaskList.tasks);
anotherTaskList.update(5, { title: "Кодить усерднее", priority: 1 });
console.log(anotherTaskList.tasks);
console.log(anotherTaskList.sort());

