<template>
  <div id="app">
    <Weather />
  </div>
</template>

<script>
import Weather from './components/Weather'

export default {
  
  components: {
    Weather
  }

}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto;
}


 #nav {
    text-align: right;
    margin: .5em;

    a {
      text-decoration: none;
      font-size: .9rem;
    }

    .router-link-active {
      font-weight: bold;
    }
  }

</style>
