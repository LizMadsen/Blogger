<template>
  <div
    class="
      row
      home
      flex-grow-1
      d-flex
      flex-column
      align-items-center
      justify-content-center
    "
  >
    <div class="col-8 justify-content-center">
      <div class="card elevation-2 rounded m-3">
        <div class="card-body" v-for="b in blog" :key="b.id">
          <Blog />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { blogsService } from "../services/BlogsService";
import { AppState } from "../AppState";
import { computed, onMounted } from "@vue/runtime-core";
export default {
  setup() {
    onMounted(async () => {
      try {
        await blogsService.getAll();
      } catch (error) {
        logger.error(error);
        Pop.toast(error.message, "Error, bruh");
      }
    });
    return {
      blogs: computed(() => AppState.blogs),
    };
  },
};
</script>

<style scoped lang="scss">
</style>