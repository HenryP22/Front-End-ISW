import Loader from '../../shared/Loader'
import Pager from '../../shared/Pager'

export default {
  name: 'InformeCreate',
  components: {
    Loader, Pager
  },
  mounted() {
    this.get();
  },
  validators: {
      'model.descripcion'(value) {
        return this.$validator
          .value(value)
          .required()
          .maxLength(20);
      },
      'model.fecha'(value) {
        return this.$validator
          .value(value)
          .required()
          .maxLength(20);
      },
      'model.tutoriaId'(value) {
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
        descripcion: null,
        fecha: null,
        tutoriaId: 1
      }
    }
  },
  methods: {
    get() {
      let id = this.$route.params.id;

      if (!id) return;

      this.isLoading = true;
      this.$proxies.informeProxy.get(id)
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

        
          this.$proxies.informeProxy.create(this.model)
          .then(() => {
            this.$notify({
              group: "global",
              type: "is-success",
              text: 'Alumno creado con éxito'
            });
            this.$router.push('/informes');
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