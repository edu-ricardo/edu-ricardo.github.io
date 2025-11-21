(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`A5MAE`,`A6MSO-ASGKITPROG1`,`A6MSO-PROG2`,`A6MSO-PROG3`,`Aula1.Net`,`B1FW2`,`B1FW22017`,`B1LP2`,`bmteste`,`caminte`,`delphi-code-coverage`,`edu-ricardo.github.io`],t=document.querySelector(`#app`),n=()=>{t.innerHTML=`
    <header>
      <h1>Bem-vindo ao meu portfólio</h1>
      <p>Navegue pelas seções acima para conhecer meus projetos.</p>
    </header>
  `},r=async()=>{t.innerHTML=`
    <header>
      <h1>Meus Projetos no GitHub</h1>
      <p>Aqui estão alguns dos meus projetos e experimentos que você pode encontrar no GitHub.</p>
    </header>
    <main>
      <ul id="repos">
      </ul>
    </main>
  `;let n=t.querySelector(`#repos`);try{let t=(await(await fetch(`https://api.github.com/users/edu-ricardo/repos?sort=pushed`)).json()).filter(t=>!e.includes(t.name));for(let e of t){let t=document.createElement(`li`),r=e.topics.map(e=>`<span class="topic">${e}</span>`).join(``),i=e.homepage?`<a href="${e.homepage}" target="_blank" class="homepage">page</a>`:``;t.innerHTML=`
        <div>
          <a href="${e.html_url}" target="_blank">
            ${e.name}
          </a>
          <p>${e.description||``}</p>
        </div>
        <div>
          ${i}
          ${r}
        </div>
      `,n.appendChild(t)}}catch(e){console.error(`Error fetching repositories:`,e),t.innerHTML=`<p>Erro ao carregar os projetos. Tente novamente mais tarde.</p>`}},i=()=>{t.innerHTML=`
    <header>
      <h1>Projetos no Ar</h1>
      <p>Links para aplicações e sistemas que estão disponíveis online.</p>
    </header>
    <main>
      <ul>
        <!-- Adicione seus links aqui -->
        <!-- <li><a href="URL_DO_PROJETO" target="_blank">Nome do Projeto</a> - Descrição breve.</li> -->
      </ul>
    </main>
  `},a={"/":n,"/projetos":r,"/projetos-no-ar":i},o=()=>{(a[window.location.hash.slice(1)||`/`]||a[`/`])()};window.addEventListener(`hashchange`,o),window.addEventListener(`load`,o);