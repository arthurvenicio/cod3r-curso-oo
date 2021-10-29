const schedule = require("node-schedule");

const task1 = schedule.scheduleJob("*/5 * * * * *", function () {
  console.log("Execute task 1", new Date().getSeconds());
});

setTimeout(() => {
  task1.cancel();
  console.log("Estou encerrando está atividade");
}, 20000);

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 5)];
rule.hour = 1;
rule.second = 30;

const task2 = schedule.scheduleJob(rule, () => {
  console.log("Execute task 2", new Date().getSeconds());
});
