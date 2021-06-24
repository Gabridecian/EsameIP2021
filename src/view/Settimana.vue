<template>
  <div class="pagina"></br>
    <h1>Meteo della settimana da oggi, {{ currentDate() }}</h1></br>
    <md-list class="md-list">
      <div v-for="data in dati" :key="data.daily">
        <md-list-item md-expand md-expanded.sync="expandNews" class="listaset">
          <span>{{ new Date(data.dt * 1000).toLocaleDateString() }}</span>
          <span
            ><md-icon v-if="Math.round(data.temp.max) > 28">warning</md-icon
            ><md-icon v-if="Math.round(data.temp.max) > 28"
              >local_fire_department</md-icon
            ></span
          >
          <span
            ><md-icon v-if="Math.round(data.wind_speed * 3.6) > 25"
              >warning</md-icon
            ><md-icon v-if="Math.round(data.wind_speed * 3.6) > 25"
              >air</md-icon
            ></span
          >

          <span>{{ data.weather[0].description.toUpperCase() }}</span>
          <md-list slot="md-expand">
            <md-list-item class="md-inset">
              <span
                ><md-icon v-if="Math.round(data.temp.max) > 28">warning</md-icon
                >Temperatura: {{ Math.round(data.temp.day) }} °C  </span
              >
                          </md-list-item>
            <md-list-item class="md-inset">

              <span
                ><md-icon v-if="Math.round(data.wind_speed * 3.6) > 25"
                  >warning</md-icon
                >  Vento: {{ Math.round(data.wind_speed * 3.6) }} km/h
              </span>
            </md-list-item>
          </md-list>
        </md-list-item>
        <md-divider></md-divider>
      </div>
    </md-list>
  </div>
</template>
<script>
import axios from "axios";

export default {
  components: {
    axios,
  },

  data() {
    return {
      dati: undefined,
      expandNews: false,
    };
  },

  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${
        current.getMonth() + 1
      }/${current.getFullYear()}`;
      return date;
    },
  },
  created: function () {
    return axios
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=46.15&lon=12.15&exclude=alerts&units=metric&lang=it&appid=3b9dbacd43107af3e802f0a4ad318036"
      )
      .then((resp) => {
        this.dati = resp.data.daily;
      });
  },
};
</script>
  <style lang="scss">
.pagina {
  text-align: center;
  height: 100%;
}
.listaset {
  height: 150px;
}
.card-expansion {
  height: 480px;
}

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.md-list {
  height: 100%;
}
.md-inset {
  text-align: center;
  max-width: 80%;
}
</style>
