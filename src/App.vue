<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="sideNav"
      clipped
      fixed
      app
     class="hidden-sm-and-up">
      <v-list dense >
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>View Meetups</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>Kolkata Dev Meet</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat>
          <v-icon left>dashboard</v-icon>
          View Meetups
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      sideNav: null
    })
  }
</script>