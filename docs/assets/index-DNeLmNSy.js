(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const u=["A5MAE","A6MSO-ASGKITPROG1","A6MSO-PROG2","A6MSO-PROG3","Aula1.Net","B1FW2","B1FW22017","B1LP2","bmteste","caminte","delphi-code-coverage","edu-ricardo.github.io"],n=document.querySelector("#app"),l=()=>{n.innerHTML=`
    <header>
      <h1>Bem-vindo ao meu portfólio</h1>
      <p>Navegue pelas seções acima para conhecer meus projetos.</p>
    </header>
  `},h=async()=>{n.innerHTML=`
    <header>
      <h1>Meus Projetos no GitHub</h1>
      <p>Aqui estão alguns dos meus projetos e experimentos que você pode encontrar no GitHub.</p>
    </header>
    <main>
      <ul id="repos">
      </ul>
    </main>
  `;const i=n.querySelector("#repos");try{const a=(await(await fetch("https://api.github.com/users/edu-ricardo/repos?sort=pushed")).json()).filter(r=>!u.includes(r.name));for(const r of a){const e=document.createElement("li"),o=r.topics.map(d=>`<span class="topic">${d}</span>`).join(""),s=r.homepage?`<a href="${r.homepage}" target="_blank" class="homepage">page</a>`:"";e.innerHTML=`
        <div>
          <a href="${r.html_url}" target="_blank">
            ${r.name}
          </a>
          <p>${r.description||""}</p>
        </div>
        <div>
          ${s}
          ${o}
        </div>
      `,i.appendChild(e)}}catch(t){console.error("Error fetching repositories:",t),n.innerHTML="<p>Erro ao carregar os projetos. Tente novamente mais tarde.</p>"}},m=()=>{n.innerHTML=`
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
  `},c={"/":l,"/projetos":h,"/projetos-no-ar":m},p=()=>{const i=window.location.hash.slice(1)||"/";(c[i]||c["/"])()};window.addEventListener("hashchange",p);window.addEventListener("load",p);
