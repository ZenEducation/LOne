<template>
  <div>
    <Popper>
      <button>Trigger element</button>
      <template #content>
        <div>This is the Popper content</div>
      </template>
    </Popper>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
import Popper from "vue3-popper";
import { ref } from "vue";
</script>

<style  scoped>
</style>