import Loader from '../../shared/Loader'

export default {
    name: 'TarjetaDetail',
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

            this.$proxies.tarjetaProxy.get(this.$route.params.id)
                .then(x => {
                    this.model = x.data;
                    this.isLoading = false;
                }).catch(() => {
                    this.isLoading = false;
                });
        }
    }
}