# MyHeart(Rupubaby)
A personalized love confession & birthday surprise website for Rupasree, built with pure HTML, CSS & JavaScript. 🎂

## 🚀 Live Demo

**Live Preview:** [https://rupubaby.vercel.app/](https://rupubaby.vercel.app/)

# Btw all the text on the website is written in my mother tongue — Bengali from Tripura. 🗣️💙

# 💕A personalized love confession page — because some feelings deserve more than a text message.

---

## 🌸 What is this?

A cute, interactive, mobile-first love website made for my girlfriend Rupasree (aka *Botluu / Kuttu* 🐼). She gets asked if she loves me, gets guilt-tripped if she says no, and is rewarded with confetti and a birthday surprise if she says yes.

---

---

## 📄 Pages

### `index.html` — The Question 💌
The main page. Asks *"Ko amare valopas ki na?"* with two buttons:

- **Ho baby (Yes)** — teases her to try No first, then redirects to `yes.html`
- **Naa valapai na (No)** — triggers a guilt-trip sequence:
  - Custom Bengali messages get more dramatic with each click
  - The Yes button grows bigger every time No is clicked
  - The No button shrinks
  - GIFs cycle through sad/devastated expressions
  - After 8 clicks, the No button **runs away** from the cursor
- Background music autoplays with a mute toggle

### `yes.html` — She Said Yes! 🎉
Triggered when she finally clicks Yes. Features:
- Confetti burst on load
- Celebrating GIF + polaroid photo of us
- Sweet message in Bengali
- A hidden 🐼 toggle button at the bottom with the hint *"ekta surprise ache"* — clicking it leads to the birthday page

### `birthday.html` — Birthday Surprise 🎂 *(new page)*
A surprise birthday page revealed through the toggle on `yes.html`. Features:
- Bouncing *"Happy Birthday Rupasree"* title
- Bubududu birthday GIF sticker
- 4 floating polaroid photos in a 2×2 grid (mobile) / 4-in-a-row (desktop)
- Birthday message in Bengali + English
- Confetti cannon on load
- Background music

---

## ✨ Features

- 🐾 **Animated GIFs** that react to every "No" click — getting sadder each time
- 📈 **Yes button grows bigger** with every No press (but stays screen-friendly on mobile!)
- 🏃 **Runaway No button** — after enough clicks, it escapes your cursor
- 💬 **9 guilt-trip messages** that change with each No click
- 🎉 **Confetti explosion** on the Yes page
- 🎵 **Background music** with a toggle button
- 💗 **Floating hearts** background animation
- 📱 **Mobile responsive** — works on all screen sizes
- 🎵 Autoplay background music with toggle (bypasses browser autoplay policy)
- 🖼️ Polaroid photo frames with floating animation
- 💬 Custom Bengali messages throughout
- 📱 Fully mobile-responsive (tested on Android)
- 🏃 Runaway No button after 8 clicks
- 🎊 Canvas confetti on yes & birthday pages
- 💕 Floating hearts background animation
- 🔘 Neumorphic toggle button leading to birthday surprise

---

## 🛠️ Tech Stack

- HTML5
- CSS3 (animations, responsive design)
- Vanilla JavaScript — no frameworks
- [Canvas Confetti](https://github.com/catdad/canvas-confetti) — confetti animation
- [Google Fonts — Nunito](https://fonts.google.com/specimen/Nunito) — typography
- [Tenor GIFs 🐱](https://tenor.com) — reaction GIFs
- Deployed on **[Vercel](https://vercel.com)**

---

## 📁 Project Structure / File Structure

```
MyHeart/
├── index.html          # Main question page
├── yes.html            # Yes response page
├── birthday.html       # Birthday surprise page
├── style.css           # Shared styles across all pages
├── script.js           # Logic for index.html (No button, runaway, GIF swap)
├── yes-script.js       # Confetti + music logic for yes.html
├── favicon.ico         # Site favicon
├── Kiss Rupasree.jpeg  # Couple photo (yes.html polaroid)
├── Rupasree and me1.jpeg
├── Rupasree and me2.jpeg
├── Rupasree and me3.jpeg
├── Rupasree and me4.jpeg
└── music/
    ├── beabadoobee - Glue Song (Lyrics).mp3
    ├── I-Love-You-Rupasree.mp3
    ├── I-Love-You-Rupasree(Part-1).mp3
    ├── I-Love-You-Rupasree(Part-2).mp3
    └── I-Love-You-Rupasree(Part-3).mp3
```


---

## 🚀 How to Use / Deploy Your Own

1. Clone or download this repo or Fork this repo
2. Replace photos with your own (`Kiss Rupasree.jpeg`, `Rupasree and me1-4.jpeg`)
3. Add your music file inside a `music/` folder
4. Update the name & messages in `index.html` , `yes.html` and `birthday.html`
5. Edit the Bengali/English text in all `.html` files to your own messages
6. Deploy on **GitHub Pages** (Settings → Pages → Deploy from branch → main → root → Save)
7. OR Deploy on Vercel (drag & drop the folder — done!)
8. Send the link 💌

---

## 🙏 Credits

Originally inspired by [**SahilGogna/v-day**](https://github.com/SahilGogna/v-day) by [@SahilGogna](https://github.com/SahilGogna) — who said *"Do whatever you want with it"* 🫶

Modified and personalized with Bengali love, custom messages, new GIFs, mobile responsiveness fixes, new pages, personalized photo section and a whole lot of feelings. 💕

---

## ✨🤝
If you use this project or build on it, a mention or link back is appreciated — not legally required, but it makes my day. 🙂

---

## 💖 Made for

**Rupasree** — *2hr 31 minutes kuttu* 🥺🐼🐻

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

*P.S. — The No button always loses. 😌*
