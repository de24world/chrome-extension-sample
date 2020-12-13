// document.querySelector("#hplogo img").classList.add("spinspinspin");

const first = document.createElement("button");
first.innerText = "SET DATA";
first.id = "first";

const second = document.createElement("button");
second.innerText = "Shout out to backend";
second.id = "second";

document.querySelector("body").appendChild(first);
document.querySelector("body").append(second);

first.addEventListener("click", () => {
  chrome.storage.local.set({ password: "123" });
  console.log("I SET DATA");
});
