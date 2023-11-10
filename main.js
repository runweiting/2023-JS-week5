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
        let content = `<li class="col-4 mb-9">
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
            let content = `<li class="col-4 mb-9">
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
            let content = `<li class="col-4 mb-9">
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
    let addId = data.length;
    let obj = {};
    obj["id"] = addId++;
    obj["name"] = ticketName.value;
    obj["imgUrl"] = imgUrl.value;
    obj["area"] = sightSpot.value;
    obj["description"] = ticketDescription.value;
    obj["group"] = Number(ticketNum.value);
    obj["price"] = Number(ticketPrice.value);
    obj["rate"] = Number(ticketRate.value);
    data.push(obj);
    clearData();
    init();
});

/* if 判斷： form-group input 是否確實填寫？ --- */
// 否，顯示 <div> alert-message
// 1. 套票名稱是否空白？
ticketName.addEventListener('blur',function(){
  const ticketNameMessage = document.getElementById('ticketName-message');
  if ( ticketName.value.trim() ){
    ticketNameMessage.classList.add('d-none');
  } else {
    ticketNameMessage.classList.remove('d-none');
    ticketNameMessage.innerHTML = `<span class="material-symbols-outlined me-1">error
    </span><span>必填！</span>`
  }
});
// 2. 圖片網址是否通過驗證？
imgUrl.addEventListener('blur',function(){
  const imgUrlMessage = document.getElementById('imgUrl-message');
  // 定義用於 URL 驗證的正規表達式
  // ^: 表示字符串的開始
  // (https?:\/\/)?: 匹配 "http://" 或 "https://://"
  // ([\w.-]+\.[a-z]{2,}): 匹配域名，允許字母、數字、點和連字符。至少需要一個點和兩個字母的頂級域 (TLD)
  // (\/\S*)?$: 匹配可選的路徑（以斜杠開始），後面跟著非空白字符，確保它在字符串的末尾結束
  const reg = /^(https?:\/\/)?([\w.-]+\.[a-z]{2,})(\/\S*)?$/i;
  if ( reg.test(imgUrl.value) ){
    // 如果是有效的 URL，隱藏警告訊息
    imgUrlMessage.classList.add('d-none');
  } else if ( imgUrl.value.trim() === '' ) {
    // 如果輸入為空，清空輸入框，顯示 "必填!" 提示用戶重新輸入
    imgUrlMessage.value = '';
    imgUrlMessage.classList.remove('d-none');
    imgUrlMessage.innerHTML = `<span class="material-symbols-outlined me-1">error</span><span>必填！</span>`
  } else {
    // 如果輸入不是有效URL，清空輸入框，顯示 "請填入正確網址" 
    imgUrlMessage.value = '';
    imgUrlMessage.classList.remove('d-none');
    imgUrlMessage.innerHTML = `<span class="material-symbols-outlined me-1">error</span><span>請輸入正確網址</span>`
  };
});
// 3. 景點地區是否有選擇？
sightSpot.addEventListener('blur',function(){
  const sightSpotMessage = document.getElementById('sightSpot-message');
  // 如果 sightSpot 為假值（undefined、null、false、0、NaN），表示用戶未填寫
  if ( !sightSpot.value ){
    sightSpotMessage.classList.remove('d-none');
    sightSpotMessage.innerHTML = `<span class="material-symbols-outlined me-1">error</span><span>必填！</span>`
  } else {
    sightSpotMessage.classList.add('d-none');
  }
})
// 4. 套票金額是否空白？
ticketPrice.addEventListener('blur',function(){
  const ticketPriceMessage = document.getElementById('ticketPrice-message');
  // 使用正規表達式檢查 ticketPrice 的值是否為正整數
  // ^: 表示字符串的開始
  // [1-9]: 匹配一個介於1到9之間的數字。確保第一個數字不是0
  // \d*: 匹配零個或多個數字（0-9）
  // $: 表示字符串的結尾
  if ( /^[1-9]\d*$/.test(ticketPrice.value) ){
    ticketPriceMessage.classList.add('d-none');
  } else if ( ticketPrice.value === '' ){
    ticketPriceMessage.classList.remove('d-none');
    ticketPriceMessage.innerHTML = `<span class="material-symbols-outlined me-1">error</span><span>必填！</span>`
  } else {
    // 如果輸入不是正整數
    ticketPriceMessage.classList.remove('d-none');
    ticketPriceMessage.innerHTML = `<span class="material-symbols-outlined me-1">error</span><span>金額需為正整數！</span>`
  }
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
};








