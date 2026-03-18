const slider = document.getElementById("speed");
const val = document.getElementById("val");

// Load saved speed
chrome.storage.local.get(['speed'], (res) => {
  if (res.speed) {
    slider.value = res.speed;
    val.innerText = "Speed: " + res.speed + "x";
  }
});

// Update speed
slider.oninput = () => {
  val.innerText = "Speed: " + slider.value + "x";
  chrome.storage.local.set({ speed: parseFloat(slider.value) });
};

// Read button
document.getElementById("read").onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: readText,
      args: [parseFloat(slider.value)]
    });
  });
};

// Stop button
document.getElementById("stop").onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: () => speechSynthesis.cancel()
    });
  });
};

// Main function
function readText(speed) {
  const text = window.getSelection().toString().trim();
  if (!text) {
    alert("Select text first!");
    return;
  }

  let lang = 'en-US';
  if (/[\u0980-\u09FF]/.test(text)) lang = 'bn-IN';
  else if (/[\u0900-\u097F]/.test(text)) lang = 'hi-IN';

  // Bangla → online TTS
  if (lang === 'bn-IN') {
    const audio = new Audio(
      `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=bn&client=tw-ob`
    );
    audio.play();
    return;
  }

  speechSynthesis.cancel();

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  utter.rate = speed || 0.9;

  speechSynthesis.speak(utter);
}