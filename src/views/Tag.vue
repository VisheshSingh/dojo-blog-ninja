<template>
  <h2>Tag component</h2>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length">
    <PostsList :posts="postsWithTag" />
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
import { computed } from 'vue';

export default {
  name: 'Tag',
  components: {
    PostsList,
    Spinner,
  },
  setup() {
    const { posts, error, load } = getPosts();
    const route = useRoute();

    const postsWithTag = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });

    load();
    return { posts, error, postsWithTag };
  },
};
</script>

<style></style>
