import Loader from '../../shared/Loader'
import Pager from '../../shared/Pager'

export default {
  name: 'PadreCreate',
  components: {
    Loader, Pager
  },
  mounted() {
    this.get();
  },
  validators: {
    'model.nombres'(value) {
        return this.$validator
          .value(value)
          .required()
          .maxLength(20);
      },
      'model.apellidos'(value) {
        return this.$validator
          .value(value)
          .required()
          .maxLength(20);
      },
      'model.dni'(value) {
        return this.$validator
          .value(value)
          .maxLength(8);
      },
      'model.correo'(value) {
        return this.$validator
          .value(value)
          .email()
          .maxLength(50);
      }
     
  },
  data() {
    return {
      isLoading: false,
      model: {
        nombres: null,
        apellidos: null,
        dni: null,
        correo: null
      }
    }
  },
  methods: {
    get() {
      let id = this.$route.params.id;

      if (!id) return;

      this.isLoading = true;
      this.$proxies.padreProxy.get(id)
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

        
          this.$proxies.padreProxy.create(this.model)
          .then(() => {
            this.$notify({
              group: "global",
              type: "is-success",
              text: 'Alumno creado con éxito'
            });
            this.$router.push('/padres');
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