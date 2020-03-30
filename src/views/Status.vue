<template>
  <div class="status">
    <h1>
      Ordernummer:
      <strong>#3123D24</strong>
    </h1>

    <div class="drone-order">
      <img src="./../assets/graphics/drone.svg" alt />
      <h1>Din beställning är på väg!</h1>
    </div>
    <div class="countdown-placeholder">
      <p>13 minuter</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=PT+Serif:700|Work+Sans:400,600&display=swap");

.status {
  background: #e5674e;
  height: 100vh;
  color: white;
  text-align: center;
  padding: 1rem;

  .drone-order {
    h1 {
      font-size: 36px;
      font-family: "PT Serif";
      color: white;
    }
  }
  .countdown-placeholder {
    font-family: "Work Sans";
  }
}
h1 {
  padding-top: 20px;
  font-size: 16px;
  font-family: "Work Sans";
  color: rgba(255, 255, 255, 0.7);
}
img {
  padding-top: 20px;
  width: 300px;
  animation: hover 3s linear infinite;
}
@keyframes hover {
  0% {
    transform: translateY(0) rotateZ(0deg);
  }
  25% {
    transform: translateY(0.25rem) rotateZ(1deg);
  }
  50% {
    transform: translateY(0.5rem) rotateZ(0deg);
  }
  75% {
    transform: translateY(0.25rem) rotateZ(-1deg);
  }
  100% {
    transform: translateY(0) rotateZ(0deg);
  }
}
</style>