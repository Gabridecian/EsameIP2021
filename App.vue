<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <md-button
          class="md-icon-button"
          @click="toggleMenu"
          v-if="!menuVisible"
        >
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">METEO <strong>SEDICO</strong></span>
      </md-app-toolbar>

      <md-app-drawer
        :md-active.sync="menuVisible"
        md-persistent="full"
        class="menulat"
      >
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>METEO <strong>SEDICO</strong></span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <router-link to="/" class="md-icon-button">
            <md-icon>light_mode</md-icon>
            </router-link>
            <span
              ><router-link to="/" class="md-list-item-text" @click="toggleMenu"
                >METEO DI OGGI</router-link
              ></span
            >
          </md-list-item>

          <md-list-item><router-link to="/Settimana/" class="md-icon-button">
            <md-icon>wb_sunny</md-icon></router-link>
            <span
              ><router-link to="/Settimana" class="md-list-item-text"
                >SETTIMANA</router-link
              ></span
            >
          </md-list-item>

          <md-list-item><router-link to="/Network/" class="md-icon-button">
            <md-icon>people</md-icon></router-link>
            <span
              ><router-link to="/Network" class="md-list-item-text"
                >NETWORK</router-link
              ></span
            >
          </md-list-item>
          <md-list-item><router-link to="/Webcam/" class="md-icon-button">
            <md-icon>videocam</md-icon></router-link>
            <span
              ><router-link to="/Webcam" class="md-list-item-text"
                >WEBCAM</router-link
              ></span
            >
          </md-list-item>
          <md-list-item><router-link to="/Sole/" class="md-icon-button">
            <md-icon>nightlight</md-icon></router-link>
            <span
              ><router-link to="/Sole" class="md-list-item-text"
                >ALBA E TRAMONTO</router-link
              ></span
            >
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content class="contenuto"> <router-view /> </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "PersistentFull",
  data: () => ({
    menuVisible: false,
  }),
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Material+Icons");
.menulat{
  width: 10%;
  height: 100%;
}
.contenuto {
  height: 100%;
    width: 100%;

  background: linear-gradient(-45deg, #ffffff, #c5c5c5, #8ac2d8, #9be4d5);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}

}
// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: md-get-palette-color(bluegrey, 700), // The primary color of your application
  accent: md-get-palette-color(white, 700), // The accent or secondary color
  theme: light // This can be dark or light
));

@import "~vue-material/dist/theme/all";</style>
