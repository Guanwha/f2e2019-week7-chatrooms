<template>
  <div class="full-wh flex-ccc">
    <div class="header flex-rlc">ChatRoom</div>
    <div class="content flex-csbc">
      <!-- message area -->
      <div class="a1-messages flex-ctl">
        <div v-for='(message, key) in messages'
             :key='key'
             class='full-w'>
          <BubbleMessage :pIsLeft='isOtherUserMessage(message)'
                         :pIsCat='message.isCat'
                         :pAnimalIdx='message.animalIdx'
                         :pName='message.nickname'
                         :pMessage='message.msg'
                         :pDateTime='message.time'/>
        </div>
      </div>
      <!-- send box -->
      <div class="sendbox mt-auto flex-rcc">
        <button class="img-btn"><img src="../assets/icon_emotion.svg"></button>
        <button class="img-btn"><img src="../assets/icon_picture.svg"></button>
        <button class="img-btn"><img src="../assets/icon_attachment.svg"></button>
        <div class='line'></div>
        <input class="form-control" type="text" v-model='message' @keyup.shift.exact.enter="send()" placeholder='Shift + Enter will send out the message.'>
        <button class="img-btn"><img src="../assets/icon_send.svg"></button>
      </div>
    </div>
  </div>
</template>

<script>
/* global firebase */
import { mapGetters } from 'vuex';
import BubbleMessage from '../components/BubbleMessage';

export default {
  name: 'ChatRoom',
  components: {
    BubbleMessage,
  },
  data() {
    return {
      firebaseRef: null,
      messages: {},
      message: '',
    };
  },
  mounted() {
    // check login
    if (this.loginTime === 0) {
      this.$router.push({ name: 'Login' });
      return;
    }
    // receive firebase data
    const connectedRef = firebase.database().ref('.info/connected');
    connectedRef.on('value', (snap) => {
      if (snap.val()) {
        console.log('firebase connected');
      }
      else {
        console.log('firebase not connected');
      }
    });

    this.firebaseRef = firebase.database().ref('/chatrooms/lobby');
    this.firebaseRef.on('value', (snapshot) => {
      console.log('chatroom lobby updated');
      this.messages = snapshot.val();
    });
  },
  methods: {
    isOtherUserMessage(message) {
      if (message.loginTime !== this.loginTime ||
          message.nickname !== this.nickname) {
        return true;
      }
      return false;
    },
    send() {
      if (this.message) {
        // push the message to the firebase
        this.firebaseRef.push({
          type: 0,
          isCat: this.isCat,
          animalIdx: this.animalIdx,
          loginTime: this.loginTime,
          nickname: this.nickname,
          msg: this.message,
          time: (new Date()).getTime(),
        });

        // clear the message of UI
        this.message = '';
      }
    },
  },
  computed: {
    ...mapGetters(['isCat', 'animalIdx', 'loginTime', 'nickname']),
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
    overflow-y: auto;
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

// Customize scroll bar
/* width */
::-webkit-scrollbar {
  width: 14px;
}
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 7px $clr-main-lv1;
  border-radius: 7px;
  &:hover {
    box-shadow: inset 0 0 7px $clr-gray;
  }
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: $clr-main-lv1;
  border-radius: 7px;
  border-width: 0;
  &:hover {
    background: $clr-main-lv1 * 0.5;
  }
}
</style>
