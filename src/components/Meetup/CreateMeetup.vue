<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h2>Create New Meetup</h2>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <form @submit.prevent="onCreateMeetup">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name = "title"
                                label ="Title"
                                id="title"
                                v-model="title"
                                required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name = "location"
                                label ="Location"
                                id="location"
                                v-model="location"
                                required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn :disabled="!formIsValid"
                            type="submit">Create Meetup</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
export default {
    data () {
        return {
            title : '',
            location : ''
        }
    },
    computed : {
        formIsValid () {
            return this.title !== '' && this.location !== ''
        }
    },
    methods :{
        onCreateMeetup () {
            if(!this.formIsValid){
                return
            }
            const meetupData = {
                title : this.title,
                location : this.location
            }
            this.$store.dispatch('createMeetup', meetupData)
            this.$router.push('/meetups')
            //console.log(meetupData)
             //calls the createMeetup in action
        }
    }
}
</script>
