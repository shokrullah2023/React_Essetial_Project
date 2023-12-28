import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
});


<html lang="en"><head>
    <script type="module">
import RefreshRuntime from "/@react-refresh"
RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type
window.__vite_plugin_react_preamble_installed__ = true
</script>

    <script type="module" src="/@vite/client"></script>

    <meta charset="UTF-8">
    <link rel="icon" type="image/svg+xml" href="/game-logo.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Tic-Tac-Toe</title>
  <style type="text/css" data-vite-dev-id="C:/Users/ShokrullahA/Desktop/React Essentials/ticTacToe-Project/src/index.css">@import url("https://fonts.googleapis.com/css2?family=Caprasimo&family=Roboto+Slab:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto Slab", sans-serif;
  line-height: 1.5;

  color: #ebe7ef;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  background: radial-gradient(
      circle at top,
      rgba(241, 210, 70, 0.98),
      rgba(250, 176, 103, 0.87)
    ),
    url("bg-pattern-dark.png");
  background-repeat: repeat;
  background-size: 100% 100%, 30% 30%, 100% 100%;
  min-height: 110rem;
}

header {
  text-align: center;
}

header img {
  width: 8rem;
  object-fit: contain;
  margin: 3rem auto 1rem auto;
  filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.4));
}

h1 {
  font-family: "Caprasimo", cursive;
  font-size: 3rem;
  margin: 0 auto 3rem auto;
  color: #3f3b00;
}

#game-container {
  max-width: 45rem;
  margin: 3rem auto;
  padding: 2rem;
  border-radius: 6px;
  background: linear-gradient(#383624, #282617);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  position: relative;
}

#players {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

#players li {
  display: flex;
  align-items: center;
  width: 50%;
  border: 2px solid transparent;
}

#players.highlight-player li.active {
  border-color: #f6e35a;
  animation: pulse 2s infinite ease-in-out;
}

#players.highlight-player li.active .player-name,
#players.highlight-player li.active .player-symbol {
  color: #f6e35a;
}

#players button {
  width: 3rem;
  border: none;
  background: none;
  color: #c3ba78;
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.2s;
  padding: 0.3rem 0.25rem 0.25rem 0.25rem;
  text-align: center;
}

#players button:hover {
  color: #f8ca31;
}

.player {
  border: 2px solid transparent;
  padding: 0.5rem;
  border-radius: 4px;
  font-weight: bold;
}

.player-name {
  display: inline-block;
  width: 10rem;
  font-size: 1rem;
  color: #e1dec7;
  text-transform: uppercase;
  margin: 0;
  padding: 0.5rem;
  border-radius: 4px;
  text-overflow: ellipsis;
  text-align: center;
}

.player input {
  font: inherit;
  font-size: 1rem;
  margin-right: 1rem;
  width: 10rem;
  border: none;
  padding: 0.5rem;
  animation: pulse-text 2s infinite;
  background-color: #46432f;
  text-align: center;
  text-transform: uppercase;
}

.player-symbol {
  margin-left: 1rem;
  font-size: 1rem;
  color: #e1dec7;
}

ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

#pre-game {
  text-align: center;
}

#pre-game button {
  cursor: pointer;
  background: none;
  color: #f8c031;
  border: none;
  font-family: "Caprasimo", cursive;
  font-size: 4rem;
  text-shadow: 0 0 12px rgba(0, 0, 0, 0.7);
  animation: pulse-text-size 2s infinite ease-out;
}

#game-board {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0;
  padding: 0;
  flex-direction: column;
}

#game-board ol {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

#game-board button {
  width: 8rem;
  height: 8rem;
  border: none;
  background: #aca788;
  color: #3f3b00;
  font-size: 5rem;
  cursor: pointer;
  font-family: "Caprasimo", cursive;
  padding: 1rem;
}

#game-over {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(40, 38, 23, 0.95);
  animation: pop-in 0.5s cubic-bezier(0.68, -0.55, 0.65, 0.52) forwards;
}

#game-over h2 {
  font-family: "Caprasimo", cursive;
  font-size: 4rem;
  text-align: center;
  color: #fcd256;
  margin: 0;
}

#game-over p {
  font-size: 2rem;
  text-align: center;
  color: #e1dec7;
}

#game-over button {
  display: block;
  margin: 0 auto;
  font-size: 1.5rem;
  background: none;
  border: 2px solid #fcd256;
  color: #fcd256;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s, color 0.2s;
  box-shadow: 0 0 8px rgba(255, 187, 0, 0.4);
}

#game-over button:hover {
  background: #fcd256;
  color: #3f3b00;
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(255, 187, 0, 0.8);
}

#log {
  max-width: 20rem;
  color: #3f3b00;
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  text-align: center;
}

#log li {
  border-radius: 4px;
  animation: slide-in-from-left 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  margin: 0.75rem;
}

#log li.highlighted {
  background-color: #3f3b00;
  color: white;
}

#game-hints {
  text-align: center;
  color: #46432f;
}

#game-hints h2 {
  font-family: "Caprasimo", cursive;
  font-size: 2rem;
  margin: 0;
}

#game-hints ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#game-hints button {
  cursor: pointer;
  border: none;
  background: transparent;
  color: #23221f;
  font: inherit;
  margin-top: 1.5rem;
}

@keyframes slide-in-from-left {
  0% {
    opacity: 0;
    transform: translateX(-30%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse-text {
  0% {
    color: #e1dec7;
  }
  50% {
    color: #9f9d83;
  }
  100% {
    color: #e1dec7;
  }
}

@keyframes pulse-text-size {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes pulse {
  0% {
    border-color: #f6e35a;
    box-shadow: 0 0 0 0 rgba(246, 227, 90, 0.4);
  }
  50% {
    border-color: #f8c031;
    box-shadow: 0 0 0 0.5rem rgba(248, 165, 49, 0);
  }
  100% {
    border-color: #f6e35a;
    box-shadow: 0 0 0 0 rgba(246, 227, 90, 0);
  }
}

/* Fancy animation for showing the "Game Over" element */

@keyframes pop-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  80% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
</style></head>
  <body><audio class="audio-for-speech" src=""></audio><div class="translate-tooltip-mtz blue sm-root translate hidden_translate">
                    <div class="header-wrapper">
                        <div class="header-controls">
                            <span class="sound-translate"></span>
                            <span class="copy blue"></span>
                            <span class="settings-translator"></span>
                        </div>
                        <div class="header-title">translator</div>
                        <div class="translate-icons">
                            <img class="from" src="">
                            <img class="translate-arrow" src="chrome-extension://bebmphofpgkhclocdbgomhnjcpelbenh/images/right-arrow.png">
                            <div class="translate_to_dropdown">
                                <button class="dropbtn dropdown-toggle" type="button" id="dropdownMenuButton1" aria-expanded="false"></button>
                                <ul class="dropdown-content-wrapper languageSelector blue">
                                    <li><a class="dropdown-item" data-lang="af">Afrikaans</a></li>
                                    <li><a class="dropdown-item" data-lang="sq">Albanian - shqipe</a></li>
                                    <li><a class="dropdown-item" data-lang="ar">Arabic - ‎‫العربية‬‎</a></li>
                                    <li><a class="dropdown-item" data-lang="hy">Armenian - Հայերէն</a></li>
                                    <li><a class="dropdown-item" data-lang="az">Azerbaijani - azərbaycanca</a></li>
                                    <li><a class="dropdown-item" data-lang="eu">Basque - euskara</a></li>
                                    <li><a class="dropdown-item" data-lang="be">Belarusian - беларуская</a></li>
                                    <li><a class="dropdown-item" data-lang="bn">Bengali - বাংলা</a></li>
                                    <li><a class="dropdown-item" data-lang="bg">Bulgarian - български</a></li>
                                    <li><a class="dropdown-item" data-lang="ca">Catalan - català</a></li>
                                    <li><a class="dropdown-item" data-lang="zh-CN">Chinese - 中文（简体中文）</a></li>
                                    <li><a class="dropdown-item" data-lang="zh-TW">Chinese - 中文 (繁體中文)</a></li>
                                    <li><a class="dropdown-item" data-lang="hr">Croatian - hrvatski</a></li>
                                    <li><a class="dropdown-item" data-lang="cs">Czech - čeština</a></li>
                                    <li><a class="dropdown-item" data-lang="da">Danish - dansk</a></li>
                                    <li><a class="dropdown-item" data-lang="nl">Dutch - Nederlands</a></li>
                                    <li><a class="dropdown-item" data-lang="en">English</a></li>
                                    <li><a class="dropdown-item" data-lang="eo">Esperanto - esperanto</a></li>
                                    <li><a class="dropdown-item" data-lang="et">Estonian - eesti</a></li>
                                    <li><a class="dropdown-item" data-lang="tl">Filipino</a></li>
                                    <li><a class="dropdown-item" data-lang="fi">Finnish - suomi</a></li>
                                    <li><a class="dropdown-item" data-lang="fr">French - français</a></li>
                                    <li><a class="dropdown-item" data-lang="gl">Galician - galego</a></li>
                                    <li><a class="dropdown-item" data-lang="ka">Georgian - ქართული</a></li>
                                    <li><a class="dropdown-item" data-lang="de">German - Deutsch</a></li>
                                    <li><a class="dropdown-item" data-lang="el">Greek - Ελληνικά</a></li>
                                    <li><a class="dropdown-item" data-lang="gu">Gujarati - ગુજરાતી</a></li>
                                    <li><a class="dropdown-item" data-lang="ht">Haitian Creole - kreyòl ayisyen</a></li>
                                    <li><a class="dropdown-item" data-lang="iw">Hebrew - ‎‫עברית‬‎</a></li>
                                    <li><a class="dropdown-item" data-lang="hi">Hindi - हिन्दी</a></li>
                                    <li><a class="dropdown-item" data-lang="hu">Hungarian - magyar</a></li>
                                    <li><a class="dropdown-item" data-lang="is">Icelandic - íslenska</a></li>
                                    <li><a class="dropdown-item" data-lang="id">Indonesian - Bahasa Indonesia</a></li>
                                    <li><a class="dropdown-item" data-lang="ga">Irish - Gaeilge</a></li>
                                    <li><a class="dropdown-item" data-lang="it">Italian - italiano</a></li>
                                    <li><a class="dropdown-item" data-lang="ja">Japanese - 日本語</a></li>
                                    <li><a class="dropdown-item" data-lang="kn">Kannada - ಕನ್ನಡ</a></li>
                                    <li><a class="dropdown-item" data-lang="ko">Korean - 한국어</a></li>
                                    <li><a class="dropdown-item" data-lang="la">Latin - Lingua Latina</a></li>
                                    <li><a class="dropdown-item" data-lang="lv">Latvian - latviešu</a></li>
                                    <li><a class="dropdown-item" data-lang="lt">Lithuanian - lietuvių</a></li>
                                    <li><a class="dropdown-item" data-lang="mk">Macedonian - македонски</a></li>
                                    <li><a class="dropdown-item" data-lang="ms">Malay - Bahasa Melayu</a></li>
                                    <li><a class="dropdown-item" data-lang="mt">Maltese - Malti</a></li>
                                    <li><a class="dropdown-item" data-lang="no">Norwegian - norsk</a></li>
                                    <li><a class="dropdown-item" data-lang="fa">Persian - ‎‫فارسی‬‎</a></li>
                                    <li><a class="dropdown-item" data-lang="pl">Polish - polski</a></li>
                                    <li><a class="dropdown-item" data-lang="pt">Portuguese - português</a></li>
                                    <li><a class="dropdown-item" data-lang="ro">Romanian - română</a></li>
                                    <li><a class="dropdown-item" data-lang="ru">Russian - русский</a></li>
                                    <li><a class="dropdown-item" data-lang="sr">Serbian - Српски</a></li>
                                    <li><a class="dropdown-item" data-lang="sk">Slovak - slovenčina</a></li>
                                    <li><a class="dropdown-item" data-lang="sl">Slovenian - slovenščina</a></li>
                                    <li><a class="dropdown-item" data-lang="es">Spanish - español</a></li>
                                    <li><a class="dropdown-item" data-lang="sw">Swahili - Kiswahili</a></li>
                                    <li><a class="dropdown-item" data-lang="sv">Swedish - svenska</a></li>
                                    <li><a class="dropdown-item" data-lang="ta">Tamil - தமிழ்</a></li>
                                    <li><a class="dropdown-item" data-lang="te">Telugu - తెలుగు</a></li>
                                    <li><a class="dropdown-item" data-lang="th">Thai - ไทย</a></li>
                                    <li><a class="dropdown-item" data-lang="tr">Turkish - Türkçe</a></li>
                                    <li><a class="dropdown-item" data-lang="uk">Ukrainian - українська</a></li>
                                    <li><a class="dropdown-item" data-lang="ur">Urdu - ‎‫اردو‬‎</a></li>
                                    <li><a class="dropdown-item" data-lang="vi">Vietnamese - Tiếng Việt</a></li>
                                    <li><a class="dropdown-item" data-lang="cy">Welsh - Cymraeg</a></li>
                                    <li><a class="dropdown-item" data-lang="yi">Yiddish - יידיש</a></li>
                            </ul>
                          </div>
                        </div>
                    </div>
                    <div class="translated-text">
                        <div id="translator-words" class="words"></div>
                        <div class="sentences blue"></div>
                    </div>
                    <div class="trans_controls">
                        <div class="trans_controls__control-wrapper double_click">
                            <span class="trans_controls__toggle dbl-click active" data-store="double_click">
                                <div class="trans_controls__inner-circle"></div>
                            </span>
                            <span class="trans_controls__description">
                            Double-click
                            </span>
                        </div>
                        <div class="trans_controls__control-wrapper selection">
                            <span class="trans_controls__toggle icon-trans active" data-store="icon_trans">
                                <div class="trans_controls__inner-circle"></div>
                            </span>
                            <span class="trans_controls__description">
                            Select to translate
                            </span>
                        </div>
                    </div>
                </div><span class="translate-button-mtz hidden_translate blue"></span>
    <header>
      <img src="public/game-logo.png" alt="">
      <h1>Tic-Tac-Toe</h1>
    </header>
    <div id="root"></div>
    <script type="module" src="/src/index.jsx"></script>
  

</body></html>