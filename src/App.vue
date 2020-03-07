<template>
  <div id="app">
    <message-list></message-list>
  </div>
</template>

<script>
import MessageList from './MessageList.vue'

export default {
  name: 'app',
  components: {
    MessageList
  }
}
</script>

<style>
#app {
  width: 400px;
  max-width: 100%;
}
</style>
