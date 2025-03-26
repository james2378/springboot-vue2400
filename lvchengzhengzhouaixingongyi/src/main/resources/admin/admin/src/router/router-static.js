import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import fuwuxinxi from '@/views/modules/fuwuxinxi/list'
    import fuwuxinxiLiuyan from '@/views/modules/fuwuxinxiLiuyan/list'
    import fuwuxinxiOrder from '@/views/modules/fuwuxinxiOrder/list'
    import news from '@/views/modules/news/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zixun from '@/views/modules/zixun/list'
    import config from '@/views/modules/config/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryFuwuxinxi from '@/views/modules/dictionaryFuwuxinxi/list'
    import dictionaryFuwuxinxiOrderYesno from '@/views/modules/dictionaryFuwuxinxiOrderYesno/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryYonghu from '@/views/modules/dictionaryYonghu/list'
    import dictionaryZixun from '@/views/modules/dictionaryZixun/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryFuwuxinxi',
        name: '服务类型',
        component: dictionaryFuwuxinxi
    }
    ,{
        path: '/dictionaryFuwuxinxiOrderYesno',
        name: '申请状态',
        component: dictionaryFuwuxinxiOrderYesno
    }
    ,{
        path: '/dictionaryNews',
        name: '新闻类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryYonghu',
        name: '身份',
        component: dictionaryYonghu
    }
    ,{
        path: '/dictionaryZixun',
        name: '资讯类型',
        component: dictionaryZixun
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛信息',
        component: forum
      }
    ,{
        path: '/fuwuxinxi',
        name: '服务信息',
        component: fuwuxinxi
      }
    ,{
        path: '/fuwuxinxiLiuyan',
        name: '服务留言',
        component: fuwuxinxiLiuyan
      }
    ,{
        path: '/fuwuxinxiOrder',
        name: '服务申请',
        component: fuwuxinxiOrder
      }
    ,{
        path: '/news',
        name: '新闻信息',
        component: news
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/zixun',
        name: '资讯信息',
        component: zixun
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
