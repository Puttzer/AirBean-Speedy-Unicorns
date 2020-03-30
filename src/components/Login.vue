<template>
  <div class="Login-Container">
    <form @submit.prevent="login">
      <label for="email">Email</label>  
      <input type="email" class="email">
      <label for="password">Password</label>
      <input type="password">
      <button @click="$router.push('/Meny')">Login</button>
    </form>
   </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String
  },
  methods:{
    login(){  
    // localStorage.setItem('cookie-consent', true)
    this.$router.push('/profile')  
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Login-Container{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  height: 70vh;
  color: white;
}
button{
  background: rgb(58, 35, 19);
  padding: 20px;
  color: rgb(230, 223, 210);
}
</style>