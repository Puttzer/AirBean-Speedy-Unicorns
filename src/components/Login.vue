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
  flex-direction: column;
  background-color: orange;
  height: 80vh;
  color: white;
}
form { 
  height: 180px;
  width: 230px;

  display: flex; 
  flex-direction: column; 
  flex: 0 0 auto; 
  
  border: 1px solid; 
  border-radius: 2px;
  padding: 15px;
  background: lightseagreen; 
}
form label, form button {
  margin-top: 15px;
}
form label {
  font-size: 20px;
}
form input {
  flex: 1 1 auto;
  font-size: 20px;

}
button{
  background: rgb(58, 35, 19);
  padding: 10px;
  color: rgb(230, 223, 210);
}
</style>