<template>
  <v-ons-page>
    <v-ons-toolbar>
     <div class="left">
       <v-ons-back-button>Back</v-ons-back-button>
     </div>
     <div class="center">{{ friend.name }}</div>
    </v-ons-toolbar>
    <FriendMap v-bind:markers="markers"></FriendMap>
    <v-ons-list>
      <v-ons-list-item>
        <div class="left">Name</div>
        <div class="right">{{ friend.name }}</div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="left">Email</div>
        <div class="right">{{ friend.email }}</div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="left">Picture</div>
        <div class="right">
          <img class="list-item__thumbnail" :src="friend.picture">
        </div>
      </v-ons-list-item>
  </v-ons-list>
  </v-ons-page>
</template>

<script>
import FriendMap from '../components/FriendMap'

function location2lnglat (location) {
  return {lat: location.latitude, lng: location.longitude}
}

export default {
  name: 'FriendView',
  components: {
    FriendMap
  },
  data() {
    return {
      friend: {}
    }
  },
  computed: {
    markers () {
      return this.friend.location ? 
        [{id: this.friend._id,
          position: location2lnglat(this.friend.location)}] : []
    }
  },
  created() {
    if (this.$route.params.name) {
      this.friend = this.$route.params
    } else {
      this.friend = JSON.parse(localStorage.getItem(this.$route.params._id))
    }
  }
}
</script>
