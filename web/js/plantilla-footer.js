Vue.component("item-footer", {
    props: ["index", "logo"],
    template: '<footer class="mdl-mini-footer">\
    <div class= "mdl-mini-footer__left-section">\
      <div class="mdl-logo">\
        <a v-bind:href="index">\
          <img class="mdl-logo" v-bind:src="logo" alt="">\
        </a>\
          <span id="title">La Voz de OIENIV</span>\
            </div>\
        <ul class="mdl-mini-footer__link-list" style="display:block">\
          <li>\
            <a href="">Contactanos</a>\
          </li>\
          <li>\
            <a href="">Apoyanos</a>\
          </li>\
          <li>\
            <a href="">Vota</a>\
          </li>\
        </ul>\
      </div>\
      <div class="mdl-mini-footer__right-section">\
        <button class="mdl-mini-footer__social-btn" id="icon-face">\
          <span class="icon-facebook" style="color: rgb(59, 89, 152)"></span>\
        </button>\
        <button class="mdl-mini-footer__social-btn" id="icon-twit">\
          <span class="icon-twitter" style="color: rgb(29, 161, 242)"></span>\
        </button>\
        <button class="mdl-mini-footer__social-btn" id="icon-inst">\
          <span class="icon-instagram" style="color: rgb(205, 32, 31)"></span>\
        </button>\
        <button class="mdl-mini-footer__social-btn" id="icon-yt">\
          <span class="icon-youtube" style="color: rgb(228, 64, 95)"></span>\
        </button>\
      </div>\
    </footer>'
})
var pie = new Vue({
    el: "#pie"
})