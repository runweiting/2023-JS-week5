(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();let l=[{id:0,name:"肥宅心碎賞櫻3日",imgUrl:"https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",area:"高雄",description:"賞櫻花最佳去處。肥宅不得不去的超讚景點！",group:87,price:1400,rate:10},{id:1,name:"貓空纜車雙程票",imgUrl:"https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"台北",description:"乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",group:99,price:240,rate:2},{id:2,name:"台中谷關溫泉會1日",imgUrl:"https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"台中",description:"全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",group:20,price:1765,rate:7}],c=document.querySelector(".ticketCard");const n=document.querySelector(".searchResult");function d(){let i="",s=[];l.forEach(function(e,t){let r=`<li class="col-4 mb-9">
        <div class="card border-0 shadow position-relative">
          <span class="tag-l position-absolute top-0 start-0 translate-middle-y bg-secondary fs-5 fw-normal text-white">${e.area}</span>
          <img src="${e.imgUrl}" class="card-img-top mb-1" alt="travel_1" style="height: 180px;">
          <span class="tag-m position-absolute bg-primary fw-normal text-white">${e.rate}</span>
          <div class="d-flex flex-column p-4" style="height: 296px;">
            <h3 class="card-title fs-4 fw-medium text-primary pb-1 border-bottom border-2 border-primary">${e.name}</h3>
            <p class="fw-normal text-info flex-grow-1">${e.description}</p>
            <div class="d-flex justify-content-between">
              <div class="d-flex align-items-center">
                <span class="material-symbols-outlined fs-5 text-primary me-1">
                  info
                </span>
                <p class="fw-medium text-primary mb-0">剩下最後 ${e.group} 組</p>
              </div>
              <div class="d-flex align-items-center">
                <span class="fw-medium text-primary me-1">TWD</span>
                <p class="display-8 fw-medium text-primary mb-0">${e.price}</p>
              </div>
            </div>
          </div>
        </div>
      </li>`;i+=r,s.push(t)}),c.innerHTML=i,n.innerHTML=`<p class="searchResult mb-0 text-info" style="width: 255px">本次搜尋共 ${s.length} 筆資料</p>`}d();const x=document.querySelector("#regionSearch");x.addEventListener("change",function(i){let s="",e=[];l.forEach(function(t,r){if(i.target.value=="全部地區"){let a=`<li class="col-4 mb-9">
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
          </li>`;s+=a,e.push(r)}if(i.target.value==t.area){let a=`<li class="col-4 mb-9">
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
          </li>`;s+=a,e.push(r)}}),c.innerHTML=s,n.innerHTML=`<p class="searchResult mb-0 text-info" style="width: 255px">本次搜尋共 ${e.length} 筆資料</p>`});const h=document.querySelector(".addTicket"),p=document.querySelector("#ticketName"),m=document.querySelector("#imgUrl"),u=document.querySelector("#sightSpot"),f=document.querySelector("#ticketPrice"),g=document.querySelector("#ticketNum"),y=document.querySelector("#ticketRate"),b=document.querySelector("#ticketDescription");h.addEventListener("click",function(i){let s=l.length,e={};e.id=s++,e.name=p.value,e.imgUrl=m.value,e.area=u.value,e.description=b.value,e.group=Number(g.value),e.price=Number(f.value),e.rate=Number(y.value),l.push(e),v(),d()});function v(){p.value="",m.value="",u.value="",b.value="",g.value="",f.value="",y.value=""}
