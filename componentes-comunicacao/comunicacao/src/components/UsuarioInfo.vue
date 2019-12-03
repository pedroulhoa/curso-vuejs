<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do Usuário:
      <strong>{{ inverterNome() }}</strong>
    </p>
  </div>
</template>

<script>
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
    }
  },
  methods: {
    inverterNome() {
      return this.nome
        .split("")
        .reverse()
        .join("");
    }
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
