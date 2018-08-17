const USERINFO = 'userinfo'
export default {
  ReadStorage () {
    return JSON.parse(localStorage.getItem(USERINFO) || '{}')
  },
  SaveStorage (userinfo) {
    localStorage.setItem(USERINFO, JSON.stringify(userinfo))
  }
}
