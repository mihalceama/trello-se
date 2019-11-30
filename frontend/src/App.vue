<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand class="fontTrello" href="#">Trello</b-navbar-brand>
    </b-navbar>
    <BoardHolder />
  </div>
</template>

<script>
import BoardHolder from './components/BoardHolder.vue'

export default {
  name: 'app',
  components: {
    BoardHolder
  }
}
</script>

<style>
#app {
  font-family: 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fontTrello {
  font-family: 'Times New Roman', Times, serif
}
</style>
