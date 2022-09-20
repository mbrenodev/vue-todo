<template>
  <div>
    <v-col
      cols="12"
    >
      <v-text-field
        v-model="campoInput"
        label="Digite sua tarefa"
        outlined
        clearable
        @keyup.enter="handleAddTarefa"
      ></v-text-field>
    </v-col>
    <v-list flat subheader>
      <v-list-item-group 
        multiple 
        active-class=""
      >
        <div
          v-for="tarefa, index in $store.state.tarefas"
          :key="index"
        >
          <TarefaComp 
            :tarefa="tarefa"
          />

        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import TarefaComp from "@/components/tarefas/TarefaComp.vue";

export default {
  name: "TarefasView",

  components: {
    TarefaComp,
  },
  data() {
    return {
      campoInput: null,
    };
  },
  methods: {
    handleAddTarefa(){
      this.$store.commit('adicionaTarefa', this.campoInput)
      this.campoInput = null
    }
  }
};
</script>
