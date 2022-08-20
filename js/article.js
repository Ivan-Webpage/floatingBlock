var modal = document.getElementById("myModal");
/* 放大圖片 */
function bigImg(imgURL, alt) {
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = imgURL;
    captionText.innerHTML = alt;
}

var span = document.getElementsByClassName("close")[0];
/* 關閉放大圖片 */
span.onclick = function () {
    modal.style.display = "none";
}

// 請求API載入資料
var data;
var dataUrl = "https://jsonbin.org/rifleak74/article"
var xhr = new XMLHttpRequest()
xhr.open('GET', dataUrl, true)
xhr.send()
xhr.onload = function () {
    var get = JSON.parse(this.responseText);
    data = get['購物籃分析-part2']


    var containar = document.getElementById('containar'); //取得等等在網頁中要呈現的物件

    // 製造hero
    var heroImage = document.createElement("div");
    heroImage.setAttribute("class", "hero-image");

    var heroText = document.createElement("div");
    heroText.setAttribute("class", "hero-text");

    var title = document.createElement("h1");

    title.innerHTML = data['title'];

    var slogan = document.createElement("strong");
    slogan.innerHTML = data.slogan;

    heroText.appendChild(title);
    heroText.appendChild(slogan);
    heroImage.appendChild(heroText);
    containar.appendChild(heroImage); // 塞進網頁
    // 製造內文
    var bodycontent = document.createElement("div");
    bodycontent.setAttribute("class", "body-content");

    getkey = Object.keys(data.paragraph)
    for (var i = 0; i < getkey.length; i++) {
        var objbtm = document.createElement("button");
        objbtm.setAttribute("class", 'accordion back-blue text-white');
        var objh2 = document.createElement("h2");
        objh2.setAttribute("id", getkey[i]);
        var objp = document.createElement("div");
        objp.setAttribute("class", "paragraph");
        objh2.innerHTML = i + '. ' + getkey[i];

        //----- 內文處理 -----
        var getArticle = data.paragraph[getkey[i]]; // 先抓到內文
        getArticle = '<p>　　' + getArticle + '</p>'
        getArticle = getArticle.replace('<br>', '</p><br></p>') // 所有的換行都分開標籤
        // 圖片替換
        var allMedia = data.media
        for (var j = 0; j < allMedia.length; j++) {
            getArticle = getArticle.replace(
                '%media' + allMedia[j].name + '%',
                '</p><img id=' + data.media[j].name +
                ' src=' + allMedia[j].location +
                ' alt=' + allMedia[j].alt +
                ' class="article-img" onclick=bigImg("' + allMedia[j].location + '","' + allMedia[j].alt +
                '")></img><figcaption class="article-img-alt text-gray">圖' + (j + 1) +
                '. ' + allMedia[j].alt + '</figcaption><br><p>　　'
            );
        };
        // 程式碼替換
        var allCode = data.code
        for (var j = 0; j < allCode.length; j++) {
            getArticle = getArticle.replace(
                '%code' + allCode[j].name + '%',
                '</p>' + allCode[j].content + '<p>　　');
        };
        // 引文替換
        var allQuote = data.quote
        for (var j = 0; j < allQuote.length; j++) {
            // 準備引文內容
            var qut = '</p><ul>'
            var theType = ''
            switch (allQuote[j].type) {
                case 'list':
                    theType = 'list-style-type:square;';
                    break;
                case 'emphasize':
                    theType = 'color:#4e83b5; font-weight:bold; font-size:25px;';
                    break;
                case 'number':
                    theType = 'list-style-type:decimal;';
                    break;
                default:
                    console('Json資料有誤');
            }
            for (var k = 0; k < allQuote[j].content.length; k++) {
                qut = qut + '<li style="'+theType+'">' + allQuote[j].content[k] + '</li>';
            };
            qut = qut + '</ul><p>　　';

            getArticle = getArticle.replace(
                '%quote' + allQuote[j].name + '%',
                qut);
        };
        objp.innerHTML = getArticle;

        if (getkey[i] != "introduction") { // 檢查是否是最前面的前言，前言就沒必要立標題了
            objbtm.appendChild(objh2);
            bodycontent.appendChild(objbtm); // 塞進bodycontent 物件
            bodycontent.appendChild(objp); // 塞進bodycontent 物件

            /* 標題收合功能 */
            objbtm.addEventListener("click", function () {
                /* 滑鼠上浮時 */
                this.classList.toggle("active");

                /* 顯示藏起來的部分 */
                var panel = this.nextElementSibling;
                if (panel.style.display == "none") {
                    panel.style.display = "block";
                } else {
                    panel.style.display = "none";
                }
            });
        } else {
            bodycontent.appendChild(objp); // 塞進bodycontent 物件
            // 插入目錄
            var catalogContainer = document.createElement("div");
            catalogContainer.setAttribute("class", "catalog-container back-light-gray");
            var catalogTitle = document.createElement("h2");
            var catalogContent = document.createElement("div");
            catalogTitle.innerHTML = '目錄';

            var content = '<ul>';
            for (var j = 1; j < getkey.length; j++) {
                content = content + '<li>' + j + '. <a href = #' + getkey[j] + '>' + getkey[j] + '</a></li>';
            };
            content = content + '</ul>'
            catalogContent.innerHTML = content;
            catalogContainer.appendChild(catalogTitle);
            catalogContainer.appendChild(catalogContent);
            bodycontent.appendChild(catalogContainer); // 塞進bodycontent 物件
        };


    };
    containar.appendChild(bodycontent); // 塞進網頁
}





