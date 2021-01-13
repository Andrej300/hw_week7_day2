import Vue from 'vue';

Vue.filter('instructions', function(value){
    value = "Click to convert currency";
    return value;
})

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: {
            rates: null,
            base: "GBP",
            selectedCurrency:"EUR",
            amount: 0,
        },
        mounted: function () {
            this.fetchRates()
        },
        methods: {        
            fetchRates: function(){
                fetch("https://api.exchangeratesapi.io/latest")
                .then( response => response.json() )
                .then( data => this.rates = data.rates )
            },
        }
    });
});