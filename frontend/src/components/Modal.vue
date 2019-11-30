<template>
  <div>
    <b-modal id="modal-1" title="Add New Board" hide-footer>
      <b-input-group prepend="Board name: " class="mt-3">
        <b-form-input v-model="newBoardName"></b-form-input>
        <b-input-group-append>
          <b-button variant="outline-success" @click="addBoard">Add</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data: function() {
    return {
      newBoardName: ""
    };
  },
  methods: {
    addBoard: function() {
      this.$emit("addBoard", this.newBoardName);
      this.$bvModal.hide("modal-1");
      this.newBoardName = "";
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
