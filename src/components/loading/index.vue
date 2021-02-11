<template>
  <div class="loading_shade" v-if="isShow">
    <transition name="fade">
      <div class="loadings" v-if="isLoading">
        <div class="loadingBox locate">
          <div class="sk-circle">
            <div class="sk-circle1 sk-child"></div>
            <div class="sk-circle2 sk-child"></div>
            <div class="sk-circle3 sk-child"></div>
            <div class="sk-circle4 sk-child"></div>
            <div class="sk-circle5 sk-child"></div>
            <div class="sk-circle6 sk-child"></div>
            <div class="sk-circle7 sk-child"></div>
            <div class="sk-circle8 sk-child"></div>
            <div class="sk-circle9 sk-child"></div>
            <div class="sk-circle10 sk-child"></div>
            <div class="sk-circle11 sk-child"></div>
            <div class="sk-circle12 sk-child"></div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

  export default {
    name: 'loading',
    data() {
      return {
        isShow: false,
        isLoading: false,
      }
    },
    created() {
      const that = this;
      that.init()
    },
    methods: {
      init() {
        let that = this;
        this.$bus.$on('loading', function (showLoading) {
          that.isShow = showLoading ? true : false;
          if (that.isShow) {
            setTimeout(() => {
              that.isLoading = true;
            }, 50)
          } else {
            that.isLoading = false;
          }
        })
      },
    },
    watch: {}
  }
</script>

<style lang="scss" scoped="scoped">
  .loading_shade {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, .8);
    z-index: 1000;

    .loadings {
      width: 45px; /*no*/
      height: 45px; /*no*/
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate3d(-50%, -50%, 0);
      transform: translate3d(-50%, -50%, 0);

      .loadingBox {
        width: 100%;
        height: 100%;

        b {
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate3d(-50%, -50%, 0);
          transform: translate3d(-50%, -50%, 0);
          z-index: 11000;
          color: #ffffff;
          font-size: 32px;
          -webkit-animation: loadingfont 1.2s infinite ease-in-out alternate;
          animation: loadingfont 1.2s infinite ease-in-out alternate;
        }

      }
    }
  }

  .sk-circle {
    width: 100%;
    height: 100%;
    position: relative;

    .sk-child {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }

    .sk-child:before {
      content: '';
      display: block;
      margin: 0 auto;
      width: 12%;
      height: 12%;
      background-color: #6F7DD8;
      border-radius: 100%;
      -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
      animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
    }

    .sk-circle2 {
      -webkit-transform: rotate(30deg);
      -ms-transform: rotate(30deg);
      transform: rotate(30deg);
    }

    .sk-circle3 {
      -webkit-transform: rotate(60deg);
      -ms-transform: rotate(60deg);
      transform: rotate(60deg);
    }

    .sk-circle4 {
      -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      transform: rotate(90deg);
    }

    .sk-circle5 {
      -webkit-transform: rotate(120deg);
      -ms-transform: rotate(120deg);
      transform: rotate(120deg);
    }

    .sk-circle6 {
      -webkit-transform: rotate(150deg);
      -ms-transform: rotate(150deg);
      transform: rotate(150deg);
    }

    .sk-circle7 {
      -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      transform: rotate(180deg);
    }

    .sk-circle8 {
      -webkit-transform: rotate(210deg);
      -ms-transform: rotate(210deg);
      transform: rotate(210deg);
    }

    .sk-circle9 {
      -webkit-transform: rotate(240deg);
      -ms-transform: rotate(240deg);
      transform: rotate(240deg);
    }

    .sk-circle10 {
      -webkit-transform: rotate(270deg);
      -ms-transform: rotate(270deg);
      transform: rotate(270deg);
    }

    .sk-circle11 {
      -webkit-transform: rotate(300deg);
      -ms-transform: rotate(300deg);
      transform: rotate(300deg);
    }

    .sk-circle12 {
      -webkit-transform: rotate(330deg);
      -ms-transform: rotate(330deg);
      transform: rotate(330deg);
    }

    .sk-circle1:before {
      background-color: #2D4DAB;
      -webkit-animation-delay: -1.2s;
      animation-delay: -1.2s;
    }

    .sk-circle2:before {
      background-color: #2D4DAB;
      -webkit-animation-delay: -1.1s;
      animation-delay: -1.1s;
    }

    .sk-circle3:before {
      background-color: #2D4DAB;
      -webkit-animation-delay: -1s;
      animation-delay: -1s;
    }

    .sk-circle4:before {
      background-color: #2D4DAB;
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }

    .sk-circle5:before {
      background-color: #2D4DAB;
      -webkit-animation-delay: -0.8s;
      animation-delay: -0.8s;
    }

    .sk-circle6:before {
      background-color: #2D4DAB;
      -webkit-animation-delay: -0.7s;
      animation-delay: -0.7s;
    }

    .sk-circle7:before {
      background-color: #2D4DAB;
      -webkit-animation-delay: -0.6s;
      animation-delay: -0.6s;
    }

    .sk-circle8:before {
      background-color: #2D4DAB;
      -webkit-animation-delay: -0.5s;
      animation-delay: -0.5s;
    }

    .sk-circle9:before {
      background-color: #2D4DAB;
      -webkit-animation-delay: -0.4s;
      animation-delay: -0.4s;
    }

    .sk-circle10:before {
      background-color: #2D4DAB;
      -webkit-animation-delay: -0.3s;
      animation-delay: -0.3s;
    }

    .sk-circle11:before {
      background-color: #2D4DAB;
      -webkit-animation-delay: -0.2s;
      animation-delay: -0.2s;
    }

    .sk-circle12:before {
      background-color: #2D4DAB;
      -webkit-animation-delay: -0.1s;
      animation-delay: -0.1s;
    }
  }

  @-webkit-keyframes sk-circleBounceDelay {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes sk-circleBounceDelay {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes loadingfont {
    0% {
      opacity: 1;
    }
    100% {
      opacity: .4;
    }
  }

</style>
