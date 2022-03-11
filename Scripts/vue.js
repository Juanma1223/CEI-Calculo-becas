Vue.createApp({
    data() {
        return {
            columns: ['Posicion', 'Alumno', 'Necesita plata?', 'Necesita sacar materias?', 'Se quiere morir?'],
            rows: [['Juanma', 'SI', 'SI', 'SI'], ['Juanma', 'SI', 'SI', 'SI'], ['Juanma', 'SI', 'SI', 'SI'], ['Juanma', 'SI', 'SI', 'SI']]
        }
    },
    computed: {

    },
    methods: {
        getInfo(table) {
            // Aca se decodifica el archivo con la info de los alumnos
            this.columns = table.shift();
            this.rows = table;
        },
        upload() {
            var fileUpload = document.getElementById("fileRespuestas");
            const reader = new FileReader();
            var rawData;
            reader.addEventListener('load', (event) => {
                rawData = event.target.result;
                console.log("rawData", rawData);
                //this.columns = table.values.targe;
                var table = Papa.parse(rawData);
                console.log(table);
                this.getInfo(table.data)

            });
            reader.readAsText(fileUpload.files[0]);

        },
        getWitghts() {
            // Aca se decodifica el archivo con los pesos de la formula
        },
        calculate() {
            // Aca se calculan las posiciones de los alumnos y settea las variables globales
            // columns con los nombres de las columnas del archivo
            // y rows con las filas ordenadas del mejor candidato al peor
        },
        exportTable() {
            // Aca se exporta el archivo actual
        }
    }
}).mount('#app')
