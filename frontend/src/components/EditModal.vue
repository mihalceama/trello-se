<template>
  <div>
    <b-modal :id="'modal-' + board._id" :title="board.board_name + ' settings'" hide-footer>
      <b-input-group prepend="Board name: " class="mt-3">
        <b-form-input v-model="updatedBoardName"></b-form-input>
        <b-input-group-append>
          <b-button variant="outline-success" @click="update">Save</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    board: Object
  },
  data: function() {
    return {
      updatedBoardName: this.board.board_name
    };
  },
  methods: {
    update: function() {
      this.$emit("update", this.board._id, this.updatedBoardName);
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
