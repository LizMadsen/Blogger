<template >
  <form @submit.prevent="create()">
    <input
      type="text"
      name="blog-title"
      placeholder="Title"
      required
      v-model="blog.title"
    />
    <textarea
      name="blog-post"
      cols="30"
      rows="10"
      min="10"
      required
      placeholder="Post"
      v-model="blog.body"
    ></textarea>
    <label for="imgUrl" class="form-label"> Image URL</label>
    <input type="url" name:="imgUrl" placeholder="Image Url Here" required
    v-model="blog.imgUrl" />
  </form>
</template>


<script>
import { ref } from "@vue/reactivity";
import { blogsService } from "../services/BlogsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
export default {
  setup() {
    const blog = ref({});
    return {
      blog,
      async create() {
        try {
          await blogsService.create(blog.value);
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "Yooooo this is an error");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>