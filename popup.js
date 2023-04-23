const sendFormButton = document.getElementById("sendForm");
let Data = { title: "0", endTime: "0", priority: "0" };
sendFormButton.addEventListener("click", (e) => {
  let task = document.getElementById("task");
  let limmit = document.getElementById("limmit");
  let priority = document.getElementById("priority");
  Data.title = task.value;
  Data.endTime = limmit.value;
  Data.priority = priority.value;
  var schedule_Data = new XMLHttpRequest();
  schedule_Data.open(
    "POST",
    "https://script.google.com/macros/s/AKfycby2zy7JOel7iZeo3-8b2IkiNZlpzQxj5sT98ea6zUSP4mNcOeYCm1hcxMzWSuuxc5jtVA/exec"
  );
  schedule_Data.setRequestHeader("content-type", "application/json");
  schedule_Data.send(JSON.stringify(Data));

  let text =
    "予定:{task}\n期限:{limmit}\n　　　をカレンダーに追加しといたかんな！";
  text = text.replace("{task}", Data.task).replace("{limmit}", Data.limmit);
  alert(text);
  close();
});
