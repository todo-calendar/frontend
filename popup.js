const sendFormButton = document.getElementById("sendForm");
let Data = { task: "0", limmit: "0" };
sendFormButton.addEventListener("click", (e) => {
  let task = document.getElementById("task");
  let limmit = document.getElementById("limmit");
  //   Data.push(task.value, limmit.value);
  Data.task = task.value;
  Data.limmit = limmit.value;
});
