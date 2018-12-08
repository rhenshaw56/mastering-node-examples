"use strict"

let owners = new WeakMap();

let task = {
  title: "Big Project"
};

owners.set(task, "John");

function owner(task) {
  if (owners.has(task)) {
    return console.log(owners.get(task));
  }

  console.log('NO owners for this task');
}

console.log('owners', owners);

owner(task);