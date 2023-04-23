const sendFormButton = document.getElementById("sendForm");
let Data = { task: "0", limmit: "0", priority: "0" };
sendFormButton.addEventListener("click", (e) => {
  let task = document.getElementById("task");
  let limmit = document.getElementById("limmit");
  let priority = document.getElementById("priority");
  Data.task = task.value;
  Data.limmit = limmit.value;
  Data.priority = priority.value;
  var schedule_Data = new XMLHttpRequest();
  schedule_Data.open(
    "POST",
    "https://script.google.com/macros/s/AKfycbzEtX1qV4p_lbY2hvtZ2ZJefTdjes5cy2XEuGcVMG5VBAshjVgmcGTau552SNYdtWGCmA/exec"
  );
  schedule_Data.setRequestHeader("content-type", "application/json");
  schedule_Data.send(JSON.stringify(Data));

  let text =
    "予定:{task}\n期限:{limmit}\n　　　をカレンダーに追加しといたかんな！";
  text = text.replace("{task}", Data.task).replace("{limmit}", Data.limmit);
  alert(text);
  close();
});
