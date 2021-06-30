<template>
  <div class="note-item">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: "NoteItems",
  props: {
    title: String,
    content: String,
  },
};
</script>
<style></style>
