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
  tasks: [{
    title: 'Еще раз учиться',
    id: 9,
    priority: 0,
    description: 'Дополнительное поле'
  }],
}



taskList.add.call(anotherTaskList, { title: "Поесть", id: 1, priority: 1 });
taskList.add.call(anotherTaskList, { title: "Поспать", id: 2, priority: 1 });
taskList.add.call(anotherTaskList, { title: "Полежать", id: 3, priority: 1 });
taskList.add.call(anotherTaskList, { title: "Посмотреть", id: 4, priority: 2 });
taskList.add.call(anotherTaskList, { title: "Покодить", id: 5, priority: 3 });
taskList.add.call(anotherTaskList, { title: "Послушать", id: 6, priority: 3 });
taskList.add.call(anotherTaskList, { title: "Почитать", id: 7, priority: 5 });
taskList.add.call(anotherTaskList, { title: "Попить", id: 8, priority: 1 });

console.log(anotherTaskList.tasks);
taskList.delete.call(anotherTaskList, 8);
console.log(anotherTaskList.tasks);
taskList.update.call(anotherTaskList, 5, { title: "Кодить усерднее", priority: 1 });
console.log(anotherTaskList.tasks);
console.log(taskList.sort.call(anotherTaskList));

