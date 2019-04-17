import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loadedMeetups: [{
                imageUrl: 'https://www.oberoihotels.com/-/media/Oberoi-Hotels/The-Oberoi-Grand-kolkata/overview/welcome/victoria-memorial-welcome.png',
                id: '123456',
                title: 'Meetup in kolkata',
                date: '09-11-2019'
            },
            {
                imageUrl: 'https://www.oberoihotels.com/-/media/Oberoi-Hotels/The-Oberoi-Grand-kolkata/overview/welcome/victoria-memorial-welcome.png',
                id: '123457',
                title: 'Meetup in Bally',
                date: '09-12-2019'
            },
            {
                imageUrl: 'https://www.oberoihotels.com/-/media/Oberoi-Hotels/The-Oberoi-Grand-kolkata/overview/welcome/victoria-memorial-welcome.png',
                id: '123458',
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
    mutations: {},
    actions: {},
    getters: {
        // abc(state) {
        //     return state.abc;
        // },
        loadedMeetups(state) {
            return state.loadedMeetups;
        },
          loadedMeetup (state) {
                return (meetupId) => {
                    return state.loadedMeetups.find((meetup) => {
                        return meetup.id === meetupId
                    })
                }
            },
          featuredMeetups (state, getters) {
              return getters.loadedMeetups.slice(0,5)
          }
    }
})