<template>
  <div class="col-md-4 addBord">
    <b-card class="mb-2 mt-2 mr-2 ml-2">
      <b-button variant="primary" v-b-modal.modal-1>Add Board</b-button>
      <Modal @addBoard="onBoardAdd" />
    </b-card>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
import axios from "axios";

export default {
  name: "NewBoard",
  components: {
    Modal
  },
  methods: {
    onBoardAdd: function(newBoardName) {
      axios
        .post("http://localhost:3000/boards", { board_name: newBoardName })
        .then(res => {
          this.$emit("boardCreated", res.data.board);
        })
        .catch(err => {
          this.err = err;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addBord {
  align-self: center;
}
</style>
