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

// 共用 DOM
let ticketCard = document.querySelector('.ticketCard');
const searchResult = document.querySelector('.searchResult');

// 初始化網頁畫面
function init(){
    let str = '';
    // 預備寫入：forEach 後的 index
    let dataNum = [];
    data.forEach(function(item,index){
        let content = `<li class="col-4">
        <div class="card border-0 shadow position-relative">
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
        </div>
      </li>`;
        str += content;
        dataNum.push(index)
    });
    ticketCard.innerHTML = str;
    
    // 顯示 搜尋資料 的筆數
    searchResult.innerHTML = `<p class="searchResult mb-0 text-info" style="width: 255px">本次搜尋共 ${dataNum.length} 筆資料</p>`;
}
init();

// select 地區搜尋 + 監聽
const regionSearch = document.querySelector('#regionSearch');
regionSearch.addEventListener('change',function(e){
    // 預備寫入：重組的字串
    let str = '';
    // 預備寫入：forEach 後的 index
    let dataNum = [];

    // select 地區搜尋
    data.forEach(function(item,index){
        // select 全部地區
        if ( e.target.value == "全部地區" ){
            let content = `<li class="col-4">
            <div class="card border-0 shadow position-relative">
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
            </div>
          </li>`;
            str += content;
            dataNum.push(index)
        };
        // select 其他地區
        if ( e.target.value == item.area ){
            let content = `<li class="col-4 card border-0 shadow position-relative px-0">
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
            </li>`;
            str += content;
            dataNum.push(index)
        };
    });
    ticketCard.innerHTML = str;
    
    // 顯示 搜尋資料 的筆數
    searchResult.innerHTML = `<p class="searchResult mb-0 text-info" style="width: 255px">本次搜尋共 ${dataNum.length} 筆資料</p>`;
});

// form 新增旅遊套票 + 監聽
const addTicket = document.querySelector('.addTicket');
const ticketName = document.querySelector('#ticketName');
const imgUrl = document.querySelector('#imgUrl');
const sightSpot = document.querySelector('#sightSpot');
const ticketPrice = document.querySelector('#ticketPrice');
const ticketNum = document.querySelector('#ticketNum');
const ticketRate = document.querySelector('#ticketRate');
const ticketDescription = document.querySelector('#ticketDescription');
addTicket.addEventListener('click',function(e){
    // 宣告空物件、input value 取值並寫入 data
    let obj = {};
    obj["name"] = ticketName.value;
    obj["imgUrl"] = imgUrl.value;
    obj["area"] = sightSpot.value;
    obj["description"] = ticketDescription.value;
    obj["group"] = ticketNum.value;
    obj["price"] = ticketPrice.value;
    obj["rate"] = ticketRate.value;
    data.push(obj);
    clearData();
    init();
});

// 清空 input value
function clearData(){
    ticketName.value = '';
    imgUrl.value = '';
    sightSpot.value = '';
    ticketDescription.value = '';
    ticketNum.value = '';
    ticketPrice.value = '';
    ticketRate.value = ''
}









