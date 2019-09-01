<template>
  <div class="full-wh flex-ccc">
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
</style>
