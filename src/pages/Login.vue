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
              <div class="col-12 col-md-9">Welcome</div>
            </div>
            <div class="row a2-you">
              <!-- select animal type -->
              <div class="col-12 col-md-3 align-self-center a3-which">
                <button>狗狗</button>
                <button>貓貓</button>
              </div>
              <!-- naming -->
              <div class="col-12 col-md-9 a3-name">
                <button class="btn-enter" @click="gotoChatRoom">進入聊天</button>
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
export default {
  name: 'Login',
  methods: {
    gotoChatRoom() {
      this.$router.push({ name: 'ChatRoom' });
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
  background: green;
  @media(min-width: $limit-w-pc) {
    height: 100%;
  }
  .a2-title {
    height: 20%;
    background: lightblue;
  }
  .a2-you {
    height: 80%;
    .a3-which {
      height: 15%;
      background: orange;
      @include flex-rcc;
      @media(min-width: $limit-w-pc) {
        height: 30%;
        @include flex-ccc;
      }
    }
    .a3-name {
      height: 85%;
      background: pink;
      @media(min-width: $limit-w-pc) {
        height: 100%;
      }
    }
  }

  .btn-enter {
    width: $f-size-3 * 7;
    height: $f-size-3 * 2;
    border-radius: $f-size-3 * 1;
    color: $clr-main-lv1;
    font-size: $f-size-3;
    line-height: $f-size-3 * 2;
    font-weight: bold;
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
