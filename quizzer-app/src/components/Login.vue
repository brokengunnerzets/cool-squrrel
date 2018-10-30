<template>
  <div class="login-box shadow p-3 mb-5 bg-white rounded">
    <h1>Join a Game</h1>
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="text" class="form-control" id="inputUsername" aria-describedby="username" placeholder="Enter username">
    <small id="emailHelp" class="form-text text-muted">This will be your identity in the game.</small>
  </div> 
  <button type="submit" class="btn" v-bind:style="{ backgroundColor: color}">Join</button>
</form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    color: String,
  },
  data: () => ({
    
  }),
  methods: {
    
  }
};
</script>

<style scoped>
.login-box {
  width: 100%;
  max-width: 600px;
  text-align: center;
}
</style>
