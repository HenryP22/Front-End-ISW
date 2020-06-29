import Loader from '../../shared/Loader'
import Pager from '../../shared/Pager'

export default {
    name: "Default",  components: {
        Loader, Pager
    },
    data() {
      return {
        user: this.$store.state.user
      }
    }
  };