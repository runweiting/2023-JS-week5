import './assets/scss/all.scss';

// 共用 DOM
let ticketCard = document.querySelector('.ticketCard');
const searchResult = document.querySelector('.searchResult');


let data = [];

// 1. 初始化網頁畫面 init
function init(){
  axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
  .then(function(response){
    data = response.data['data'];
    renderData();
    renderC3();
  })
  .catch(function (error) {
    console.log(error);
  });
};
init();

// 2. 渲染網頁畫面 renderData
// 設定參數 region 的預設值為 "全部地區"
function renderData(region = "全部地區"){
  const filterData = region === '全部地區'?
  data : data.filter(item => item.area === region
  );
  // searchResult 可以利用 filterData 取值
  searchResult.textContent = filterData.length?
  `本次搜尋共 ${filterData.length} 筆資料` : "查無此關鍵字資料";
  let content = '';
  filterData.forEach(function(item){
      content += `<li class="col-4 mb-9">
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
  });
  ticketCard.innerHTML = content;
};

// 3. 渲染 C3 圖表 renderC3
// 套票地區的數量佔比
// data = [{area: "高雄",..},..]
// areaNum = {'高雄': 1,..}
// areaName = ['高雄',..]
// ary = ['高雄',1]
// newData = [['高雄',1],..]
function renderC3(){
  let areaNum = {};
  data.forEach(function(item){
    if (areaNum[item.area] == undefined){
      areaNum[item.area] = 1
    } else {
      areaNum[item.area]++
    }
  });
  // donut 圖表顯示順序為：高雄、台北、台中
  let newData = [];
  let areaName = Object.keys(areaNum);
  areaName.forEach(function(item){
    let ary = [];
    ary.push(item);
    ary.push(areaNum[item]);
    newData.push(ary)
  });
  // donut 圖表顯示順序為：台北、台中、高雄
  let newDataOrder = [
    ['台北',areaNum['台北']],
    ['台中',areaNum['台中']],
    ['高雄',areaNum['高雄']],
  ];
  let chart = c3.generate({
    bindto: '.chart',
    data: {
      columns: newDataOrder,
      type: 'donut',
      colors: {
        '台北': '#26BFC7',
        '台中': '#5151D3',
        '高雄': '#E68618'
      }
    },
    donut: {
      title: '套票地區的數量比例'
    },
    size: {
      height: 320, //調整圖表高度
   }
  })
};

// 4. 篩選資料 + 監聽
const regionSearch = document.querySelector('#regionSearch');
regionSearch.addEventListener('change',function(e){
  renderData(e.target.value)
});

// 5. 新增旅遊套票 + 監聽
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
    obj["name"] = ticketName.value.trim();
    obj["imgUrl"] = imgUrl.value.trim();
    obj["area"] = sightSpot.value.trim();
    obj["description"] = ticketDescription.value.trim();
    obj["group"] = Number(ticketNum.value.trim());
    obj["price"] = Number(ticketPrice.value.trim());
    obj["rate"] = Number(ticketRate.value.trim());
    // if 判斷：form-group input 是否都有填寫？（物件帶入陣列方法）
    // includes() 判斷陣列是否包含特定的元素，回傳 true 或 false
    if (Object.values(obj).includes('')){
      alert('每個欄位都為必填！')
    } else {
      data.push(obj);
      const addTicketForm = document.querySelector('.addTicketForm');
      // 新增套票後，將地區搜尋的下拉選單的值設為 "全部地區"，以即時顯示所有地區的套票
      regionSearch.value = "全部地區";
      renderData("全部地區");
      addTicketForm.reset();
    }
    renderData();
    renderC3();
});

/* if 判斷： form-group input 是否確實填寫？ --- */
// 否，顯示 <div> alert-message
// 1. 套票名稱是否空白？
ticketName.addEventListener('blur',function(){
  const ticketNameMessage = document.getElementById('ticketName-message');
  if (ticketName.value.trim()){
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
  if (reg.test(imgUrl.value)){
    // 如果是有效的 URL，隱藏警告訊息
    imgUrlMessage.classList.add('d-none');
  } else if (imgUrl.value.trim() === '') {
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
  if (!sightSpot.value){
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
  if (/^[1-9]\d*$/.test(ticketPrice.value)){
    ticketPriceMessage.classList.add('d-none');
  } else if (ticketPrice.value === ''){
    ticketPriceMessage.classList.remove('d-none');
    ticketPriceMessage.innerHTML = `<span class="material-symbols-outlined me-1">error</span><span>必填！</span>`
  } else {
    // 如果輸入不是正整數
    ticketPriceMessage.classList.remove('d-none');
    ticketPriceMessage.innerHTML = `<span class="material-symbols-outlined me-1">error</span><span>金額需為正整數！</span>`
  }
});
// 5. 套票組數是否空白？
ticketNum.addEventListener('blur',function(){
  const ticketNumMessage = document.getElementById('ticketNum-message');
  if(/^[1-9]\d*$/.test(ticketNum.value)){
    ticketNumMessage.classList.add('d-none');
  } else if (ticketNum.value === ''){
    ticketNumMessage.classList.remove('d-none');
    ticketNumMessage.innerHTML = `<span class="material-symbols-outlined me-1">error</span><span>必填！</span>`
  } else {
    ticketNumMessage.classList.remove('d-none');
    ticketNumMessage.innerHTML = `<span class="material-symbols-outlined me-1">error</span><span>組數需為正整數！</span>`
  }
});
// 6. 套票星級是否空白？
ticketRate.addEventListener('blur',function(){
  const ticketRateMessage = document.getElementById('ticketRate-message');
  if (/^[1-9]\d*$/.test(ticketRate.value)){
    ticketRateMessage.classList.add('d-none');
  } else if (ticketRate.value === ''){
    ticketRateMessage.classList.remove('d-none');
    ticketRateMessage.innerHTML = `<span class="material-symbols-outlined me-1">error</span><span>必填！</span>`
  } else {
    ticketRateMessage.classList.remove('d-none');
    ticketRateMessage.innerHTML = `<span class="material-symbols-outlined me-1">error</span><span>請輸入1-10星級整數！</span>`
  }
});
// 7. 套票敘述是否空白？
ticketDescription.addEventListener('keyup',function(){
  const ticketDescriptionMessage = document.getElementById('ticketDescription-message');
  // /^.{1,100}$/ 檢查字符串的長度必須在1到100之間
  // ^: 表示字符串的開始
  // .{1,100}: 匹配任意字符（.）一次到一百次（{1,100}），即字符的數量在1到100之間
  // $: 表示字符串的結尾。
  if(/^.{1-100}$/.test(ticketDescription.value.trim())){
    ticketDescriptionMessage.classList.add('d-none')
  } else if (ticketDescription.value.trim() === ''){
    ticketDescriptionMessage.classList.remove('d-none');
    ticketDescriptionMessage.innerHTML = `<span class="material-symbols-outlined me-1">error</span><span>必填！</span>`
  } else {
    ticketDescriptionMessage.classList.remove('d-none');
    ticketDescriptionMessage.innerHTML = `<span class="material-symbols-outlined me-1">error</span><span>目前可填寫字數${100 - ticketDescription.value.trim().length}個字</span>`
  }
})








