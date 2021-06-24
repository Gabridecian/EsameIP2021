<template>
  <div class="pagina">
    <div class="md-display-1">Lascia una recensione su di noi!</div>
    <md-field>
      <label>Username</label>
      <md-input
        type="text"
        placeholder="Username"
        v-model="dati.username"
        class="form-control"
      ></md-input>
    </md-field>
    <div>
      <md-field>
        <label>Recensione</label>
        <md-input
          type="text"
          placeholder="Scrivi la tua recensione"
          v-model="dati.recensione"
          class="form-control"
        ></md-input>
      </md-field>
    </div>
    <div class="form-group">
      <md-button @click="saveData" class="md-raised md-primary"
        >Invia</md-button
      >
    </div>
    
    </br>
    <md-divider></md-divider>
        </br>
                <div class="md-display-1">Dicono di noi</div>
</br>
<div>
    <md-table class="md-table">
      <md-table-row class="intestazione">
        <md-table-head>Username</md-table-head>
        <md-table-head>Recensione</md-table-head>
      </md-table-row>

      <md-table-row v-for="recensione in recensioni" :key="recensione">
        <md-table-cell>{{recensione.username}}</md-table-cell>
        <md-table-cell>{{recensione.recensione}}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</br>
    </br>
    <md-divider></md-divider>
        </br>

        <div class="md-display-1">Seguici sui nostri social</div>
</br>
 <div>
    <md-list>
       <md-list-item href="https://www.facebook.com/gabriele.decian" target="_blank"><md-icon>facebook</md-icon>Facebook</md-list-item>
        <md-list-item href="https://www.instagram.com/gabridecian/" target="_blank"><md-icon>photo_camera</md-icon>Instagram</md-list-item>
         <md-list-item href="https://twitter.com" target="_blank"><md-icon>article</md-icon>Twitter</md-list-item>
    </md-list>
 </div>
  </div>
</template>
<style lang="scss">
.pagina {
  text-align: center;
}

.md-list {
  width: 320px;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  border: 1px solid rgba(#000, 0.12);
  text-align: center;
  justify-content: center;
  align-items: center;
}
.md-table {
  max-height: 200px;
  margin-left: auto;
  margin-right: auto;
}
</style>
<script>
import { fb, db } from "../firebase";
export default {
  components: {
    fb,
    db,
  },
  name: "TableBasic",
  data() {
    return {
      recensioni: [],
      dati: {
        username: null,
        recensione: null,
      },
    };
  },
  methods: {
    readData() {
      db.collection("recensioni")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            this.recensioni.push(doc.data());
          });
        });
    },
    saveData() {
      db.collection("recensioni")
        .doc()
        .set({
          username: this.dati.username,
          recensione: this.dati.recensione,
        })
        .then(() => {
          alert("Grazie! La tua recensione è stata registrata!");
          this.readData();
          this.reset();
        })
        .catch((error) => {
          alert("Qualcosa è andato storto, riprova!");
        });
    },
    reset() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
  },
  created() {
    this.readData();
  },
};
</script>