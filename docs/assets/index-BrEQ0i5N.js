(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const l=["A5MAE","A6MSO-ASGKITPROG1","A6MSO-PROG2","A6MSO-PROG3","Aula1.Net","B1FW2","B1FW22017","B1LP2","bmteste","caminte","delphi-code-coverage","edu-ricardo.github.io"],a=document.querySelector("#app"),u=()=>{a.innerHTML=`
    <header>
      <h1>Bem-vindo ao meu portfólio</h1>
      <p>Navegue pelas seções acima para conhecer meus projetos.</p>
    </header>
  `},m=async()=>{a.innerHTML=`
    <header>
      <h1>Meus Projetos no GitHub</h1>
      <p>Aqui estão alguns dos meus projetos e experimentos que você pode encontrar no GitHub.</p>
    </header>
    <main>
      <ul id="repos">
      </ul>
    </main>
  `;const n=a.querySelector("#repos");try{const i=(await(await fetch("https://api.github.com/users/edu-ricardo/repos?sort=pushed")).json()).filter(r=>!l.includes(r.name));for(const r of i){const e=document.createElement("li"),o=r.topics.map(d=>`<span class="topic">${d}</span>`).join(""),t=r.homepage?`<a href="${r.homepage}" target="_blank" class="homepage">page</a>`:"";e.innerHTML=`
        <div>
          <a href="${r.html_url}" target="_blank">
            ${r.name}
          </a>
          <p>${r.description||""}</p>
        </div>
        <div>
          ${t}
          ${o}
        </div>
      `,n.appendChild(e)}}catch(s){console.error("Error fetching repositories:",s),a.innerHTML="<p>Erro ao carregar os projetos. Tente novamente mais tarde.</p>"}},h=()=>{a.innerHTML=`
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
  `},p={"/":u,"/projetos":m,"/projetos-no-ar":h},c=()=>{const n=window.location.hash.slice(1)||"/";(p[n]||p["/"])()};window.addEventListener("hashchange",c);window.addEventListener("load",c);
