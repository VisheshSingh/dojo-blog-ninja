<template>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.details }}</p>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import Spinner from '../components/Spinner';
import getPost from '../composables/getPost';
import { useRoute } from 'vue-router';

export default {
  name: 'Details',
  props: ['id'],
  components: {
    Spinner,
  },
  setup() {
    const route = useRoute();

    const { post, error, load } = getPost(route.params.id);

    load();
    return { post, error };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}

.post {
  color: #444;
  line-height: 1.5rem;
  margin-top: 40px;
}

.pre {
  white-space: pre-wrap;
}
</style>
