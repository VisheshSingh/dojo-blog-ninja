import { ref } from 'vue';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      // simulate delay
      await new Promise(resolve => {
        setTimeout(resolve, 2000)
      })
      
      const res = await fetch(`http://localhost:3000/posts/${id}`);
      if (!res.ok) {
        throw Error('😫 post not found 😫');
      }
      const data = await res.json();
      post.value = data;
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};

export default getPost;
