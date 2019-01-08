/* eslint-disable */
let audioInfo = {
  autoplay: false,
  testAutoPlay () {
    // 代码同，略...
  },
  // 监听页面的点击事件，一旦点过了就能autoplay了
  setAutoPlayWhenClick () {
    function setAutoPlay () {
      // 设置自动播放为true
      audioInfo.autoplay = true;
      document.removeEventListener('click', setAutoPlay);
      document.removeEventListener('touchend', setAutoPlay);
    }
    document.addEventListener('click', setCallback);
    document.addEventListener('touchend', setCallback);
  },
  init () {
    // 检测是否能自动播放
    audioInfo.testAutoPlay().then(autoplay => {
      if (!audioInfo.autoplay) {
        audioInfo.autoplay = autoplay;
      }
    });
    // 用户点击交互之后，设置成能自动播放
    audioInfo.setAutoPlayWhenClick();
  }
};
audioInfo.init();
export default audioInfo;
