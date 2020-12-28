import { ref } from 'vue';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // simulate delay
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

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
  return { posts, error, load };
};

export default getPosts;
