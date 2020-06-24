import Loader from '../../shared/Loader'
import Pager from '../../shared/Pager'

export default {
  name: 'TarjetaCreate',
  components: {
    Loader, Pager
  },
  mounted() {
    this.get();
  },
  validators: {
      'model.fecha_expiración'(value) {
        return this.$validator
          .value(value)
          .required()
          .maxLength(20);
      },
      'model.numero_poseedor'(value) {
        return this.$validator
          .value(value)
          .required()
          .maxLength(20);
      },
      'model.numero_tarjeta'(value) {
        return this.$validator
          .value(value)
          .required()
          .maxLength(20);
      }
     
  },
  data() {
    return {
      isLoading: false,
      model: {
        fecha_expiración: null,
        nombre_poseedor: null,
        numero_tarjeta: null
      }
    }
  },
  methods: {
    get() {
      let id = this.$route.params.id;

      if (!id) return;

      this.isLoading = true;
      this.$proxies.tarjetaProxy.get(id)
        .then(x => {
          this.model = x.data;
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
          this.$notify({
            group: "global",
            type: "is-danger",
            text: 'Ocurrió un error inesperado'
          });
        })
    },
    save() {
      this.$validate().then(success => {
        if (!success) return;

        this.isLoading = true;

        
          this.$proxies.tarjetaProxy.create(this.model)
          .then(() => {
            this.$notify({
              group: "global",
              type: "is-success",
              text: 'Alumno creado con éxito'
            });
            this.$router.push('/tarjetas');
          })
          .catch(() => {
            this.isLoading = false;
            this.$notify({
              group: "global",
              type: "is-danger",
              text: 'Ocurrió un error inesperado'
            });
          });
        }


      )
    }
  }
}