let app = new Vue({
    el: "#app",
    data : {
        mailGenerator: 
        [

        ]
    },


    mounted() {

        for (let i=0 ;i<10;i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(response =>{
                let mailsApi = response.data.response   
                let newMail = {
                mail : mailsApi
                }
                this.mailGenerator.push(newMail);    
            });
        }
    },

});