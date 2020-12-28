<template>
  <h2>{{ post.title }}</h2>
  <p>{{ details }}</p>
  <span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'SinglePost',
  props: ['post'],
  setup(props) {
    const details = computed(() => {
      return props.post.details.substring(0, 100) + '...';
    });
    return { details };
  },
};
</script>

<style></style>
