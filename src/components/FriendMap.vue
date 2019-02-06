<template>
  <GoogleMapLoader
    :mapConfig="mapConfig"
    apiKey="AIzaSyCOA8m5hEE7Pfi-nA5L35LUXqVjZZBaZZw"
    class="friend-map">
    <template slot-scope="{ google, map }">
      <GoogleMapMarker
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
        :google="google"
        :map="map"/>
    </template>
  </GoogleMapLoader>
</template>

<script>
import GoogleMapLoader from './GoogleMapLoader'
import GoogleMapMarker from './GoogleMapMarker'
import { mapSettings } from '@/constants/mapSettings'

export default {
  components: {
    GoogleMapLoader,
    GoogleMapMarker
  },
  props: {
    markers: {
        type: Array,
        default: () => []
    }
  },
  computed: {
    mapConfig () {
      return {
        ...mapSettings,
        center: (this.markers.length > 0) ? this.markers[0].position : {lat: 0, lng: 0}
      }
    }
  }
}
</script>
<style scoped>
.friend-map {
  height: 300px;
}
</style>