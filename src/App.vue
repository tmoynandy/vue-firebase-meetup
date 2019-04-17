<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="sideNav"
      clipped
      fixed
      app
     class="hidden-sm-and-up">
      <v-list dense >
        <v-list-tile v-for = "item in menuItems" 
        :key ="item.title"
        router
        :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer"> DevMeet</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for = "item in menuItems"
         :key ="item.title"
         router
         :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data(){
      return {
        sideNav : false,
        menuItems : [
          { icon : 'dashboard', title : 'View Meetups', link : '/meetups'},
          { icon : 'room', title : 'Organise Meetup', link : '/meetups/new'},
          { icon : 'person', title : 'Profile', link : '/profile'},
          { icon : 'face', title : 'Sign up', link : '/signup'},
          { icon : 'lock_open', title : 'Sign in', link : '/signin'}
        ]
      }
    } 
  }
</script>