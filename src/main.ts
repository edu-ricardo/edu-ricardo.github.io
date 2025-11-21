import './style.css'
import './portfolio.css'

type TRepo = {
  name: string,
  html_url: string,
  description: string,
  homepage: string,
  topics: string[]
}

const reposToIgnore = [
  'A5MAE',
  'A6MSO-ASGKITPROG1',
  'A6MSO-PROG2',
  'A6MSO-PROG3',
  'Aula1.Net',
  'B1FW2',
  'B1FW22017',
  'B1LP2',
  'bmteste',
  'caminte',
  'delphi-code-coverage',
  'edu-ricardo.github.io'
]

const app = document.querySelector<HTMLDivElement>('#app')!;

const renderHome = () => {
  app.innerHTML = `
    <header>
      <h1>Bem-vindo ao meu portfólio</h1>
      <p>Navegue pelas seções acima para conhecer meus projetos.</p>
    </header>
  `
}

const renderProjetos = async () => {
  app.innerHTML = `
    <header>
      <h1>Meus Projetos no GitHub</h1>
      <p>Aqui estão alguns dos meus projetos e experimentos que você pode encontrar no GitHub.</p>
    </header>
    <main>
      <ul id="repos">
      </ul>
    </main>
  `

  const reposList = app.querySelector<HTMLUListElement>('#repos')!;
  
  try {
    const response = await fetch('https://api.github.com/users/edu-ricardo/repos?sort=pushed');
    const repos = (await response.json())
      .filter((repo: TRepo) => !reposToIgnore.includes(repo.name));

    for (const repo of repos) {
      const repoItem = document.createElement('li');
      const topics = repo.topics.map((topic: any) => `<span class="topic">${topic}</span>`).join('');
      const homepage = repo.homepage ? `<a href="${repo.homepage}" target="_blank" class="homepage">page</a>` : '';
      repoItem.innerHTML = `
        <div>
          <a href="${repo.html_url}" target="_blank">
            ${repo.name}
          </a>
          <p>${repo.description || ''}</p>
        </div>
        <div>
          ${homepage}
          ${topics}
        </div>
      `;
      reposList.appendChild(repoItem);
    }
  } catch (error) {
    console.error('Error fetching repositories:', error);
    app.innerHTML = '<p>Erro ao carregar os projetos. Tente novamente mais tarde.</p>';
  }
}

const renderProjetosNoAr = () => {
  app.innerHTML = `
    <header>
      <h1>Projetos no Ar</h1>
      <p>Links para aplicações e sistemas que estão disponíveis online.</p>
    </header>
    <main>
      <ul id="live-projects">
        <li>
          <a href="https://edu-ricardo.github.io/wiki-rpg/" target="_blank">Wiki RPG</a>
          <p>Uma Wiki com informações de Lore do meu grupo de RPG</p>
          <div class="tags">
            <span class="tag">Web App</span>
            <span class="tag">RPG</span>
            <span class="tag">dnd</span>
          </div>
        </li>
        <li>
          <a href="https://rpg-calendario-b4d5e.firebaseapp.com/" target="_blank">Agendador de Sessões de RPG</a>
          <p>Uma aplicação para meu grupo conseguir encontrar os melhores dias para uma sessão de RPG</p>
          <div class="tags">
            <span class="tag">Web App</span>
            <span class="tag">RPG</span>
            <span class="tag">dnd</span>
          </div>
        </li>
        <!-- Adicione seus links aqui -->
        <!-- <li><a href="URL_DO_PROJETO" target="_blank">Nome do Projeto</a> - Descrição breve.</li> -->
      </ul>
    </main>
  `
}

const routes = {
  '/': renderHome,
  '/projetos': renderProjetos,
  '/projetos-no-ar': renderProjetosNoAr
};

const router = () => {
  const path = window.location.hash.slice(1) || '/';
  const route = routes[path as keyof typeof routes] || routes['/'];
  route();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
