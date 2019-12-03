<template>
  <v-app>
    <SideMenu />
    <ToolBar />
    <Carousel />
    <Footer />
  </v-app>
</template>

<script>
import SideMenu from "@/components/template/SideMenu";
import ToolBar from "@/components/template/ToolBar";
import Carousel from "@/components/widgets/Carousel";
import Footer from "@/components/template/Footer";

export default {
  components: {
    SideMenu,
    ToolBar,
    Carousel,
    Footer
  },
  data() {
    return {};
  }
};
</script>
