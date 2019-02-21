new Vue({
    el: '#desafio',
    data: {
        nome: 'Pedro',
        idade: 23,
        img: 'header.png'
    },

    methods: {

        idade3: function() {
            return this.idade * 3;
        },

        numeroAleatorio() {
            return Math.random()
        }
    },
})