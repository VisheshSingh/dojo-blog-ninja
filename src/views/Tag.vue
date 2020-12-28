<template>
  <h2>Tag component</h2>
  <div v-if="error">{{ error }}</div>
  <div v-if="filteredPosts.length">
    <PostsList :posts="filteredPosts" />
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import getPosts from '../composables/getPosts';
import PostsList from '../components/PostsList';
import Spinner from '../components/Spinner';

export default {
  name: 'Tag',
  components: {
    PostsList,
    Spinner,
  },
  setup() {
    const { posts, error, load } = getPosts();
    load();
    return { posts, error };
  },
  computed: {
    filteredPosts() {
      const route = useRoute();
      return this.posts.filter((post) => post.tags.includes(route.params.tag));
    },
  },
};
</script>

<style></style>
