new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },

    methods: {
        exibirAlerta() {
            alert('Exibindo o alerta.');
        },

        pegarValor(e) {
            this.valor = e.target.value;
        }
    },  
})