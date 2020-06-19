import Loader from '../../shared/Loader'

export default {
    name: 'AlumnoCreate',
    components: {
        Loader
    },
    mounted() {
        this.initialize();
    },
    
    
    data() {
        return {
            isLoading: false,
            alumnos: [],
            alumno: {
                alumnoId: null,
                
            }
        }
    },
    methods: {
        initialize() {
            this.isLoading = true;

            let alumnos = this.$proxies.alumnoProxy.getAll(1, 100),
                products = this.$proxies.productProxy.getAll(1, 100);

            Promise.all([alumnos])
                .then(values => {
                    this.alumnos.alumnoId = this.alumnos[0].alumnoId;

                    this.onChangeAlumnoSelection();

                    this.isLoading = false;
                })
        },
        onChangeAlumnoSelection() {
            let alumno = this.alumnos.find(
                x => x.alumnoId == this.alumno.alumnoId
            );

            
        },
        addAlumno() {
            if (!this.model.alumnos.some(x => x.alumnoId === this.alumno.alumnoId)) {
                // Debería venir del servidor
                

                let item = {
                    // Server
                    alumnoId:this.alumno.alumnoId
                };


                this.model.alumnos.push(item);
                this.onChangeProductSelection();
            }
        },
        removeProduct(id) {
            this.model.alumnos = this.model.alumnos.filter(x => x.alumnoId != id);
        },
        create() {
            this.isLoading = true;

            this.$proxies.orderProxy
                .create(this.model)
                .then(() => {
                    this.isLoading = false;
                    this.$notify({
                        group: "global",
                        type: "is-success",
                        text: 'La orden ha sido creada'
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
                })
        }
    }
}