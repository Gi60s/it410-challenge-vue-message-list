<template>
  <div>
    <!-- 1. When the form is submitted then add the message to the list -->
    <form>
      <input placeholder="New Message">
      <button type="submit">Add</button>
    </form>

    <!-- 2. Convert this into a dynamically generated list of all messages -->
    <div class="message"> <!-- keep class="message" for tests -->
      <div>Message 1</div>
      <button>Delete</button>
    </div>
    <div class="message">
      <div>Message 2</div>
      <button>Delete</button>
    </div>
    <div class="message">
      <div>Message 3</div>
      <button>Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'message-list'
}
</script>

<style scoped>
form,
.message {
  display: flex;
}

form > *,
.message > * {
  flex: 1;
  margin-bottom: 10px;
}

form > button,
form > input[type=submit],
.message > button {
  flex: 0;
  margin-left: 8px;
}
</style>
