Vue.component('menu-item', {
    props: ["index", "radio", "fotos", "videos", "nosotros", "logo"],
    template: '<div>\
			<div class="menu-cel"><img v-bind:src="logo" alt=""><span class="icon-menu"></span></div>\
      <div class="sombra"></div>\
	  <nav class="menu">\
        <figure><a v-bind:href="index"><img v-bind:src="logo" alt=""></a></figure>\
        <ul>\
          <li><a v-bind:href="index" class="ocultar-escritorio">Inicio</a></li>\
          <li><a v-bind:href="radio" class="borderanim"><span>Radio Online</span></a></li>\
          <li class="submenu"><a href="#" class="borderanim"><span>Galeria</span></a>\
            <ul class="children">\
              <li>\
                <a v-bind:href="fotos" class="borderanim">Fotos\
                  <span class="icon-dot"></span>\
                </a>\
              </li>\
              <li>\
                <a v-bind:href="videos" class="borderanim">Videos\
                  <span class="icon-dot "></span>\
                </a>\
              </li>\
            </ul>\
          </li>\
          <li><a v-bind:href="nosotros" class="borderanim"><span>Nosotros</span></a></li>\
        </ul>\
      </nav>\
		</div>'
})
var menu = new Vue({ el: "#menu" })