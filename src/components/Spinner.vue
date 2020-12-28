<template>
  <div class="spinner"></div>
</template>

<script>
export default {
  name: 'Spinner',
};
</script>

<style>
.spinner {
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #ff8800;
  animation: spin 1s ease infinite;
}

@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}
</style>
