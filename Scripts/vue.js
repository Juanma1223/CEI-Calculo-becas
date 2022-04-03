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
                // console.log("rawData", rawData);
                //this.columns = table.values.targe;
                var table = Papa.parse(rawData);
                this.getInfo(table.data)
                // this.exportFilterTemplate(table.data)

            });
            reader.readAsText(fileUpload.files[0]);

        },
        getWeights() {
            // Aca se decodifica el archivo con los pesos de la formula
            var fileUpload = document.getElementById("filePesos")
            const reader = new FileReader();
            var rawData;
            reader.addEventListener('load', (event) => {
                rawData = event.target.result;
                var table = Papa.parse(rawData,{header: true});
                console.log(table)
            });
            reader.readAsText(fileUpload.files[0]);

        },
        calculate() {
            // Aca se calculan las posiciones de los alumnos y settea las variables globales
            // columns con los nombres de las columnas del archivo
            // y rows con las filas ordenadas del mejor candidato al peor
        },
        exportTable() {
            // Aca se exporta el archivo actual
        },
        exportFilterTemplate(data) {
            
            var filters = [];

            this.columns.forEach(element => {
                if(element === "") return;

                filters.push(element);
                filters.push("");
            });

            var parsedFilters = Papa.unparse([filters])
            const blob = new Blob([parsedFilters], {type: "text/csv"})
            const url = window.URL.createObjectURL(blob)
            var link = document.createElement("a");
            link.setAttribute("href",url);
            link.setAttribute("download","filtros.csv")
            document.body.appendChild(link)

            link.click();
        }
        
    }
}).mount('#app')
