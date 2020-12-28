<template>
  <h2>Home</h2>
  <PostsList :posts="posts" />
</template>

<script>
import { ref } from 'vue';
import PostsList from '../components/PostsList';

export default {
  name: 'Home',
  components: {
    PostsList,
  },
  setup() {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        const res = await fetch(`http://localhost:3000/posts`);
        if (!res.ok) {
          throw Error('no data available 😫');
        }
        const data = await res.json();
        posts.value = data;
      } catch (err) {
        error.value = err.message;
      }
    };
    load();

    return { posts, error };
  },
};
</script>
