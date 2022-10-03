<script>
import CustomLogin from "@/pages/login/Custom-Login";
import CustomHome from "@/pages/home/Custom-Home";
import CustomNavbar from "@/components/layout/Custom-Navbar";

const routes = {
  '/': CustomHome,
  '/login': CustomLogin
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/']
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  },
  components: {
    CustomNavbar
  }
}
</script>

<template>
  <div>
    <CustomNavbar/>
    <component :is="currentView"/>

  </div>
  <!--  <a href="#/about">About</a>-->
  <!--  <a href="#/non-existent-path">Broken Link</a>-->
  <!--  <component :is="currentView" />-->
</template>
