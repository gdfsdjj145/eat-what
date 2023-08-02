export function getCurrentRoute () {
  const routes = getCurrentPages()
  const route = routes[routes.length - 1].route //获取当前页面路由
  const params = routes[routes.length - 1].options //获取当前路由参数
  return { routes, route, params }
}

export function setStorage (key, data) {
  try {
    uni.setStorageSync(key, data)
  } catch (e) {
    console.log('set storage error', e)
  }
}

export function getStorage (key) {
  try {
    const value = uni.getStorageSync(key);
    if (value) {
      return value
    }
  } catch (e) {
    // error
    console.log('get storage error', e)
  }
}