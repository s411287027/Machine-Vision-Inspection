function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const hamburger = document.querySelector(".hamburger");
    
    // 切換 class "active" 來顯示或隱藏選單
    navLinks.classList.toggle("active");
    
    // 這裡可以加一點漢堡圖示變成 X 的動畫邏輯（非必須但很好看）
    // 目前保持簡單切換功能
}

// 點擊頁面其他地方時關閉選單（優化體驗）
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById("navLinks");
    const hamburger = document.querySelector(".hamburger");
    const isClickInside = navLinks.contains(event.target) || hamburger.contains(event.target);

    if (!isClickInside && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// 設定音樂預設音量為 30% (比較柔和)
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById("bgm");
    if(audio) {
        audio.volume = 0.3; 
    }
});