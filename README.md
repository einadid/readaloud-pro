# ReadAloud Pro (Chrome Extension)

A simple and powerful Chrome extension that reads selected text aloud with automatic language detection.

---

## 🚀 Features

* 🔊 Read selected text from any website
* 🌍 Auto language detection
* 🇧🇩 Bangla support (online TTS)
* 🇺🇸 English & 🇮🇳 Hindi support (offline voices)
* ⚡ Fast and lightweight
* 🎨 Clean black & white UI
* 🖱️ Right-click context menu support

---

## 🧠 How It Works

* Detects language from selected text
* Uses **Web Speech API** for supported languages
* Uses **Google TTS (online)** for Bangla

---

## 📁 Project Structure

```
myreadextension/
 ├── manifest.json
 ├── background.js
 ├── popup.html
 ├── popup.js
 └── icon.png
```

---

## ⚙️ Installation (Manual)

1. Open Chrome
2. Go to: `chrome://extensions/`
3. Enable **Developer Mode** (top right)
4. Click **Load unpacked**
5. Select the project folder

---

## 🧪 How to Use

### 👉 Method 1 (Right Click)

1. Select any text on a webpage
2. Right-click
3. Click **"Read Selected Text"**

![Screenshot](animation.gif)

### 👉 Method 2 (Popup)

1. Click extension icon
2. Select text
3. Click **Read**

![Screenshot](animation2.gif)

---

## 🎚️ Speed Control

* Adjust reading speed using the slider in popup
* Range: **0.5x – 2.0x**

---

## 🌐 Supported Languages

| Language | Method                    |
| -------- | ------------------------- |
| English  | Offline (SpeechSynthesis) |
| Hindi    | Offline                   |
| Bangla   | Online (Google TTS)       |
| More     | Online | offline          |
---

## ⚠️ Notes

* Bangla uses online TTS → Internet required
* Other languages work offline
* Make sure text is selected before clicking Read

---

## 🛠️ Tech Stack

* JavaScript (Vanilla)
* Chrome Extension (Manifest V3)
* Web Speech API
* Google Translate TTS

---

## 📌 Future Improvements

* ⏸️ Pause / Resume
* 🎤 Voice selection
* 📱 Mobile support
* 🎯 Text highlighting

---

## 👨‍💻 Author

**Emamul Islam Nadid**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
