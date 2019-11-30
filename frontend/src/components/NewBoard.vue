<template>
    <div class="col-md-4 addBord">
        <b-card>
           <b-button variant="primary" v-b-modal.modal-1>Add Board</b-button>
           <Modal />
        </b-card>
    </div>
</template>

<script>
import Modal from './Modal.vue'

export default {
  name: 'NewBoard',
  components: {
    Modal
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addBord {
    align-self: center
}
</style>
