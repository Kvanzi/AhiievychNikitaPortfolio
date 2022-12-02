const terminal = document.querySelector(".hero__terminal");
const terminalOutput = document.querySelector(".hero-terminal__output");
const terminalInput = document.querySelector(".hero-terminal__input");

function clearInput() {
  terminalInput.value = "";
}

function copyTxt(el) {
  navigator.clipboard.writeText(el.value);
}

terminalInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && e.target.value) {
    let command = e.target.value.toLowerCase();
    command = command.replace(/ /g, "");

    switch (command) {
      case "commands": {
        terminalOutput.insertAdjacentHTML(
          "beforeend",
          `
          <p>> ${command}</p>
          <p style="margin-bottom: 0.625rem">Commands avaible:</p>
          <p style="margin-bottom: 0.2rem">commands</p>
          <p style="margin-bottom: 0.2rem">hello!</p>
          <p style="margin-bottom: 0.2rem">clear</p>
          <p style="margin-bottom: 0.2rem">info</p>
          <p style="margin-bottom: 1rem">contact</p>
          <p style="line-height: 1rem;"><span style="color: #52d42c">AhiievychNikita@DESKTOP</span> <span style="color: #c748ff">MINGW64</span> <span style="color: #ffb100">~/documents/portfolio</span></p>
          `
        );
        clearInput();
        break;
      }
      case "clear": {
        terminalOutput.replaceChildren();
        terminalOutput.insertAdjacentHTML(
          "beforeend",
          `
            <p style="line-height: 1rem;"><span style="color: #52d42c">AhiievychNikita@DESKTOP</span> <span style="color: #c748ff">MINGW64</span> <span style="color: #ffb100">~/documents/portfolio</span></p>
          `
        );
        clearInput();
        break;
      }
      case "info": {
        terminalOutput.insertAdjacentHTML(
          "beforeend",
          `
          <p>> ${command}</p>
          <p>I'm Nikita a self-taught web developer.</p>
          <p style="margin-bottom: 1rem;">I use HTML, CSS, and JavaScript to produce responsive websites and web apps that provide users the best and most appropriate experience suited to their device and browser.</p>
          <p style="line-height: 1rem;"><span style="color: #52d42c">AhiievychNikita@DESKTOP</span> <span style="color: #c748ff">MINGW64</span> <span style="color: #ffb100">~/documents/portfolio</span></p>
          `
        );
        clearInput();
        break;
      }
      case "hello!": {
        terminalOutput.insertAdjacentHTML(
          "beforeend",
          `
          <p>> ${command}</p>
          <p style="margin-bottom: 1rem;">Hello!👋</p>
          <p style="line-height: 1rem;"><span style="color: #52d42c">AhiievychNikita@DESKTOP</span> <span style="color: #c748ff">MINGW64</span> <span style="color: #ffb100">~/documents/portfolio</span></p>
          `
        );
        clearInput();
        break;
      }
      case "contact": {
        terminalOutput.insertAdjacentHTML(
          "beforeend",
          `
          <p>> ${command}</p>
          <p>
          Discord: 
          <button onclick="copyTxt(this)" value="Kvanzi#9045">
          <span class="hero-terminal__link">Kvanzi#9045</span>
          <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="14" width="24" height="28" rx="1" stroke="#fff" stroke-width="4"/>
            <path d="M24 6H24.01V6.01H24V6Z" fill="#fff"/>
            <path d="M32 6H32.01V6.01H32V6Z" fill="#fff"/>
            <path d="M40 6H40.01V6.01H40V6Z" fill="#fff"/>
            <path d="M40 13H40.01V13.01H40V13Z" fill="#fff"/>
            <path d="M40 21H40.01V21.01H40V21Z" fill="#fff"/>
            <path d="M24 6H24.01V6.01H24V6Z" stroke="#fff" stroke-width="4"/>
            <path d="M32 6H32.01V6.01H32V6Z" stroke="#fff" stroke-width="4"/>
            <path d="M40 6H40.01V6.01H40V6Z" stroke="#fff" stroke-width="4"/>
            <path d="M40 13H40.01V13.01H40V13Z" stroke="#fff" stroke-width="4"/>
            <path d="M40 21H40.01V21.01H40V21Z" stroke="#fff" stroke-width="4"/>
          </svg>              
          </button>
          </p>
          <p>Telegram: <a class="hero-terminal__link" href="https://t.me/Kvanzi" target="_blank">link</a></p>
          <p style="margin-bottom: 1rem">GitHub: <a class="hero-terminal__link" href="https://github.com/Kvanzi" target="_blank">link</a></p>
          <p style="line-height: 1rem;"><span style="color: #52d42c">AhiievychNikita@DESKTOP</span> <span style="color: #c748ff">MINGW64</span> <span style="color: #ffb100">~/documents/portfolio</span></p>
          `
        );
        clearInput();
        break;
      }
      default: {
        terminalOutput.insertAdjacentHTML(
          "beforeend",
          `
            <p>> ${command}</p>
            <p>command: "${command}" not found :(</p>
            <p style="margin-bottom: 1rem;">type "commands" to learn all the commands</p>
            <p style="line-height: 1rem;"><span style="color: #52d42c">AhiievychNikita@DESKTOP</span> <span style="color: #c748ff">MINGW64</span> <span style="color: #ffb100">~/documents/portfolio</span></p>
          `
        );
        clearInput();
        break;
      }
    }
  }
});
