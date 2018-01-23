Vue.component("gal-fotos", {
    props: ["titulo", "images", "href"],
    template: '<a v-bind:href="href">\
      <div id="gal">\
        <img v-bind:src="images"><div>\
				  <span id="t"><span id="txt">{{ titulo }}</span></span>\
			  </div>\
      </div>\
	</a>'
})
var galerias = new Vue({ el: "#galerias", })