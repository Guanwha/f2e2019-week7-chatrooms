<template>
  <div class="full-wh flex-ccc">
    <div class="header flex-rlc">ChatRoom</div>
    <div class="content flex-csbc">
      <!-- message area -->
      <div class="a1-messages flex-ctl">
        <BubbleMessage :pIsLeft='true'
                       :pIsCat='true'
                       :pAnimalIdx='1'
                       :pName='"小明"'
                       :pMessage='"這是一條很長很長很長很長訊息"'
                       :pDateTime='new Date().getTime()'/>
        <BubbleMessage :pIsLeft='false'
                       :pIsCat='false'
                       :pAnimalIdx='2'
                       :pName='"小黃"'
                       :pMessage='"這也是一條很長很長很長很長訊息"'
                       :pDateTime='new Date().getTime()'/>
      </div>
      <!-- send box -->
      <div class="sendbox mt-auto flex-rcc">
        <button class="img-btn"><img src="../assets/icon_emotion.svg"></button>
        <button class="img-btn"><img src="../assets/icon_picture.svg"></button>
        <button class="img-btn"><img src="../assets/icon_attachment.svg"></button>
        <div class='line'></div>
        <input class="form-control" type="text" v-model='message'>
        <button class="img-btn"><img src="../assets/icon_send.svg"></button>
      </div>
    </div>
  </div>
</template>

<script>
import BubbleMessage from '../components/BubbleMessage';

export default {
  name: 'ChatRoom',
  components: {
    BubbleMessage,
  },
  data() {
    return {
      messages: {},
      message: '',
    };
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
  padding: 1rem * 0.5;
  .a1-messages {
    width: 100%;
  }
  .sendbox {
    width: 95%;
    margin: 1rem * 0.5;
    padding: 1rem * 0.5;
    background: $clr-main-lv4;
    border-radius: 1rem * 0.5;
    .line {
      width: 1px;
      height: 2rem;
      border: 0.5px solid white;
      @include mx(1rem);
    }
    input {
      @include mx(1rem * 0.5);
      color: $clr-white;
      background: $clr-main-lv5;
      border-width: 0;
      &:hover, &:focus {
        border-color: $clr-white;
        box-shadow: 0 0 0 0.1rem rgba(255,255,255,.5)
      }
    }
  }
}
.img-btn {
  padding: .5rem;
  border-width: 0;
  border-radius: .25rem;
  background-color: transparent;
  transition: background-color .15s ease-in-out;
  &:hover {
    background-color: #FFFFFF33;
  }
  &:disabled {
    background-color: transparent;
  }
}
</style>
