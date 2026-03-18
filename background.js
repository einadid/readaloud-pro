chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "readText",
    title: "Read Selected Text",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "readText") {
    chrome.storage.local.get(['speed'], (res) => {
      const speed = res.speed || 0.9;

      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: readText,
        args: [speed]
      });
    });
  }
});

// Shared Function
function readText(speed) {
  const text = window.getSelection().toString().trim();
  if (!text) {
    alert("Select text first!");
    return;
  }

  // Language detect
  let lang = 'en-US';
  if (/[\u0980-\u09FF]/.test(text)) lang = 'bn-IN';
  else if (/[\u0900-\u097F]/.test(text)) lang = 'hi-IN';

  // Bangla → Google TTS
  if (lang === 'bn-IN') {
    const audio = new Audio(
      `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=bn&client=tw-ob`
    );
    audio.play();
    return;
  }

  // Others → speechSynthesis
  speechSynthesis.cancel();

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  utter.rate = speed || 0.9;

  speechSynthesis.speak(utter);
}