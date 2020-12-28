<template>
  <h2>Home</h2>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length">
    <PostsList :posts="posts" />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import PostsList from '../components/PostsList';
import getPosts from '../composables/getPosts';

export default {
  name: 'Home',
  components: {
    PostsList,
  },
  setup() {
    const { posts, error, load } = getPosts();
    load();
    return { posts, error };
  },
};
</script>
