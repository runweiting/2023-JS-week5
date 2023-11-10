(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();let o=[{id:0,name:"肥宅心碎賞櫻3日",imgUrl:"https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",area:"高雄",description:"賞櫻花最佳去處。肥宅不得不去的超讚景點！",group:87,price:1400,rate:10},{id:1,name:"貓空纜車雙程票",imgUrl:"https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"台北",description:"乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",group:99,price:240,rate:2},{id:2,name:"台中谷關溫泉會1日",imgUrl:"https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"台中",description:"全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",group:20,price:1765,rate:7}],p=document.querySelector(".ticketCard");const u=document.querySelector(".searchResult");function f(){let e="",i=[];o.forEach(function(t,s){let a=`<li class="col-4 mb-9">
        <div class="card border-0 shadow position-relative">
          <span class="tag-l position-absolute top-0 start-0 translate-middle-y bg-secondary fs-5 fw-normal text-white">${t.area}</span>
          <img src="${t.imgUrl}" class="card-img-top mb-1" alt="travel_1" style="height: 180px;">
          <span class="tag-m position-absolute bg-primary fw-normal text-white">${t.rate}</span>
          <div class="d-flex flex-column p-4" style="height: 296px;">
            <h3 class="card-title fs-4 fw-medium text-primary pb-1 border-bottom border-2 border-primary">${t.name}</h3>
            <p class="fw-normal text-info flex-grow-1">${t.description}</p>
            <div class="d-flex justify-content-between">
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-5 text-primary me-1">
                  info
                </span>
                <p class="fw-medium text-primary mb-0">剩下最後 ${t.group} 組</p>
              </div>
              <div class="d-flex align-items-center">
                <span class="fw-medium text-primary me-1">TWD</span>
                <p class="display-8 fw-medium text-primary mb-0">${t.price}</p>
              </div>
            </div>
          </div>
        </div>
      </li>`;e+=a,i.push(s)}),p.innerHTML=e,u.innerHTML=`<p class="searchResult mb-0 text-info" style="width: 255px">本次搜尋共 ${i.length} 筆資料</p>`}f();const v=document.querySelector("#regionSearch");v.addEventListener("change",function(e){let i="",t=[];o.forEach(function(s,a){if(e.target.value=="全部地區"){let r=`<li class="col-4 mb-9">
            <div class="card border-0 shadow position-relative">
              <span class="tag-l position-absolute top-0 start-0 translate-middle-y bg-secondary fs-5 fw-normal text-white">${s.area}</span>
              <img src="${s.imgUrl}" class="card-img-top mb-1" alt="travel_1" style="height: 180px;">
              <span class="tag-m position-absolute bg-primary fw-normal text-white">${s.rate}</span>
              <div class="d-flex flex-column p-4" style="height: 296px;">
                <h3 class="card-title fs-4 fw-medium text-primary pb-1 border-bottom border-2 border-primary">${s.name}</h3>
                <p class="fw-normal text-info flex-grow-1">${s.description}</p>
                <div class="d-flex justify-content-between">
                  <div class="d-flex align-items-center">
                    <span class="material-symbols-outlined fs-5 text-primary me-1">
                      info
                    </span>
                    <p class="fw-medium text-primary mb-0">剩下最後 ${s.group} 組</p>
                  </div>
                  <div class="d-flex align-items-center">
                    <span class="fw-medium text-primary me-1">TWD</span>
                    <p class="display-8 fw-medium text-primary mb-0">${s.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>`;i+=r,t.push(a)}if(e.target.value==s.area){let r=`<li class="col-4 mb-9">
            <div class="card border-0 shadow position-relative">
              <span class="tag-l position-absolute top-0 start-0 translate-middle-y bg-secondary fs-5 fw-normal text-white">${s.area}</span>
              <img src="${s.imgUrl}" class="card-img-top mb-1" alt="travel_1" style="height: 180px;">
              <span class="tag-m position-absolute bg-primary fw-normal text-white">${s.rate}</span>
              <div class="d-flex flex-column p-4" style="height: 296px;">
                <h3 class="card-title fs-4 fw-medium text-primary pb-1 border-bottom border-2 border-primary">${s.name}</h3>
                <p class="fw-normal text-info flex-grow-1">${s.description}</p>
                <div class="d-flex justify-content-between">
                  <div class="d-flex align-items-center">
                    <span class="material-symbols-outlined fs-5 text-primary me-1">
                      info
                    </span>
                    <p class="fw-medium text-primary mb-0">剩下最後 ${s.group} 組</p>
                  </div>
                  <div class="d-flex align-items-center">
                    <span class="fw-medium text-primary me-1">TWD</span>
                    <p class="display-8 fw-medium text-primary mb-0">${s.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>`;i+=r,t.push(a)}}),p.innerHTML=i,u.innerHTML=`<p class="searchResult mb-0 text-info" style="width: 255px">本次搜尋共 ${t.length} 筆資料</p>`});const h=document.querySelector(".addTicket"),c=document.querySelector("#ticketName"),l=document.querySelector("#imgUrl"),d=document.querySelector("#sightSpot"),n=document.querySelector("#ticketPrice"),g=document.querySelector("#ticketNum"),y=document.querySelector("#ticketRate"),b=document.querySelector("#ticketDescription");h.addEventListener("click",function(e){let i=o.length,t={};t.id=i++,t.name=c.value,t.imgUrl=l.value,t.area=d.value,t.description=b.value,t.group=Number(g.value),t.price=Number(n.value),t.rate=Number(y.value),o.push(t),x(),f()});c.addEventListener("blur",function(){const e=document.getElementById("ticketName-message");c.value.trim()?e.classList.add("d-none"):(e.classList.remove("d-none"),e.innerHTML=`<span class="material-symbols-outlined me-1">error
    </span><span>必填！</span>`)});l.addEventListener("blur",function(){const e=document.getElementById("imgUrl-message");/^(https?:\/\/)?([\w.-]+\.[a-z]{2,})(\/\S*)?$/i.test(l.value)?e.classList.add("d-none"):l.value.trim()===""?(e.value="",e.classList.remove("d-none"),e.innerHTML='<span class="material-symbols-outlined me-1">error</span><span>必填！</span>'):(e.value="",e.classList.remove("d-none"),e.innerHTML='<span class="material-symbols-outlined me-1">error</span><span>請輸入正確網址</span>')});d.addEventListener("blur",function(){const e=document.getElementById("sightSpot-message");d.value?e.classList.add("d-none"):(e.classList.remove("d-none"),e.innerHTML='<span class="material-symbols-outlined me-1">error</span><span>必填！</span>')});n.addEventListener("blur",function(){const e=document.getElementById("ticketPrice-message");/^[1-9]\d*$/.test(n.value)?e.classList.add("d-none"):n.value===""?(e.classList.remove("d-none"),e.innerHTML='<span class="material-symbols-outlined me-1">error</span><span>必填！</span>'):(e.classList.remove("d-none"),e.innerHTML='<span class="material-symbols-outlined me-1">error</span><span>金額需為正整數！</span>')});function x(){c.value="",l.value="",d.value="",b.value="",g.value="",n.value="",y.value=""}
