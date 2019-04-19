import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loadedMeetups: [{
                imageUrl: 'https://www.oberoihotels.com/-/media/Oberoi-Hotels/The-Oberoi-Grand-kolkata/overview/welcome/victoria-memorial-welcome.png',
                id: 'aaaa123456',
                title: 'Meetup in kolkata',
                date: '09-11-2019'
            },
            {
                imageUrl: 'https://www.oberoihotels.com/-/media/Oberoi-Hotels/The-Oberoi-Grand-kolkata/overview/welcome/victoria-memorial-welcome.png',
                id: 'aaaaa123457',
                title: 'Meetup in Bally',
                date: '09-12-2019'
            },
            {
                imageUrl: 'https://www.oberoihotels.com/-/media/Oberoi-Hotels/The-Oberoi-Grand-kolkata/overview/welcome/victoria-memorial-welcome.png',
                id: 'aaaaa123458',
                title: 'Meetup in Howrah',
                date: '09-11-2018'
            }
        ],
        user: {
            id: 'absbadafa',
            registeredMeetups: ['123456']
        },
        abc: 'this is abc'
    },
    mutations: {
        createMeetup (state, payload){
            state.loadedMeetups.push(payload)
        }
    },
    actions: {
        createMeetup ({commit}, payload){
            const meetup = {
                title : payload.title,
                location : payload.location,
                id : 'aaaa12345'
            };
            //reachout to firebase and store it and get back an id and store it etc etc
            commit('createMeetup', meetup)
        }
    },
    getters: {
        // abc(state) {
        //     return state.abc;
        // },
        loadedMeetups(state) {
            return state.loadedMeetups;
        },
          loadedMeetup (state) {
                return (meetupId) => {
                    //console.log(meetupId);
                    return state.loadedMeetups.find((meetup) => {
                        return meetup.id === meetupId
                        //console.log(meetup.id);
                    })
                }
            },
          featuredMeetups (state, getters) {
              return getters.loadedMeetups.slice(0,5)
          }
    }
})