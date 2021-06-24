<template>
  <div class="paginasole">
    <br/>
        <h1>Alba e tramonto dei prossimi 7 giorni</h1></br>

    <br/>
    <md-table class="md-table">
      <md-table-row>
        <md-table-head>Data</md-table-head>
        <md-table-head>Alba</md-table-head>
        <md-table-head>Tramonto</md-table-head>
        <md-table-head>Nuvolosità</md-table-head>
      </md-table-row>
      <md-table-row v-for="data in dati" :key="data.daily">
        <md-table-cell>{{
          new Date(data.dt * 1000).toLocaleDateString()
        }}</md-table-cell>
        <md-table-cell>{{
          new Date(data.sunrise * 1000).toLocaleTimeString()
        }}</md-table-cell>
        <md-table-cell>{{
          new Date(data.sunset * 1000).toLocaleTimeString()
        }}</md-table-cell>
        <md-table-cell v-if="data.clouds <= 25" class="goodclouds">
          {{ data.clouds }}% - Buona
        </md-table-cell>
        <md-table-cell
          v-if="data.clouds > 25 && data.clouds <= 75"
          class="medclouds"
        >
          {{ data.clouds }}% - Media
        </md-table-cell>
        <md-table-cell v-if="data.clouds > 75" class="badclouds">
          {{ data.clouds }}% - Pessima
        </md-table-cell>
      </md-table-row>
    </md-table>
    <br/>
        <br/>

     <md-button to="/Settimana/" class="md-dense md-raised md-primary" id="button1">Guarda le previsioni della settimana</md-button>
      <br/>
    <br/>

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
    };
  },
  mounted: function () {
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
.paginasole {
  text-align: center;
  justify-content: center;
  min-height: 100%;
}

.md-table {
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
}
#button1 {
  height: 50px;
  width: 100%;
}
</style>
