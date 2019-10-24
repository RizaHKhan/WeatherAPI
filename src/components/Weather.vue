<template>
  <div class="weather">

    <div class="container">
      <h1 class="appname">Weather API</h1>
      
      <div class="search">
        <input type="text" placeholder="Enter your zip" v-model="zipcode"><button @click.prevent='dispatchAction'>Submit</button>
      </div>

      <div class="weather-meta" v-if="get_weatherData">
      
          <div class="meta"><h3 class="meta-header">Location: </h3><h3 class="meta-data">{{get_weatherData.weatherObservation.stationName}}</h3></div>
          <div class="meta"><h3 class="meta-header">Temperature: </h3><h3 class="meta-data">{{((get_weatherData.weatherObservation.temperature * 9/5 ) + 32).toFixed(2)}} Farenheit</h3>

              <img src="../assets/sunny.svg" alt="" v-if="((get_weatherData.weatherObservation.temperature * 9/5 ) + 32).toFixed(2) > 83">
              <img src="../assets/snowflake.svg" alt="" v-if="((get_weatherData.weatherObservation.temperature * 9/5 ) + 32).toFixed(2) < 34">

          </div>

          <div class="meta"><h3 class="meta-header">Wind Speed: </h3><h3 class="meta-data">{{(get_weatherData.weatherObservation.windSpeed * 1.15078).toFixed(2)}} /mph</h3>

              <img src="../assets/wind.svg" alt="" v-if="(get_weatherData.weatherObservation.windSpeed * 1.15078).toFixed(2) > 15">

          </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapState} from 'vuex'

export default {
  data() {
    return {
      zipcode: null,
      emptyData: null
    }
  },
  computed: {
    ...mapGetters([
      'get_weatherData'
    ]),
    ...mapState([
      'weatherInfo'
    ])
    
  },
  methods: {
    ...mapActions([
      'act_postalcode'
    ]),
    dispatchAction() {
      this.$store.state.weaterInfo = ''
      this.$store.dispatch('act_postalcode', this.zipcode)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">



.container {
  margin: auto;
  width: 60%;
  display: flex;
  flex-direction: column;
  
  .appname {
    margin: .5em;
    font-size: 5rem;
    text-align: center;
    color: rgba(200,100,100,.8);
  }
  
  .search {
    display: flex;
    margin: 1em auto;
    
    input {
      border: none;
      border-bottom: 1px solid rgba(50,50,255,.5);
      font-size: 2rem;
      margin: 0 1em;
    }
    button {
      background: #027BFF;     
      border: none;
      border-radius: 5px;
      font-size: 2rem;
      padding: 0 1em;
      color: rgba(255,255,255,.8);
      transition: color 1s ease-in-out;
      
      &:hover, &:focus {
        color: rgba(255,255,255,1);
      }
    }
  }
  
.weather-meta {
    animation: fade-in-out .5s forwards;
  
    .meta {
    display: flex;
    margin: .75em 0;

    font-size: 2rem;

    .meta-header {
      margin: 0 .5em 0 0;
      color: rgba(100,100,100,.75);
    }

    .meta-data {
      color: rgba(50,50,255,.75);
    }

    img {
      height: 30px;
      margin: auto .75em;
    }
  }
}
}

@keyframes fade-in-out {
  0% {opacity: 0; transform: translateX(-500px);}
  100% {opacity: 1; transform: translateX(0);}
  
}

</style>


