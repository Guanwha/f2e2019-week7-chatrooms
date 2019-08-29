<template>
  <div class="wrap flex-ccc">
    <div class="header flex-rlc">ChatRoom</div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: 'ChatRoom',
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
</style>
