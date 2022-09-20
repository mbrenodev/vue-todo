<template>
  <div>
    <v-list
        flat
        subheader
      >

      <v-list-item-group
        v-model="settings"
        multiple
        active-class=""
      >
      <TarefaComp />
      <TarefaComp />
      <TarefaComp />
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import TarefaComp from '@/components/tarefas/TarefaComp.vue';

  export default {
    name: 'TarefasView',

    components: {
      TarefaComp
},
  }
</script>
