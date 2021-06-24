<template>
<div>
        <span
        ><router-link :to="'/'" class="md-icon-button">
          <md-icon>arrow_back</md-icon>
        </router-link></span
      >

  <div class="paginaora">
    <div>
      <span class="md-display-1"
        >Il meteo ora per ora dalle {{ currentHour() }}</span
      >
    </div></br>
    <md-list :md-expand-single="expandSingle" class="tabella">
      <div v-for="data in dati" :key="data.hourly">
        <md-list-item md-expand md-expanded.sync="expandNews">
          <span>{{ new Date(data.dt * 1000).toLocaleString() }}</span>
          <span
            ><md-icon v-if="Math.round(data.temp) >= 28"
              >local_fire_department</md-icon
            ></span
          >
          <span
            ><md-icon v-if="Math.round(data.wind_speed * 3.6) > 25"
              >air</md-icon
            ></span
          >

          <span>{{ data.weather[0].description.toUpperCase() }}</span>

          <md-list slot="md-expand">
            <md-list-item class="md-inset">
              <span>Temperatura: {{ Math.round(data.temp) }}°C</span>
            </md-list-item>
                        <md-list-item class="md-inset">
              <span>Vento: {{ Math.round(data.wind_speed * 3.6) }}km/h</span>

</md-list-item>
          </md-list>
        </md-list-item>
        <md-divider></md-divider>
      </div>
    </md-list>
  </div>
</div>
</template>
<script>
import axios from "axios";
export default {
  components: {
    axios,
  },
  name: "ListExpansion",
  methods: {
    currentHour() {
      const current = new Date();
      const date = current.getHours();
      return date;
    },
  },
  data() {
    return { dati: undefined, expandNews: false, expandSingle: false };
  },
  created: function () {
    return axios
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=46.15&lon=12.15&exclude=alerts&units=metric&lang=it&appid=3b9dbacd43107af3e802f0a4ad318036"
      )
      .then((resp) => {
        this.dati = resp.data.hourly.slice(0, 20);
      });
  },
};
</script>
<style lang="scss">
$list-width: 350px;
.paginaora {
  text-align: center;
}
.md-inset {
  max-width: 60%;
  text-align: center;
}
.tabella {
  min-width: 200px;
}
.full-control {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
}

.list {
  width: $list-width;
}

.full-control > .md-list {
  width: $list-width;
  max-width: 100%;
  height: 400px;
  display: inline-block;
  overflow: auto;
  border: 1px solid rgba(#000, 0.12);
  vertical-align: top;
}

.control {
  min-width: 250px;
  display: flex;
  flex-direction: column;
  padding: 16px;
}
</style>