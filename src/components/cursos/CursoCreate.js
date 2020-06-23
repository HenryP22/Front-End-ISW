import Loader from '../../shared/Loader'
import Pager from '../../shared/Pager'

export default {
  name: 'CursoCreate',
  components: {
    Loader, Pager
  },
  mounted() {
    this.get();
  },
  validators: {
    'model.nombre'(value) {
        return this.$validator
          .value(value)
          .required()
          .maxLength(20);
      },
      'model.descripcion'(value) {
        return this.$validator
          .value(value)
          .required()
          .maxLength(20);
      },
      'model.grado_academico'(value) {
        return this.$validator
          .value(value)
          .maxLength(9);
      }
     
  },
  data() {
    return {
      isLoading: false,
      model: {
        nombre: null,
        descripcion: null,
        grado_academico: null
      }
    }
  },
  methods: {
    get() {
      let id = this.$route.params.id;

      if (!id) return;

      this.isLoading = true;
      this.$proxies.cursoProxy.get(id)
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

        
          this.$proxies.cursoProxy.create(this.model)
          .then(() => {
            this.$notify({
              group: "global",
              type: "is-success",
              text: 'Alumno creado con éxito'
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
        }


      )
    }
  }
}