let tasks = ["Buy milk", "Clean the teem", "Go to the gyim"];

console.log("Tasks on My To-Do List");
console.log("1. " + tasks[0]);
console.log(`2. ${tasks[1]}`);
console.log("3. " + tasks[2]);

tasks.push("do the Landary");
console.log("4. " + tasks[3]);

console.log(tasks);

tasks.pop();
console.log(tasks);

tasks.shift();
console.log(tasks);

tasks.unshift("cooking dinneer");
console.log(tasks);

tasks.splice(1, 1);
console.log(tasks);

tasks.splice(1, 0, "wash the dishess");
console.log(tasks);