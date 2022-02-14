<template>
  <div>
    <header class="bg-gradient-to-b from-gray-900 to-gray-600 ">
      <img class="w-1/6" src="../assets/logo.png" alt="logo">
    </header>
    <Translate />
  </div>
</template>

<script>
import Translate from "../components/Translate.vue";

export default {
    components: { Translate }
}
</script>