<template>
  <h2>Home</h2>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length">
    <PostsList :posts="posts" />
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import PostsList from '../components/PostsList';
import Spinner from '../components/Spinner';
import getPosts from '../composables/getPosts';

export default {
  name: 'Home',
  components: {
    PostsList,
    Spinner,
  },
  setup() {
    const { posts, error, load } = getPosts();
    load();
    return { posts, error };
  },
};
</script>
