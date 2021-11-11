<template>
  <div>
    <Search />
  </div>
  <center>
    <div
      class="
        row
        home
        flex-grow-1
        d-flex
        flex-column
        align-items-center
        m-0
        container-fluid
        pt-4
      "
    >
      <div v-for="b in blogs" :key="b.id">
        <Blog :blog="b" />
      </div>
    </div>
  </center>
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
      name: "Home",
    };
  },
};
</script>

<style scoped lang="scss">
</style>