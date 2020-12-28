<template>
  <div class="home">
    <h2>Home</h2>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <div>
        <PostsList :posts="posts" />
      </div>
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import PostsList from '../components/PostsList';
import Spinner from '../components/Spinner';
import getPosts from '../composables/getPosts';
import TagCloud from '../components/TagCloud';

export default {
  name: 'Home',
  components: {
    PostsList,
    Spinner,
    TagCloud,
  },
  setup() {
    const { posts, error, load } = getPosts();
    load();
    return { posts, error };
  },
};
</script>

<style>
.home,
.tag {
  max-width: 1200px;
  margin: 0 auto;
}

.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 20px;
}
</style>
