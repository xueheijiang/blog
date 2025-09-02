 // 要轮换的句子
    const sentences = ['雨刷开到最大了，怎么还是看不清楚路', '真正的道德是 “不伤害他人”，而不是 “不允许自己有任何正常的小念头”', '句子3', '句子4'];
    let i = 0;
    const el = document.getElementById('rotator');
    
    // 定时切换（2秒一次）
    setInterval(() => {
      el.textContent = sentences[i++ % sentences.length];
    }, 2000);