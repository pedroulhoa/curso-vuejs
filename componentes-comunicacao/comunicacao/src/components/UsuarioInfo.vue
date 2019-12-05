<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do Usuário:
      <strong>{{ inverterNome() }}</strong>
    </p>
    <p>
      idade do usuário:
      <strong>{{idadeMutavel}}</strong>
    </p>
    <button @click="reiniciarNome">Reiniciar nome</button>
    <button @click="reiniciarFn()">Reiniciar nome (Callback)</button>
  </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  props: {
    nome: {
      type: String,
      required: true
    },
    outroNome: {
      type: String,
      // pode-se atribuir um valor padrao, nao funciona com o required
      default: "OutroNome"
    },
    outroNomeDefault: {
      type: String,
      // default tbm pode ser uma funcao
      default: function() {
        return Array(10)
          .fill(0)
          .join(",");
      }
    },
    reiniciarFn: Function,
    idade: Number
  },
  data() {
    return {
      idadeMutavel: this.idade
    };
  },
  methods: {
    inverterNome() {
      return this.nome
        .split("")
        .reverse()
        .join("");
    },
    reiniciarNome() {
      const antigo = this.nome;
      this.nome = "Pedro";
      this.$emit("nomeMudou", this.nome);
    }
  },
  created() {
    barramento.quandoIdadeMudar(idade => {
      this.idadeMutavel = idade;
    });
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
