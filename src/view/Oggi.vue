<template>
  <div class="pagina">
        <div class="md-title">

      Il meteo ora a Sedico:</br>
      <div class="md-display-1">

        {{ dati.weather[0].description.toUpperCase() }}
      </div>
    </div>
 <md-divider></md-divider>
</br>
    <span>
      <md-icon>water_drop</md-icon>
    </span>
</br>
    <div class="md-subheading">
      <br />

      Il tasso di <strong>umidità</strong> ora a Sedico:</br>
      <div class="md-body-2">{{ dati.humidity }} %</div>
    </div>
    <br />
    <md-card class="md-card md-with-hover" id="webcamview">
      <md-card-media>
        <md-ripple>
          <img
            src="https://www.meteomeano.it/webcam.jpg?randomize=6096"
            alt="Webcam"
          />
        </md-ripple>
      </md-card-media>

      <md-card-actions><router-link to="/Webcam/" class="md-text">
        <span class="md-body-1">Le nostre webcam</span></router-link>
        <span
          ><router-link to="/Webcam/" class="md-icon-button">
            <md-icon>arrow_forward</md-icon>
          </router-link></span
        >
      </md-card-actions>
    </md-card>
</br>
    <div>
      <br />
      <div class="md-title">Temperature</div>
      <br />
      <span>
        <md-icon>thermostat</md-icon>
      </span>

      <div class="md-subheading">
        <br />

        La temperatura <strong>dell'aria</strong> ora a Sedico:</br>
        <div class="md-body-2">{{ Math.round(dati.temp) }} °C</div>
      </div>
      <br />
      <div class="md-subheading">
        La temperatura <strong>percepita</strong> ora a Sedico:</br>
        <div class="md-body-2">{{ Math.round(dati.feels_like) }} °C</div>
            <span>
        <md-dialog-alert
          :md-active.sync="first"
          md-title="Le differenze tra le temperature"
          md-content="La differenza tra la temperatura dell'aria e quella percepita è data dal calcolo sulla base di numerose variabili, come <strong>umidità</strong>, <strong>velocità</strong> e <strong>direzione del vento</strong>."
        />
        <md-button class="md-icon-button" @click="first = true">
          <md-icon>help_center</md-icon>
        </md-button>
      </span>
</div>
    </div>
    <br />
 <md-divider></md-divider></br>
    <div class="md-title">Venti e pressione</div>
    <span>
      <br />

      <md-icon>air</md-icon>
    </span>

    <div class="md-subheading">
      <br />

      La <strong>velocità del vento</strong> ora a Sedico:</br>
      <div class="md-body-2">{{ Math.round(dati.wind_speed * 3.6) }} km/h</div>
    </div>
    <br />
    <div class="md-subheading">
      La <strong>pressione atmosferica</strong> ora a Sedico:</br>
      <div class="md-body-2">{{ dati.pressure }} mb</div>
      <span>
        <md-dialog-alert
          :md-active.sync="second"
          md-title="I valori della pressione"
          md-content="L'<strong>alta pressione</strong>, che contraddistingue il bel tempo, si verifica con una pressione atmosferica superiore a <strong>1020 mb</strong>. Sotto i <strong>1010 mb</strong> si parla di <strong>bassa pressione</strong>, associata al maltempo; Tra questi valori il meteo è spesso variabile e/o instabile."
        />
        <md-button class="md-icon-button" @click="second = true">
          <md-icon>help_center</md-icon>
        </md-button>
      </span>
      <br />
       <md-button class="md-raised md-primary" to="/Ora/" id="pulsante2">Vedi il dettaglio di oggi</md-button>
       <br/>
    </div>
  </div>
</template>
<style lang="scss">
.md-display-1 {
  display: inline-block;
  margin: 20px;
  font-weight: 900;
  font-size: 50px;
}
.md-title {
  display: inline-block;
  margin: 20px;
  font-weight: 400;
  font-size: 30px;
}
.md-body-2 {
  display: inline-block;
  margin: 20px;
  font-weight: 900;
  font-size: 20px;
}
.pagina {
  text-align: center;
}
.md-card {
  margin: 4px;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
#webcamview {
  width: 50%;
}
#pulsante2 {
  width: 60%;
  height: 50px;
}
</style>
<script>
import axios from "axios";
export default {
  components: {
    axios,
  },
  name: "Divider",
  name: "DialogAlert",
  name: "datioggi",
  data() {
    return { dati: undefined, first: false, second: false };
  },
  mounted() {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=46.15&lon=12.15&exclude=alerts&units=metric&lang=it&appid=3b9dbacd43107af3e802f0a4ad318036"
      )
      .then((resp) => {
        this.dati = resp.data.current;
      });
  },
};
</script>