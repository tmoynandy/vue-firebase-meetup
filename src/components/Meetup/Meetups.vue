<template>
    <v-container>
        <v-layout row wrap v-for="meetup in meetups" :key="meetup.id" class="mb-2">
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card>
                    <v-container fluid>
                        <v-layout>
                            <v-flex xs5 sm4 md3>
                                <v-img
                                    :src="meetup.imageUrl"
                                    height="125px">
                                </v-img>
                            </v-flex>
                            <v-flex xs7 sm8 md9>
                                <v-card-title primary-title>
                                    <div>
                                        <div class="headline">{{ meetup.title }}</div>
                                        <span>{{ meetup.date }}</span>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat dark :to="'/meetups/'+meetup.id">
                                        <v-icon left>arrow_forward</v-icon>
                                    View Meetup
                                    </v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    computed :{
        meetups () {
            return this.$store.getters.loadedMeetups;
        }
    }
}
</script>
