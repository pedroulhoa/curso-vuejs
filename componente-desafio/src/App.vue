<template>
  <v-app>
    <sideMenu />
    <toolbar />
    <carousel />
    <footer-bar />
  </v-app>
</template>

<script>
import SideMenu from "./SideMenu";
import ToolBar from "./ToolBar";
import Carousel from "./Carousel";
import Footer from "./Footer";

export default {
  components: {
    sideMenu: SideMenu,
    toolbar: ToolBar,
    carousel: Carousel,
    "footer-bar": Footer
  },
  data() {
    return {};
  }
};
</script>
