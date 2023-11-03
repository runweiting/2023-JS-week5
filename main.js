import './assets/scss/all.scss';

let data = [
    {
      "id": 0,
      "name": "肥宅心碎賞櫻3日",
      "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
      "area": "高雄",
      "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
      "group": 87,
      "price": 1400,
      "rate": 10
    },
    {
      "id": 1,
      "name": "貓空纜車雙程票",
      "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台北",
      "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
      "group": 99,
      "price": 240,
      "rate": 2
    },
    {
      "id": 2,
      "name": "台中谷關溫泉會1日",
      "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台中",
      "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
      "group": 20,
      "price": 1765,
      "rate": 7
    }
];
// 初始化網頁畫面
function init(){
    let ticketCard = document.querySelector('.ticketCard');
    let str = '';
    data.forEach(function(item){
        str += `<li class="col card border-0 shadow position-relative px-0">
        <span class="tag-l position-absolute top-0 start-0 translate-middle-y bg-secondary fs-5 fw-normal text-white">${item.area}</span>
        <img src="${item.imgUrl}" class="card-img-top mb-1" alt="travel_1" style="height: 180px;">
        <span class="tag-m position-absolute bg-primary fw-normal text-white">${item.rate}</span>
        <div class="d-flex flex-column p-4" style="height: 296px;">
        <h3 class="card-title fs-4 fw-medium text-primary pb-1 border-bottom border-2 border-primary">${item.name}</h3>
        <p class="fw-normal text-info flex-grow-1">${item.description}</p>
        <div class="d-flex justify-content-between">
            <div class="d-flex align-items-center">
            <span class="material-symbols-outlined fs-5 text-primary me-1">
                info
            </span>
            <p class="fw-medium text-primary mb-0">剩下最後 ${item.group} 組</p>
            </div>
            <div class="d-flex align-items-center">
            <span class="fw-medium text-primary me-1">TWD</span>
            <p class="display-8 fw-medium text-primary mb-0">${item.price}</p>
            </div>
        </div>
        </div>
    </li>`
    });
    ticketCard.innerHTML = str;
}
init();

// 地區搜尋
let regionSearch = document.querySelector('#regionSearch');
regionSearch.addEventListener('change',function(e){
    if ( e.target.value == undefined ){
        return
    }
    // 跑 forEach，做判斷，組字串，顯示畫面上
    let str = '';
    data.forEach(function(item){
        if ( e.target.value == item.area ){
            str += `<li class="col-4 card border-0 shadow position-relative px-0">
        <span class="tag-l position-absolute top-0 start-0 translate-middle-y bg-secondary fs-5 fw-normal text-white">${item.area}</span>
        <img src="${item.imgUrl}" class="card-img-top mb-1" alt="travel_1" style="height: 180px;">
        <span class="tag-m position-absolute bg-primary fw-normal text-white">${item.rate}</span>
        <div class="d-flex flex-column p-4" style="height: 296px;">
        <h3 class="card-title fs-4 fw-medium text-primary pb-1 border-bottom border-2 border-primary">${item.name}</h3>
        <p class="fw-normal text-info flex-grow-1">${item.description}</p>
        <div class="d-flex justify-content-between">
            <div class="d-flex align-items-center">
            <span class="material-symbols-outlined fs-5 text-primary me-1">
                info
            </span>
            <p class="fw-medium text-primary mb-0">剩下最後 ${item.group} 組</p>
            </div>
            <div class="d-flex align-items-center">
            <span class="fw-medium text-primary me-1">TWD</span>
            <p class="display-8 fw-medium text-primary mb-0">${item.price}</p>
            </div>
        </div>
        </div>
    </li>`
        }
    });
    let ticketCard = document.querySelector('.ticketCard');
    ticketCard.innerHTML = str;
})

