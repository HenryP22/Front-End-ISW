import Loader from '../../shared/Loader'
import Pager from '../../shared/Pager'

export default {
  name: 'TutoriaCreate',
  components: {
    Loader, Pager
  },
  mounted() {
    this.get();
  },
  validators: {
    'model.alumnoId'(value) {
        return this.$validator
          .value(value)
          .required()
          .maxLength(20);
      },
      'model.cursoId'(value) {
        return this.$validator
          .value(value)
          .required()
          .maxLength(20);
      },
      'model.docenteId'(value) {
        return this.$validator
          .value(value)
          .required()
          .maxLength(20);
      },
      'model.costo'(value) {
        return this.$validator
          .value(value)
          .required()
      },
      'model.descripcion'(value) {
        return this.$validator
          .value(value)
          .required()
          .maxLength(9);
      },
      'model.cantidad_minutos'(value) {
        return this.$validator
          .value(value)
          .required()
          .maxLength(9);
      }
     
  },
  data() {
    return {
      isLoading: false,
      model: {
        alumnoId: null,
        cursoId: null,
        docenteId: null,
        costo: null,
        descripcion: null,
        cantidad_minutos: null
      }
    }
  },
  methods: {
    get() {
      let id = this.$route.params.id;

      if (!id) return;

      this.isLoading = true;
      this.$proxies.tutoriaProxy.get(id)
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

        
          this.$proxies.tutoriaProxy.create(this.model)
          .then(() => {
            this.$notify({
              group: "global",
              type: "is-success",
              text: 'Alumno creado con éxito'
            });
            this.$router.push('/tutorias');
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