<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>

    <p>
      idade do usuário:
      <strong>{{idadeMutavel}}</strong>
    </p>
    <button @click="alterarIdade">Alterar idade</button>
  </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  props: {
    idade: Number
  },
  data() {
    return {
        idadeMutavel: this.idade
    };
  },
  methods: {
    alterarIdade() {
      this.idadeMutavel += 1;
      barramento.alterarIdade(this.idadeMutavel);
    }
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
