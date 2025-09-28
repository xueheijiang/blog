 // 要轮换的句子
    const sentences = ['雨刷开到最大了，怎么还是看不清楚路', '真正的道德是 “不伤害他人”，而不是 “不允许自己有任何正常的小念头”', '句子3', '句子4'];
    let i = 0;
    const el = document.getElementById('rotator');
    
    // 定时切换（2秒一次）
    setInterval(() => {
      el.textContent = sentences[i++ % sentences.length];
    }, 2000);
    //
const overlay = document.querySelector('.overlay');
    const ying_cang_neirong = document.getElementById('ying_cang_neirong');

    const ying_cang_button = document.getElementById('ying_cang_button');
    
    const close_Button = document.getElementById('close_Button');
    close_Button.addEventListener('click', () => {
      ying_cang_neirong.classList.add('ying_cang_neirongactive');
      overlay.classList.remove('overlay-fade-in')});
    //先创建一个const变量然后通过标签同步。在后面添加事件监听器并触发修改标签属性的事件
    let clickCount = 0;

   ying_cang_button.addEventListener('click', () => {clickCount++;if (clickCount >= 3) { 
    ying_cang_neirong.classList.remove('ying_cang_neirongactive');
    overlay.classList.add('overlay-fade-in');
    clickCount = 0;}});
  overlay.addEventListener('click', () => {
      ying_cang_neirong.classList.add('ying_cang_neirongactive');
      overlay.classList.remove('overlay-fade-in')});