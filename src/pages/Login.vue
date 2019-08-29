<template>
  <div class="wrap flex-ccc">
    <div class="header flex-rlc">Pick Yourself</div>
    <div class="content flex-ccc">
      <button class="btn-enter" @click="gotoChatRoom">進入聊天</button>
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
@import '../styles/variables';

.wrap {
  width: 100%;
  height: 100%;
}
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
  height: 100%;
  background: $clr-main-lv2;
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
</style>
