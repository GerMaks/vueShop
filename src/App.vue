<template>
  <v-app dark>
    <Navbar></Navbar>
  
  </v-app>
</template>

<script>

import  Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
   Navbar
  },
  data () {
    return {
      
    }
  }
}
</script>
