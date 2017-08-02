import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      pageTitle: 'vuexDemo',
      pageName: 'the test vue store page ',
      num1: 0,
      num2: 0
    }
  },
  computed: {
    ...mapGetters({
      userName: 'getUserName',
      showCode: 'getShowCode',
      changeCodeUserName: 'getChangeCodeUserName'
    })
  },
  created () {
    this.setPageTitle(this.pageTitle)
  },
  methods: {
    changeShowCodeMethod (num) {
      if (num === 1) {
        this.num1++
      } else if (num === 2) {
        this.num2++
      }
      let newCode = parseInt(this.showCode) + 1
      let changeUserName = this.userName
      let params = {
        showCode: newCode,
        userName: changeUserName
      }
      this.changeShowCode(params)
    },
    ...mapActions([
      'changeShowCode',
      'setPageTitle'
    ])
  }
}
