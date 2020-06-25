import Loader from '../../shared/Loader'
import Pager from '../../shared/Pager'

export default {
  name: 'PagoCreate',
  components: {
    Loader, Pager
  },
  mounted() {
    this.get();
  },
  validators: {
    'model.tarjetaId'(value) {
        return this.$validator
          .value(value)
          .required()
      },
      'model.tutoriaId'(value) {
        return this.$validator
          .value(value)
          .required()
      },
      'model.descripcion'(value) {
        return this.$validator
          .value(value)
          .required()
          .maxLength(20);
      },
      'model.cvcTarjeta'(value) {
        return this.$validator
          .value(value)
          .maxLength(9);
      }
     
  },
  data() {
    return {
      isLoading: false,
      model: {
        tarjetaId: null,
        tutoriaId: null,
        descripcion: null,
        cvcTarjeta: null,
      }
    }
  },
  methods: {
    get() {
      let id = this.$route.params.id;

      if (!id) return;

      this.isLoading = true;
      this.$proxies.pagoProxy.get(id)
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

        
          this.$proxies.pagoProxy.create(this.model)
          .then(() => {
            this.$notify({
              group: "global",
              type: "is-success",
              text: 'Alumno creado con éxito'
            });
            this.$router.push('/pagos');
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