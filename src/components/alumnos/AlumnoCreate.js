import Loader from '../../shared/Loader'
import Pager from '../../shared/Pager'

export default {
  name: 'AlumnoCreate',
  components: {
    Loader, Pager
  },
  mounted() {
    this.get();
  },
  validators: {
    'model.padreId'(value) {
        return this.$validator
          .value(value)
          .required()

      },
    'model.nombres'(value) {
      return this.$validator
        .value(value)
        .required()
        .minLength(5)
        .maxLength(20);
    },
    'model.apellidos'(value) {
      return this.$validator
        .value(value)
        .required()
        .minLength(5)
        .maxLength(20);
    },
    'model.dni'(value) {
      return this.$validator
        .value(value)
        .required()
        .minLength(5)
        .maxLength(8);
    },
    'model.correo'(value) {
      return this.$validator
        .value(value)
        .required()
        .minLength(5)
        .maxLength(20);
    },
    'model.grado_academico'(value) {
      return this.$validator
        .value(value)
        .required()
        .minLength(5)
        .maxLength(20);
    }
  },
  data() {
    return {
      isLoading: false,
      model: {
        padreId: 1,
        nombres: null,
        apellidos: null,
        dni: null,
        correo: null,
        grado_academico: null
      }
    }
  },
  methods: {
    get() {
      let id = this.$route.params.id;

      if (!id) return;

      this.isLoading = true;
      this.$proxies.alumnoProxy.get(id)
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

          this.$proxies.alumnoProxy.create(this.model)
          .then(() => {
            this.$notify({
              group: "global",
              type: "is-success",
              text: 'Producto creado con éxito'
            });
            this.$router.push('/alumnos');
          })
          .catch(() => {
            this.isLoading = false;
            this.$notify({
              group: "global",
              type: "is-danger",
              text: 'Ocurrió un error inesperado'
            });
          });
    


      })
    }
  }
}