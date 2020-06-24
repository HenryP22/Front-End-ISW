import Loader from '../../shared/Loader'

export default {
    name: 'MembresiaDetail',
    components: {
        Loader
    },
    mounted() {
        this.get();
    },
    data() {
        return {
            isLoading: false,
            model: {}
        }
    },
    methods: {
        get() {
            this.isLoading = true;

            this.$proxies.membresiaProxy.get(this.$route.params.id)
                .then(x => {
                    this.model = x.data;
                    this.isLoading = false;
                }).catch(() => {
                    this.isLoading = false;
                });
        }
    }
}