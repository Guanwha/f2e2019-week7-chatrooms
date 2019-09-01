<template>
  <div class="wrap full-wh flex-rlc">
    <!-- left bubble -->
    <div v-if='pIsLeft' class='flex-rlc'>
      <div class="flex-ccc">
        <div class="head-image" :style="{ 'background-image': 'url(' + curAnimalHeadImage + ')' }"></div>
        <div class="head-name">{{pName}}</div>
      </div>
      <div class="flex-rlb">
        <div class="message-left flex-rlc">{{pMessage}}</div>
        <div class="message-left-time" :class="!pDateTime ? 'd-none' : '' "><p>{{msgDate}}</p><p>{{msgTime}}</p></div>
      </div>
    </div>
    <!-- right bubble -->
    <div v-else>
    </div>
  </div>
</template>

<script>
import { animalImages } from '../commons/constants';
import { dec0X } from '../commons/convert';

export default {
  name: 'BubbleMessage',
  props: {
    pIsLeft: Boolean,
    pIsCat: Boolean,
    pAnimalIdx: Number,
    pName: String,
    pMessage: String,
    pDateTime: Number,
  },
  data() {
    return {
      images: animalImages,
    };
  },
  computed: {
    curAnimalHeadImage() {
      if (this.pIsCat) {
        return this.images.cat[this.pAnimalIdx].head;
      }
      return this.images.dog[this.pAnimalIdx].head;
    },
    msgDate() {
      if (this.pDateTime) {
        const date = new Date(this.pDateTime);
        return `${date.getFullYear()}/${dec0X(date.getMonth() + 1, 2)}/${dec0X(date.getDate(), 2)}`;
      }
      return '';
    },
    msgTime() {
      if (this.pDateTime) {
        const date = new Date(this.pDateTime);
        return `${dec0X(date.getHours(), 2)}:${dec0X(date.getMinutes(), 2)}`;
      }
      return '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/mixins';
@import '../styles/variables';

.wrap {
  padding: 0.5rem;
}
.head-image {
  width: 3rem;
  height: 3rem;
  margin: 0.5rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.head-name {
  color: $clr-white;
  font-size: $f-size-1;
  letter-spacing: 0.28px;
}
.message-left {
  padding: 0.5rem 1rem;
  margin-left: 1.4rem;
  background: $clr-gray;
  border-radius: 0.25rem;
  position: relative;
  color: white;
  font-size: $f-size-2;
  line-height: 1.5;
  user-select: text;
  &:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: -1.4rem;
    top: 0.75rem;
    border-top: transparent 0.4rem solid;
    border-left: transparent 0.7rem solid;
    border-right: $clr-gray 0.7rem solid;
    border-bottom: $clr-gray 0.4rem solid;
  }
}
.message-left-time {
  margin-left: 0.5rem;
  min-width: 5rem;
  text-align: left;
  color: $clr-white;
  font-size: $f-size-1;
  letter-spacing: 0.28px;
}
</style>
