<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1>Create New Meetup</h1>
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
                    <v-layout row wrap class="mb-2">
                        <v-flex xs12 sm6 offset-sm3>
                            <h2>Choose a Date</h2>
                            <v-date-picker v-model="date"></v-date-picker>
                            <p>{{date}}</p>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <h2>Choose a Time</h2>
                            <v-time-picker v-model="time"></v-time-picker>
                            <p>{{time}}</p>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn :disabled="!formIsValid"
                            type="submit">Create Meetup</v-btn>
                            {{submittableDateTime}}
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
            location : '',
            date : new Date().toISOString().substr(0,10),
            time : new Date()
        }
    },
    computed : {
        formIsValid () {
            return this.title !== '' && this.location !== ''
        },
        submittableDateTime () {
            const date = this.date
            //const day = date.getDay()
            const hours = this.time
            //console.log("selected time : " +hours)
            // date.setHours(this.time.getHours())
            // date.setMinutes(this.time.getMinutes())
            // if(typeof this.time === 'string'){
            //     const hours = this.time.match(/^(\d+)/)[1]
            //     const minutes = this.time.match(/^:(\d+)/)[1]
            //     date.setHours(hours)
            //     date.setMinutes(minutes)
            // }
            // else{
            //     date.setHours(this.time.getHours())
            //     date.setMinutes(this.time.getMinutes())
            // }
            //console.log("selected date : "+date)
            //console.log("selected day : "+day)
            const finalDate = ""+date+" | "+hours
            console.log(finalDate)
            return finalDate
        }
    },
    methods :{
        onCreateMeetup () {
            if(!this.formIsValid){
                return
            }
            const meetupData = {
                title : this.title,
                location : this.location,
                date : this.submittableDateTime
            }
            console.log("the date"+meetupData.date)
            this.$store.dispatch('createMeetup', meetupData)
            this.$router.push('/meetups')
            //console.log(meetupData)
             //calls the createMeetup in action
        }
    }
}
</script>
