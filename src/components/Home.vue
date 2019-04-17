<template>
    <v-container>
        <v-layout row wrap class="mb-2">
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large router to="/meetups">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn large router to="/meetups/new">Organise Meetups</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12>
                <v-carousel style="cursor:pointer">
                    <v-carousel-item
                    v-for="meetup in meetups"
                    :key="meetup.id"
                    :src="meetup.imageUrl"
                    @click="onLoadMeetup(meetup.id)"
                    >
                    <div class="title text-xs-center">
                        {{meetup.title}}
                    </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12 class="text-xs-center">
                <p>Join our Awesome Meetups</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data (){
        return{
            meetups : [
                {imageUrl : 'https://www.oberoihotels.com/-/media/Oberoi-Hotels/The-Oberoi-Grand-kolkata/overview/welcome/victoria-memorial-welcome.png', 
                id:'123456', title: 'Meetup in kolkata'},
                {imageUrl : 'https://www.oberoihotels.com/-/media/Oberoi-Hotels/The-Oberoi-Grand-kolkata/overview/welcome/victoria-memorial-welcome.png', 
                id:'123456', title: 'Meetup in Bally'},
                {imageUrl : 'https://www.oberoihotels.com/-/media/Oberoi-Hotels/The-Oberoi-Grand-kolkata/overview/welcome/victoria-memorial-welcome.png', 
                id:'123456', title: 'Meetup in Howrah'},
            ]
        }
    },
    methods :{
        onLoadMeetup(id) {
            this.$router.push('/meetups/1');//(meetups/+id)
        }
    }
}
</script>
<style scoped>
.title{
    position: absolute;
    bottom: 50px;
    background-color: black;
    color: white;
    font-size: 2rm;
    opacity: 0.6;
    padding: 10px;

}
</style>