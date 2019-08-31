import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/Login';
import ChatRoom from '@/pages/ChatRoom';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'Login',
      path: '/',
      component: Login,
    },
    {
      name: 'ChatRoom',
      path: '/chatroom',
      component: ChatRoom,
    },
    {
      name: 'Test',
      path: '/test',
      component: HelloWorld,
    },
  ],
});
