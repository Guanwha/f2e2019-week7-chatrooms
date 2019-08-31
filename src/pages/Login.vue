<template>
  <div class="full-wh flex-ccc">
    <div class="header flex-rlc">Pick Yourself</div>
    <div class="content flex-ccc">
      <!-- center area -->
      <div class="container login-bg flex-ccc">
        <div class="row full-w full-h">
          <!-- left-area: select animal type, naming -->
          <div class="col-12 col-md-9 a1-main">
            <!-- title -->
            <div class="row justify-content-end a2-title">
              <div class="col-12 col-md-9 flex-ccc">
                <div class="title-main">Welcome</div>
                <div class="title-sub mt-2">阿貓阿狗聊天室</div>
              </div>
            </div>
            <div class="row a2-you">
              <!-- select animal type -->
              <div class="col-12 col-md-3 align-self-center a3-which">
                <button :class="['btn', 'btn-animal', { 'btn-animal-active' : !selectCat }]">狗狗</button>
                <button :class="['btn', 'btn-animal', { 'btn-animal-active' :  selectCat }]">貓貓</button>
              </div>
              <!-- naming -->
              <div class="col-12 col-md-9 a3-name flex-ccc">
                <div class="a4-picture">
                  <div class="shadow"/>
                  <img :src="curAnimalImage">
                </div>
                <input class="form-control" type="text" placeholder="請輸入你想要的暱稱">
                <button class="btn btn-enter" @click="gotoChatRoom">進入聊天</button>
              </div>
            </div>
          </div>
          <!-- right/bottom-area: select animal -->
          <div class="col-12 col-md-3 a1-animals"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { animalImages } from '../commons/constants';

export default {
  name: 'Login',
  data() {
    return {
      selectCat: true,
      selectIdx: 0,
      images: animalImages,
    };
  },
  methods: {
    gotoChatRoom() {
      this.$router.push({ name: 'ChatRoom' });
    },
  },
  computed: {
    curAnimalImage() {
      if (this.selectCat) {
        return this.images.cat[this.selectIdx].img;
      }
      return this.images.dog[this.selectIdx].img;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/mixins';
@import '../styles/variables';

.header {
  width: 100%;
  height: 70px;
  background: $clr-main-lv1;
  color: $clr-main-lv4;
  font-size: $f-size-4;
  font-weight: bold;
  padding-left: 35px;
}
.content {
  width: 100%;
  height: calc(100% - 70px);
  background: $clr-main-lv2;
  @media(min-width: $limit-w-pc) {
    padding-bottom: 70px;
  }
}
.login-bg {
  width: 90%;
  height: 95%;
  background: $clr-main-lv1;
  border-radius: 21px;
  padding: 11px;
  @media(min-width: $limit-w-pc) {
    width: calc(90vh);
    height: 70%;
  }
}
.a1-main {
  height: 80%;
  // background: green;
  @media(min-width: $limit-w-pc) {
    height: 100%;
  }
  .a2-title {
    height: 20%;
    // background: lightblue;
    color: $clr-white;
    .title-main {
      font-size: $f-size-5;
      font-family: 'Fredoka One', cursive;
      letter-spacing: 0.92px;
      @media(min-width: $limit-w-pc) {
        font-size: $f-size-6;
      }
    }
    .title-sub {
      font-size: $f-size-2;
      letter-spacing: 0.48px;
      @media(min-width: $limit-w-pc) {
        font-size: $f-size-3;
      }
    }
  }
  .a2-you {
    height: 80%;
    .a3-which {
      height: 15%;
      // background: orange;
      @include flex-rsac;
      @media(min-width: $limit-w-pc) {
        height: 30%;
        @include flex-csac;
      }
    }
    .a3-name {
      height: 85%;
      // background: pink;
      @media(min-width: $limit-w-pc) {
        height: 100%;
      }
      .a4-picture {
        width: 100%;
        height: 100%;
        position: relative;
        img {
          height: 70%;
          background-size: contain;
          background-repeat: no-repeat;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }
        .shadow {
          width: 30%;
          height: 7%;
          background: $clr-shadow;
          border-radius: 50%;
          position: absolute;
          bottom: 9%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 0;
        }
      }
      input {
        width: 80%;
        background: $clr-main-lv2;
        color: $clr-white;
        border-width: 0;
      }
      .btn-enter {
        width: $f-size-3 * 7;
        height: $f-size-3 * 2;
        border-radius: $f-size-3 * 1;
        color: $clr-main-lv1;
        font-weight: bold;
        font-size: $f-size-3;
        line-height: $f-size-3 * 2;
        @include py(0);
        @include mx(10%);
        @include my(5%);
        background-color: $clr-white;
        &:hover {
          background: $clr-white * 0.8;
        }
      }
    }
  }

  .btn-animal {
    @include py(3px);
    width: $f-size-2 * 5;
    font-size: $f-size-2;
    color: $clr-white;
    border-color: $clr-white;
    @media(min-width: $limit-w-pc) {
      width: $f-size-3 * 5;
      font-size: $f-size-3;
    }
    &:hover {
      background: $clr-white * 0.5;
    }
    &-active {
      color: $clr-selected;
      border-color: $clr-selected;
      &:hover {
        background: $clr-selected * 0.5;
      }
    }
  }
}
.a1-animals {
  height: 20%;
  background: lightgreen;
  @media(min-width: $limit-w-pc) {
    height: 100%;
  }
}
</style>
