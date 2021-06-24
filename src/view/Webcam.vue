<template>
<div class="paginacam">
  </br>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-media md-ratio="16:9">
          <img
            src="https://images-webcams.windy.com/84/1342987684/daylight/full/1342987684.jpg"
            alt="Webcam2"
          />
        </md-card-media>

        <md-card-header>
          <div class="md-title">Vista sul Serva</div>
          <div class="md-subhead">Webcam offerta da Windy.com</div>
        </md-card-header>

        <md-card-expand>
          <md-card-actions md-alignment="space-between">
            <div>
              <md-button
                href="https://www.windy.com/en/-Webcams/Italy/Veneto/Belluno/Monte%20Serva/webcams/1342987684"
                >Ingrandisci</md-button
              >
            </div>

            <md-card-expand-trigger>
              <md-button>Di più</md-button>
            </md-card-expand-trigger>
          </md-card-actions>

          <md-card-expand-content>
            <md-card-content>
              Webcam rivolta da Belluno verso il monte Serva, vista della
              situazione attuale del comune in direzione Nord e in direzione
              Est.
            </md-card-content>
          </md-card-expand-content>
        </md-card-expand>
      </md-ripple>
    </md-card>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-media md-ratio="16:9">
          <img
            src="https://www.meteomeano.it/webcam.jpg?randomize=6096"
            alt="Webcam3"
          />
        </md-card-media>

        <md-card-header>
          <div class="md-title">Vista sul Pizzocco</div>
          <div class="md-subhead">Webcam offerta da MeteoMeano</div>
        </md-card-header>

        <md-card-expand>
          <md-card-actions md-alignment="space-between">
            <div>
              <md-button
                href="https://www.meteomeano.it/webcam.jpg?randomize=6096"
                >Ingrandisci</md-button
              >
            </div>

            <md-card-expand-trigger>
              <md-button>Di più</md-button>
            </md-card-expand-trigger>
          </md-card-actions>

          <md-card-expand-content>
            <md-card-content>
              Webcam rivolta da San Gregorio nelle Alpi verso il Monte Pizzocco
              e la Val Canzoi.
            </md-card-content>
          </md-card-expand-content>
        </md-card-expand>
      </md-ripple>
    </md-card>
  </br>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-media md-ratio="16:9">
          <img
            src="https://cams.skigebiete-test.de/images/ecu/content/c_webcam/view-of-the-ski-runs-from-the-rifugio-blick-auf-die-skipisten-von-der-rifugio-visentin_n9625-4975-0_m.jpg"
            alt="Webcam4"
          />
        </md-card-media>

        <md-card-header>
          <div class="md-title">Vista da Col Toront</div>
          <div class="md-subhead">Webcam offerta da Skigebiete</div>
        </md-card-header>

        <md-card-expand>
          <md-card-actions md-alignment="space-between">
            <div>
              <md-button
                href="https://cams.skigebiete-test.de/images/ecu/content/c_webcam/view-of-the-ski-runs-from-the-rifugio-blick-auf-die-skipisten-von-der-rifugio-visentin_n9625-4975-0_m.jpg"
                >Ingrandisci</md-button
              >
            </div>
            <md-card-expand-trigger>
              <md-button>Di più</md-button>
            </md-card-expand-trigger>
          </md-card-actions>

          <md-card-expand-content>
            <md-card-content>
              Webcam situata a Col Toront (Nevegal), riprende la situazione
              meteo verso sud.
            </md-card-content>
          </md-card-expand-content>
        </md-card-expand>
      </md-ripple>
    </md-card>  

    <md-card md-with-hover>
      <md-ripple>
        <md-card-media md-ratio="16:9">
          <img
            src="https://images-webcams.windy.com/70/1349324770/current/normal/1349324770.jpg"
            alt="Webcam5"
          />
        </md-card-media>

        <md-card-header>
          <div class="md-title">Vista sul Peron</div>
          <div class="md-subhead">Webcam offerta da Windy.com</div>
        </md-card-header>

        <md-card-expand>
          <md-card-actions md-alignment="space-between">
            <div>
              <md-button href="https://www.ilmeteo.it/webcam/Sospirolo"
                >Ingrandisci</md-button
              >
            </div>
            <md-card-expand-trigger>
              <md-button>Di più</md-button>
            </md-card-expand-trigger>
          </md-card-actions>

          <md-card-expand-content>
            <md-card-content>
              Webcam rivolta da Libano verso il Monte Peron e la Pala Alta.
            </md-card-content>
          </md-card-expand-content>
        </md-card-expand>
      </md-ripple>
    </md-card>
      </br>

    </div>

</template>
<style lang="scss" scoped>
.paginacam {
  width: 100%;
  height: 100%;
  text-align: center;
}
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>
<script>
export default {
  name: "CardExpansion",
};
</script>