Vue.createApp({
    data() {
        return {
            columns: ['Posicion','Alumno', 'Necesita plata?', 'Necesita sacar materias?', 'Se quiere morir?'],
            rows: [['Juanma', 'SI', 'SI', 'SI'], ['Juanma', 'SI', 'SI', 'SI'], ['Juanma', 'SI', 'SI', 'SI'], ['Juanma', 'SI', 'SI', 'SI']]
        }
    },
    methods: {
        getTable() {
            // Aca se decodifica el archivo con la info de los alumnos
        },
        getWitghts(){
            // Aca se decodifica el archivo con los pesos de la formula
        },
        calculate(){
            // Aca se calculan las posiciones de los alumnos y settea las variables globales
            // columns con los nombres de las columnas del archivo
            // y rows con las filas ordenadas del mejor candidato al peor
        },
        exportTable(){
            // Aca se exporta el archivo actual
        }
    }
}).mount('#app')