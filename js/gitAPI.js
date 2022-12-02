function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const repositories = {
  renderImage(repoName, repoId) {
    fetch(`https://api.github.com/repos/Kvanzi/${repoName}/contents/thumbnail`)
      .then((resp) => resp.json())
      .then((data) => {
        document.getElementById(repoId).insertAdjacentHTML(
          "beforeend",
          `
          <img src="${data[0].download_url}">
          `
        );
      })
      .catch((error) => console.log("Request failed", error));
  },
  render() {
    let reposAmount = 1;
    fetch("https://api.github.com/users/Kvanzi/repos")
      .then((resp) => resp.json())
      .then((data) => {
        return data.map((repo) => {
          if (repo.name != "Kvanzi" && repo.name != "calculator" && repo.name != "changeTheme") {
            document.querySelector(".portfolio__wrapper").insertAdjacentHTML(
              "beforeend",
              `
              <div class="swiper-slide portfolio__slide">
                <div class="portfolio-slide__image" id="${repo.id}"></div>
                <h4 class="portfolio-slide__title">${repo.name}</h4>
                <div class="portfolio-slide__stars">${repo.stargazers_count} ⭐️</div>
                <a href="${repo.html_url}" class="portfolio-slide__link portfolio-slide__link-code" target="_blank">code</a>
                <a href="${repo.homepage}" class="portfolio-slide__link portfolio-slide__link-site" target="_blank">site</a>
              </div>
            `
            );
            this.renderImage(repo.name, repo.id);
            document.querySelector(".portfolio__title").innerHTML = `Total projects: <span>${reposAmount++}</span>`;
          }
        });
      })
      .catch((error) => console.log("Request failed", error));
  },
};

repositories.render();
