<template>
  <div class="container" ref="container">
    <transition name="fade">
      <div class="preload" v-if="!load.canShow">
        <div class="load-img"></div>
        <div class="progress">{{load.progress}}%...</div>
      </div>
    </transition>
    <div class="music-box" :class="{ active: !paused }" @click="handlerToggleMusic">
      <img src="./musicBtn.png"/>
      <!--<audio class="" src="./music.mp3" loop ref="audio"></audio>-->
    </div>
    <div class="arrow">
      <img src="./arrow.png">
    </div>
    <swiper :options="swiperOption" class="swiper-box" ref="mySwiper">
      <swiper-slide class="swiper-item">
        <div class="text-top">
          <div class="user">
            <div class="avatar ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.3s">
              <img src="http://10.10.80.19:8888/uploads/-/system/user/avatar/17/avatar.png" alt="">
            </div>
            <div class="name ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.6s">Hi, <span>小花花</span></div>
            <div class="summary ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.9s">你还记得吗</div>
          </div>
          <div class="date ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.8s">2018.12.12</div>
          <div class="info">
            <div class="head ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="1s">你拥有了</div>
            <div class="body ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="1.3s">赛博威九号平衡车Plus</div>
            <div class="foot ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="1.6s">那是我们的初次相遇</div>
          </div>
        </div>
        <div class="text-bottom">
          <div class="duration ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="2s">至今，已相伴走过 <span>1个月</span></div>
        </div>
        <div class="flash">
          <img src="./flash.png">
        </div>
        <div class="index-device ani" swiper-animate-effect="zoomInDown" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s">
          <img src="./car.png">
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="text-top">
          <div class="user">
            <div class="avatar ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.3s">
              <img src="http://10.10.80.19:8888/uploads/-/system/user/avatar/17/avatar.png" alt="">
            </div>
            <div class="name ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.6s">Hi, <span>小花花</span></div>
            <div class="summary ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.9s">你还记得吗</div>
          </div>
          <div class="date ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.8s">2018.12.12</div>
          <div class="info">
            <div class="head ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="1s">你拥有了</div>
            <div class="body ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="1.3s">赛博威九号平衡车Plus</div>
            <div class="foot ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="1.6s">那是我们的初次相遇</div>
          </div>
        </div>
        <div class="text-bottom">
          <div class="duration ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s" swiper-animate-delay="2s">至今，已相伴走过 <span>1个月</span></div>
        </div>
        <div class="flash">
          <img src="./flash.png">
        </div>
        <div class="index-device ani" swiper-animate-effect="zoomInDown" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s">
          <img src="./car.png">
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item" style="background-color: darkolivegreen">
        <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">Slide 3</p>
      </swiper-slide>
      <swiper-slide class="swiper-item" style="background-color: greenyellow">
        <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">Slide 4</p>
      </swiper-slide>
      <swiper-slide class="swiper-item" style="background-color: blueviolet">
        <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">Slide 5</p>
      </swiper-slide>
      <swiper-slide class="swiper-item" style="background-color: coral">
        <p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">Slide 6</p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiperAnimateCache, swiperAnimate } from '../../assets/swiper.animate1.0.2.min'

export default {
  name: 'index',
  data () {
    return {
      audio: undefined,
      paused: true,
      load: {
        progress: 0,
        num: 0,
        oMusic: undefined,
        aImg: [],
        aSrc: [],
        canShow: false
      },
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        onInit: function (swiper) {
          swiperAnimateCache(swiper)
          swiperAnimate(swiper)
        },
        onSlideChangeStart: function (swiper) {
          console.log(swiper.activeIndex)
          swiper.slides.eq(swiper.activeIndex - 1).find('.ani').removeClass('ani')
        },
        onSlideChangeEnd: function (swiper) {
          swiperAnimate(swiper)
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.audio = new Audio()
    this.audio.loop = true
    this.audio.src = 'http://music.163.com/song/media/outer/url?id=186832.mp3'

    this.load.oMusic = this.$refs.audio
    this.load.aImg = this.$refs.container.querySelectorAll('.data-load')
    this.load.aImg.forEach((item) => {
      this.load.aSrc.push(item.getAttribute('src'))
    })
    for (let i in this.load.aSrc) {
      const oImg = document.createElement('img')
      oImg.src = this.load.aSrc[i]
      oImg.onload = () => {
        this.load.num++
        this.load.progress = parseInt(this.load.num / this.load.aSrc.length * 100)
        this.handlerCanShow()
      }
      oImg.onError = () => {
        window.location.reload()
      }
    }
    window.setTimeout(() => {
      this.handlerCanShow()
    }, 1000)
  },
  methods: {
    handlerCanShow () {
      if (this.load.num === this.load.aSrc.length) {
        this.load.canShow = true
        this.swiper.init()
        swiperAnimate(this.swiper)
      }
    },
    handlerToggleMusic () {
      if (this.audio.paused) {
        this.audio.play()
        this.paused = false
      } else {
        this.audio.pause()
        this.paused = true
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  html, body
    position relative
    height 100%
    font-size 100px
  body
    background #eee
    .container
      width 100%
      height 100%
      .preload
        width 100%
        height 100%
        position absolute
        top 0
        left 0
        background deepskyblue
        z-index 9999
        display flex
        flex-direction column
        justify-content center
        align-items center
        font-size 0
        .load-img
          width 0.9rem
          height 1.5rem
          margin-bottom 0.2rem
          background-image url("./charector.png")
          background-size 630px
          animation gif 1.2s steps(7) infinite both
        .progress
          font-size 0.24rem
      .music-box
        width 0.42rem
        height 0.42rem
        position absolute
        top 0.1rem
        right 0.1rem
        z-index 999
        font-size 0
        overflow hidden
        img
          width 100%
        &.active
          img
            animation rotate 3s linear infinite both
      .arrow
        width 0.39rem
        height 0.28rem
        position absolute
        bottom 0.47rem
        left 50%
        margin-left -0.195rem
        z-index 999
        font-size 0
        animation arrUp 1.5s ease-in-out infinite both
        img
          width 100%
          height 100%
      .swiper-box
          width 100%
          height 100%
          margin 0 auto
        .swiper-item
          height 100%
          text-align center
          font-size 18px
          background-color RGBA(28, 6, 90, 1)
          background-size cover
          background-position center center
          background-repeat no-repeat
          &:nth-of-type(1), &:nth-of-type(2)
            background-image url("./bg-1.png")
            .text-top
              width 100%
              padding-left 0.22rem
              padding-right 0.22rem
              padding-top 0.77rem
              text-align left
              .user
                display flex
                flex-direction row
                justify-content flex-start
                align-items baseline
                .avatar
                  width 0.42rem
                  height 0.42rem
                  border-radius 50%
                  overflow hidden
                  margin-right 0.17rem
                  img
                    width 100%
                    height 100%
                .name
                  height 0.25rem
                  font-size 0.27rem
                  font-weight 600
                  color rgba(255, 255, 255, 1)
                  margin-right 0.13rem
                  span
                    height 0.17rem
                    font-size 0.18rem
                    font-weight 400
                    color rgba(255, 255, 255, 1)
                .summary
                  height 0.12rem
                  font-size 0.13rem
                  font-weight 400
                  color rgba(255, 255, 255, 0.4)
              .date
                height 0.2rem
                font-size 0.27rem
                font-weight 600
                color rgba(255, 255, 255, 1)
                margin-top 0.48rem
                margin-bottom 0.27rem
              .info
                .head, .foot
                  height 0.12rem
                  font-size 0.13rem
                  font-weight 400
                  color rgba(255, 255, 255, 0.6)
                  margin-bottom 0.13rem
                .body
                  height 0.17rem
                  font-size 0.18rem
                  font-weight 400
                  color rgba(255, 255, 255, 1)
                  margin-bottom 0.13rem
            .text-bottom
              width 100%
              padding-left 0.22rem
              padding-right 0.22rem
              text-align left
              position absolute
              bottom 0.88rem
              left 0
              .duration
                height 0.18rem
                font-size 0.18rem
                font-weight 400
                color rgba(255, 255, 255, 0.6)
                span
                  height 0.17rem
                  font-size 0.18rem
                  font-weight 600
                  color rgba(255, 255, 255, 1)
            .flash
              width 100%
              position absolute
              top 0.5rem
              left 0
              img
                width 90%
                animation flash 3s ease-in-out infinite both
            .index-device
              width 1.86rem
              height 1.68rem
              position absolute
              bottom 1.36rem
              left 50%
              margin-left -0.93rem
              img
                width 100%
</style>
