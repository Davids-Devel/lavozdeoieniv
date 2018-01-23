Vue.component('bloque-prog', {
    props: ["programa", "dia", "hora", "locutor", "descripcion", "img"],
    template: '<div class="bloque-programa">\
      <div class="bloque">\
        <img class="pull-left img" v-bind:src="img" alt="">\
        <div class="">\
          <h6>{{ programa }}</h6>{{ dia }}<br>{{ hora }}<br>con {{ locutor }}<br>\
          <button class="botonMas mdl-button mdl-color--amber-800">Ver Mas\
          </button>\
          <span class="des" style="display:none">{{ descripcion }}</span><br>\
          <button class="mdl-button botonMenos mdl-color--amber-800" style="display:none">Ver Menos\
          </button>\
        </div>\
      </div>\
    </div>'

})
var bloque = new Vue({
    el: ".programas"
})