<script>
import { ref } from "vue";
import { demoText } from "./demo";

export default {
  setup: () => {
    const text = ref(demoText);
    return { text };
  },
  components: {},
};
</script>

<template>
  <div>
    <h1>Demo Vue App</h1>

    <textarea v-model="text" rows="10"></textarea>
  </div>
</template>
