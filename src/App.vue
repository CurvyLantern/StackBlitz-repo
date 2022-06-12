<script>
import ClickMaster from './comp/ClickMasterComp.vue';
import DragComp from './comp/DragComp.vue';
import { ref } from 'vue';

export default {
  name: 'app',
  components: {
    ClickMaster,
    DragComp
  },
  setup() {
    const isPLaying = ref(false);

    function start() {
      isPLaying.value = true;
      console.log('done');
    }

    return {
      isPLaying,
      start,
    };
  },
};
</script>

<template>
  <div class="flex-1 text-center">
    <div class="m-5">
      <button
        class="
          px-5
          py-3
          rounded-md
          border-2 border-black
          text-black
          hover:border-3 hover:border-blue-500 hover:text-blue-500
          active:bg-blue-300 active:text-white
          bg-transparent
          transition
        "
        @click="start"
        :disabled="isPlaying"
      >
        Click me
      </button>
    </div>
    <div>
      <ClickMaster v-if="isPlaying" />
    </div>
    <div>
      <drag-comp></drag-comp>
    </div>
  </div>
</template>

<style>
#app {
  height: 100vh;
  display: flex;
}
</style>
