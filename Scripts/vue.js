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
            this.columns = table;
            this.rows = table;
            console.log(table);
        },
        upload() {
            console.log("Entró")
            var fileUpload = document.getElementById("fileRespuestas");
            console.log(fileUpload.value)
            console.log("Empezó")
            var table = { values: [] };
            var reader = new FileReader();
            reader.onload = function (e) {
                var rows = e.target.result.split("\n");
                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");
                    if (cells.length > 1) {
                        // Insertamos una fila vacía
                        var row = [];
                        for (var j = 0; j < cells.length; j++) {
                            row.push(cells[j]);
                        }
                        table.values.push(row)
                    }
                }
            }
            reader.readAsText(fileUpload.files[0]);

            //this.columns = table.values.targe;
            this.rows = table.values;
            this.rows = this.rows;
            console.log(this.rows);

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
