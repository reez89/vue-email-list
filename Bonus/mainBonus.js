/*  Bonus (facolativo):
Generate una Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato */


let app = new Vue({
    el: "#app",
    data : {
        numbers : [],
    },


    mounted() {
        for(let i=0 ; i<36;i++){
            this.numbers.push(0);
        }
    },


    methods: {
        myApi: function(index){
            axios.get("https://flynn.boolean.careers/exercises/api/random/int").then(response=>{
            console.log(response.data.response);
            let apiNumber = response.data.response;
            this.numbers.splice(index,1,apiNumber)
        })
        }
    },
});