import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
// import login from './views/login'
import Criticism from './views/criticism'
import Article from './views/article'
import Writearticle from './views/writearticle'
import Comments from './views/comment'
import Category from './views/category'
import User from './views/user'
import Time from './views/time'
import friend from './views/friend'
import Edit from './views/edit'
import editArticle from './views/editArticle'
import editTime from './views/editTime'
import editCategory from './views/editCategory'
import editUser from './views/editUser'
import editFriend from './views/editfriend'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'login',
    //   component: login
    // },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    {
      path: '/writearticle',
      name: 'writearticle',
      component: Writearticle
    },
    {
      path: '/criticism',
      name: 'criticism',
      component: Criticism
    },
    {
      path: '/comment',
      name: 'comment',
      component: Comments
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/friend',
      name: 'friend',
      component: friend
    },
    {
      path: '/time',
      name: 'time',
      component: Time
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/editArticle',
      name: 'editArticle',
      component: editArticle
    },
    {
      path: '/editTime',
      name: 'editTime',
      component: editTime
    },
    {
      path: '/editCategory',
      name: 'editCategory',
      component: editCategory
    },
    {
      path: '/editUser',
      name: 'editUser',
      component: editUser
    },
    {
      path: '/editFriend',
      name: 'editFriend',
      component: editFriend
    },
  ]
})
