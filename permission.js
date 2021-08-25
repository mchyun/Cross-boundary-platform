import router from './router'
import store from './store'

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  let isLogin = store.getters.isLogin
  if(whiteList.indexOf(to.path) !== -1) {
    if(isLogin){
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    if(isLogin){
      next()
    } else {
      next({
        path: '/login'
      })
    }
  }

})

