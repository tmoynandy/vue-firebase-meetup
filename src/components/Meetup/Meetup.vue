<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h2>{{meetup.title}}</h2>
                    </v-card-title>
                    <v-img
                        src="https://www.oberoihotels.com/-/media/Oberoi-Hotels/The-Oberoi-Grand-kolkata/overview/welcome/victoria-memorial-welcome.png"
                        height="40%">
                    </v-img>
                    <v-card-text>
                        <div class="info--text">20th April 2019 - Kolkata</div>
                        <div>as;kdsakd lksadnsakdns aslkdnsakdlsna akdnsakldnsa slkdnsakdlsn
                            skds;ldmsd;smdsldsldmsnhsad ldksandskladn aslknsdklsnadksndsnd
                            dknsadknnsdksnd;ksnd;ksndas;dn kdnsadnslad klsndsal dkd sakdnsa
                        </div>
                    </v-card-text>
                    
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn>Register</v-btn>
                    </v-card-actions>
                    <!--<v-container>
                        <v-layout>
                            <v-flex>

                            </v-flex>
                        </v-layout>
                    </v-container>-->
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props : ['id'],
    computed :{
        meetup (){
            return this.$store.getters.loadedMeetup(this.id);
            console.log(this.id)
        }
    }
}
</script>

