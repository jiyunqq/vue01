<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">登录</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
    if (process.env.NODE_ENV === 'development' ) {
      console.log(process.env.BASE_URL)
      console.log(process.env.PUBLIC_URL)
      console.log(process.env.VUE_APP_PUBLIC_URL)
      console.log(process.env.NODE_ENV)
      console.log(process.env.VUE_APP_111)
      console.log(process.env.HOSTNAME)
    }

  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
