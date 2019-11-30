<template>
  <div class="col-md-4">
    <b-card
      :title="board.board_name"
      class="mb-2 mt-2 mr-2 ml-2"
      :img-src="'https://picsum.photos/600/300/?image=' + Math.floor(Math.random() * 100)"
    >
    <b-button href="#" variant="primary" class="myBtn">Go somewhere</b-button>
    <div>
        <b-dropdown class="m-md-2" text="Settings" variant="success">
            <b-dropdown-item-button>Edit</b-dropdown-item-button>
            <b-dropdown-item-button @click="deleteBoard(board._id)">Delete</b-dropdown-item-button>
        </b-dropdown>
    </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Board',
  props: {
      board: Object
  },
  methods: {
      deleteBoard: function(id) {
         this.$emit("deleteBoard", id);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myBtn {
    margin-bottom: 10px
}
</style>
