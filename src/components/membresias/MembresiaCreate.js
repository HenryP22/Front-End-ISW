import Loader from '../../shared/Loader'
import Pager from '../../shared/Pager'

export default {
  name: 'MembresiaCreate',
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
          .maxLength(20);
      },
      'model.docenteId'(value) {
        return this.$validator
          .value(value)
          .required()
          .maxLength(20);
      },
      'model.cvc_tarjeta'(value) {
        return this.$validator
          .value(value)
          .maxLength(3);
      },
      'model.fecha_expiracion'(value) {
        return this.$validator
          .value(value)
          .required()
          .maxLength(50);
      }
     
  },
  data() {
    return {
      isLoading: false,
      model: {
        tarjetaId: null,
        docenteId: null,
        cvc_tarjeta: null,
        fecha_expiracion: null
      }
    }
  },
  methods: {
    get() {
      let id = this.$route.params.id;

      if (!id) return;

      this.isLoading = true;
      this.$proxies.membresiaProxy.get(id)
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

        if(this.model.membresiaId) {
          this.$proxies.membresiaProxy.update(this.model.membresiaId, this.model)
          .then(() => {
            this.$notify({
              group: "global",
              type: "is-success",
              text: 'Producto actualizado con éxito'
            });
            this.$router.push('/membresias');
          })
          .catch(() => {
            this.isLoading = false;
            this.$notify({
              group: "global",
              type: "is-danger",
              text: 'Ocurrió un error inesperado'
            });
          });
        } else {
          this.$proxies.membresiaProxy.create(this.model)
          .then(() => {
            this.$notify({
              group: "global",
              type: "is-success",
              text: 'Producto creado con éxito'
            });
            this.$router.push('/membresias');
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


      })
    }
  }
}