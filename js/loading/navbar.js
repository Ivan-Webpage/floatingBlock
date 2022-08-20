thevar ='\
<body class="row">\
\
    <button class="navCntrl back-white text-black" onclick="navCntrl()"><i class="fa fa-bars"></i></button>\
    <!-- 側拉選單按鈕，手機板才會出現 -->\
    <button onclick="topFunction()" id="goTop" title="Go to top" class="back-blue text-white"><i class="fa fa-sort-asc"\
            aria-hidden="true"></i>Top</button> <!-- 回到最上面 -->\
    <div class="overlay column col-3" id="navigation">\
        <a>\
            <img src="img/去背版包文字＿180_180px＿行銷搬進大程式.png" style="width: 70%;">\
        </a>\
        <div class="overlay-content">\
            <a href="#about">首頁</a>\
            <button class="dropdown-btn">Python 教學影片<i class="fa fa-caret-down"></i></button>\
            <div class="dropdown-container">\
                <a href="https://marketingliveincode.com/?page_id=270">Python 教學影片</a>\
                <a href="https://marketingliveincode.com/?page_id=2532">Line Bot 聊天機器人</a>\
                <a href="https://marketingliveincode.com/?page_id=4512">行銷人轉職爬蟲王實戰｜5大社群＋2大電商</a>\
                <a href="https://marketingliveincode.com/?page_id=2648">Telegram Bot聊天機器人</a>\
            </div>\
            <a href="https://marketingliveincode.com/?page_id=5101">行銷實用工具</a>\
            <a href="https://marketingliveincode.com/?page_id=5109">數據分析實戰</a>\
            <a href="#">程式金融</a>\
            <button class="dropdown-btn">課程筆記<i class="fa fa-caret-down"></i></button>\
            <div class="dropdown-container">\
                <a href="https://marketingliveincode.com/?page_id=5114">實用工具</a>\
            </div>\
            <a href="https://marketingliveincode.com/?page_id=5">關於Ivan</a>\
        </div>\
        <hr class="line-style" />\
\
        <div class="row">\
            <div class="column col-12 social-icon">\
                <a href="https://www.facebook.com/marketingliveincode" class="fa fa-facebook"></a>\
                <a href="mail:ivanyang0606@gmail.com" class="fa fa-google"></a>\
                <a href="https://www.youtube.com/channel/UCfBjDDjwsgGXcj8cdDqWX3A" class="fa fa-youtube"></a>\
                <a href="https://www.instagram.com/ivan____yang" class="fa fa-instagram"></a>\
            </div>\
        </div>\
\
\
\
        <p class="copyright text-blue">©2022 行銷搬進大程式 Marketing Live in Code</p>\
    </div>\
\
'
document.write(thevar);