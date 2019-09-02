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
                <button :class="['btn', 'btn-animal', { 'btn-animal-active' : !isCat }]" @click='selectDog'>狗狗</button>
                <button :class="['btn', 'btn-animal', { 'btn-animal-active' :  isCat }]" @click='selectCat'>貓貓</button>
              </div>
              <!-- naming -->
              <div class="col-12 col-md-9 a3-name flex-ccc">
                <div class="a4-picture">
                  <div class="shadow"/>
                  <img :src="curAnimalImage">
                </div>
                <input class="form-control" type="text" placeholder="請輸入你想要的暱稱" v-model='name'>
                <!-- send button -->
                <button class="btn btn-enter" @click="gotoChatRoom" :disabled='name.length === 0'>進入聊天</button>
              </div>
            </div>
          </div>
          <!-- right/bottom-area: select animal -->
          <div class="col-12 col-md-3 a1-animals">
            <div class='a2-animal flex-ccc'
                 :class="[{ 'a2-animal-active' : (selectIdx === parseInt(key)) }]"
                 v-for='(animal, key) in curAnimals'
                 :key='key'
                 @click='selectSkin(parseInt(key))'>
              <img :src="animal.img">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { animalImages } from '../commons/constants';

export default {
  name: 'Login',
  data() {
    return {
      isCat: true,
      selectIdx: 0,
      images: animalImages,
      maxDog: Object.keys(animalImages.dog).length,
      maxCat: Object.keys(animalImages.cat).length,
      name: '',
    };
  },
  methods: {
    selectDog() {
      this.isCat = false;
    },
    selectCat() {
      this.isCat = true;
    },
    selectSkin(idx) {
      if (this.isCat) {
        this.selectIdx = (idx < 0) ? 0 : idx;
        this.selectIdx = ((this.selectIdx >= this.maxCat) ? this.maxDog - 1 : this.selectIdx);
      }
      else {
        this.selectIdx = (idx < 0) ? 0 : idx;
        this.selectIdx = ((this.selectIdx >= this.maxDog) ? this.maxDog - 1 : this.selectIdx);
      }
    },
    gotoChatRoom() {
      // send the login to vuex
      const payload = {
        isCat: this.isCat,
        selectIdx: this.selectIdx,
        name: this.name,
      };
      this.loginChat(payload);

      // change page
      this.$router.push({ name: 'ChatRoom' });
    },
    ...mapActions(['loginChat']),
  },
  computed: {
    curAnimalImage() {
      if (this.isCat) {
        return this.images.cat[this.selectIdx].img;
      }
      return this.images.dog[this.selectIdx].img;
    },
    curAnimals() {
      if (this.isCat) {
        return this.images.cat;
      }
      return this.images.dog;
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
        &:disabled {
          background: $clr-white;
        }
      }
    }
  }

  .btn-animal {
    @include py(3px);
    width: $f-size-2 * 5;
    font-size: $f-size-2;
    color: $clr-gray;
    border-color: $clr-gray;
    @media(min-width: $limit-w-pc) {
      width: $f-size-3 * 5;
      font-size: $f-size-3;
    }
    &:hover {
      background: $clr-gray * 0.7;
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
  // background: lightgreen;
  @include flex-rcc;
  @media(min-width: $limit-w-pc) {
    height: 100%;
    @include flex-ccc;
  }
  .a2-animal {
    width: 25%;
    height: 100%;
    border-radius: 9px;
    border: 1px solid $clr-gray;
    margin: 1%;
    @media(min-width: $limit-w-pc) {
      width: 100%;
      height: 25%;
      margin: 5%;
    }
    &:hover {
      background: $clr-gray * 0.7;
    }
    &-active {
      border-color: $clr-selected;
      &:hover {
        background: $clr-selected * 0.5;
      }
    }
    img {
      height: 80%;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
}
</style>
