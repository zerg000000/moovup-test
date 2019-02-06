<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">All Friends</div>
    </v-ons-toolbar>
    <div class="content">
      <v-ons-pull-hook
        :action="getFriends"
        @changestate="state = $event.state">
        <span v-show="state === 'initial'"> Pull to refresh </span>
        <span v-show="state === 'preaction'"> Release </span>
        <span v-show="state === 'action'"> Loading... </span>
      </v-ons-pull-hook>
      <v-ons-list>  
        <v-ons-list-item v-for="friend in friends" @click="viewFriend(friend)">
          <div class="left">
            <img class="list-item__thumbnail" :src="friend.picture">
          </div>
          <div class="center">
            <span class="list-item__title">{{friend.name}}</span>
            <span class="list-item__subtitle">{{friend.email}}</span>
          </div>
        </v-ons-list-item>
      </v-ons-list>
    </div>
  </v-ons-page>
</template>

<script>
import FriendView from './FriendView'

export default {
  name: 'FriendList',
  data() {
    return {
      state: 'initial',
      friends: []
    }
  },
  components: {
    FriendView
  },
  methods: {
    getFriends(done) {
      this.$http.get('https://www.json-generator.com/api/json/get/cfdlYqzrfS')
        .then( response => {
          this.friends = response.body
          this.friends.forEach((item) => {localStorage.setItem(item._id, JSON.stringify(item))})
          if (done) done()
        })
    },
    viewFriend(f) {
      this.$router.push({name: 'FriendView', params: f})
    }
  },
  created() {
    this.getFriends()
  }
}
</script>
