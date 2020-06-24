import Loader from '../../shared/Loader'
import Pager from '../../shared/Pager'

export default {
  name: 'DocenteCreate',
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
      'model.domicilio'(value) {
        return this.$validator
          .value(value)
          .required()    
          .maxLength(50);
      },
      'model.correo'(value) {
        return this.$validator
          .value(value)
          .required()    
          .maxLength(50);
      },
      'model.costo'(value) {
        return this.$validator
          .value(value)
          .required()
      },
      'model.disponibilidad'(value) {
        return this.$validator
          .value(value)
          .required() 
          .maxLength(16);      
      },
      'model.numerocuenta'(value) {
        return this.$validator
          .value(value)
          .required() 
          .maxLength(16);      
      },
      'model.membresia'(value) {
        return this.$validator
          .value(value)
          .required()       
      }
     
  },
  data() {
    return {
      isLoading: false,
      model: {
        nombres: null,
        apellidos: null,
        dni: null,
        domicilio: null,
        correo:null,
        costo: null,
        disponibilidad: null,
        numerocuenta: null,
        membresia: null
      }
    }
  },
  methods: {
    get() {
      let id = this.$route.params.id;

      if (!id) return;

      this.isLoading = true;
      this.$proxies.docenteProxy.get(id)
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

        
          this.$proxies.docenteProxy.create(this.model)
          .then(() => {
            this.$notify({
              group: "global",
              type: "is-success",
              text: 'Alumno creado con éxito'
            });
            this.$router.push('/docentes');
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