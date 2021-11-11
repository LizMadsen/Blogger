<template>
  <div class="component">
    <div class="col-8 justify-content-center">
      <div class="card elevation-2 rounded m-2">
        <p>
          {{ blog.title }}
        </p>
        <p>
          {{ blog.body }}
        </p>
        <p>
          <img
            class="imgFit"
            :src="blog.creator.picture"
            alt="Blog Post Picture"
          />
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
export default {
  name: "Home",
  props: { blog: { type: Object, required: true } },
  setup() {
    return {
      async getAll() {
        try {
          await blogsService.getAll();
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "Error, man");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
.imgFit {
  height: 15rem;
}
</style>