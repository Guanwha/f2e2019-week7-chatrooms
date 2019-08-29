<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class='flex-clc'>
      <ul class='txt-l'
          v-for='(post, key) in posts'
          :key='key'>
        <li>{{post.body}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
/* global firebase */
const firebaseRef = firebase.database().ref('/posts/');
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      posts: {},
    };
  },
  mounted() {
    // firebaseRef.once('value').then((snapshot) => {
    //   this.posts = snapshot.val();
    // });
    firebaseRef.on('value', (snapshot) => {
      this.posts = snapshot.val();
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
