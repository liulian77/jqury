// import Home from '@/pages/home'
// import Cart from '@/pages/cart'
// import Main from '@/pages/main'
// import Product from '@/pages/product'
// import Tabbar from '@/components/bxtabbar'
// import Notfont from '@/pages/Notfont'
// import Change from '@/pages/change'
import Tabbar from '@/components/bxtabbar'
import Search from '@/pages/search'
import Header from '@/components/bxheader'
const detail = () => '@/pages/detail'
const login = () => '@/pages/login'
const Home = () => import('@/pages/home')
const Cart = () => import('@/pages/cart')
const Main = () => import('@/pages/mine')
const Product = () => import('@/pages/product')
const Notfont = () => import('@/pages/Notfont')
const mall = () => import('@/pages/mall')
const list = () => import('@/pages/list')
const productlist = () => import('@/pages/productlist')
const register = () => '@/pages/register'

export default [{
  path: '/',
  redirect: '/home'

}, {
  path: '/home',
  isTabbar: true,
  title: '首页',
  icon: '&#xe612;',
  components: {
    default: Home,
    tabber: Tabbar,
    header: Header
  }
},
{
  path: '/mall',
  isTabbar: true,
  title: '商城',
  icon: '&#xe635;',
  components: {
    default: mall,
    tabber: Tabbar,
    header: Header
  },
  children: [{
    path: ':id',
    name: 'productlist',
    components: {
      default: productlist
    }
  }]
}, {
  path: '*',
  redirect: '/404'

}, {
  path: '/404',
  components: {
    default: Notfont,
    header: Header
  }
}, {
  path: '/cart',
  title: '购物车',
  icon: '&#xe61b;',
  isTabbar: true,
  components: {
    default: Cart

  }
}, {
  path: '/main',
  title: '我的',
  icon: '&#xe615;',
  isTabbar: true,
  components: {
    default: Main,
    tabber: Tabbar
  }
}, {
  path: '/product/:id',
  name: 'product',
  components: {
    default: Product
  }
}, {
  path: '/search',
  name: 'search',
  components: {
    default: Search
  }
}, {
  path: '/list/:id',

  components: {
    default: list

  }
}, {
  path: '/login',
  components: {
    default: login

  }
},

{
  path: '/register',
  components: {
    default: register

  }
},
{
  path: '/detail/:id',
  name: 'detail',
  components: {
    default: detail,
    nbheader: Header

  }
}
]
