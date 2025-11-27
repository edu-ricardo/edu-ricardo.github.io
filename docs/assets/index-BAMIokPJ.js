(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const m=["A5MAE","A6MSO-ASGKITPROG1","A6MSO-PROG2","A6MSO-PROG3","Aula1.Net","B1FW2","B1FW22017","B1LP2","bmteste","caminte","delphi-code-coverage","edu-ricardo.github.io"],n=document.querySelector("#app"),h=()=>{n.innerHTML=`
    <header>
      <h1>Bem-vindo ao meu portfólio</h1>
      <p>Navegue pelas seções acima para conhecer meus projetos.</p>
    </header>
  `},g=async()=>{n.innerHTML=`
    <header>
      <h1>Meus Projetos no GitHub</h1>
      <p>Aqui estão alguns dos meus projetos e experimentos que você pode encontrar no GitHub.</p>
    </header>
    <main>
      <ul id="repos">
      </ul>
    </main>
  `;const r=n.querySelector("#repos");try{const c=(await(await fetch("https://api.github.com/users/edu-ricardo/repos?sort=pushed")).json()).filter(t=>!m.includes(t.name));for(const t of c){const e=document.createElement("li"),o=t.topics.map(u=>`<span class="topic">${u}</span>`).join("");let a="";t.has_pages&&(a+=`<a href="https://edu-ricardo.github.io/${t.name}" target="_blank" class="homepage">pages</a>`),e.innerHTML=`
        <div>
          <a href="${t.html_url}" target="_blank">
            ${t.name}
          </a>
          <p>${t.description||""}</p>
        </div>
        <div>
          ${a}
          ${o}
        </div>
      `,r.appendChild(e)}}catch(s){console.error("Error fetching repositories:",s),n.innerHTML="<p>Erro ao carregar os projetos. Tente novamente mais tarde.</p>"}},f=()=>{n.innerHTML=`
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
  `},d={"/":h,"/projetos":g,"/projetos-no-ar":f},i=r=>{document.documentElement.setAttribute("data-theme",r),localStorage.setItem("theme",r)},v=document.querySelector("#light-mode-toggle"),b=document.querySelector("#dark-mode-toggle");v.addEventListener("click",()=>i("light"));b.addEventListener("click",()=>i("dark"));const p=localStorage.getItem("theme"),P=window.matchMedia("(prefers-color-scheme: dark)").matches;i(p||(P?"dark":"light"));const l=()=>{const r=window.location.hash.slice(1)||"/";(d[r]||d["/"])()};window.addEventListener("hashchange",l);window.addEventListener("load",l);
