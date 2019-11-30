<template>
    <div>
        <b-modal id="modal-1" title="Add New Board">
            <b-input-group prepend="Username" class="mt-3">
    <b-form-input></b-form-input>
    <b-input-group-append>
      <b-button variant="outline-success">Button</b-button>
      <b-button variant="info">Button</b-button>
    </b-input-group-append>
  </b-input-group>
        </b-modal>
    </div>

</template>

<script>
export default {
  name: 'Modal'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addBord {
    align-self: center
}
</style>