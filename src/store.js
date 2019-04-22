import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase' 

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
        user: null,
        loading : false,
        error : null,
        abc: 'this is abc'
    },
    mutations: {
        createMeetup (state, payload){
            state.loadedMeetups.push(payload)
        },
        setUser (state, payload){
            state.user = payload
        },
        setLoading(state, payload){
            state.loading = payload
        },
        setError (state, payload){
            state.error = payload
        },
        clearError (state){
            state.error = null
        }
    },
    actions: {
        createMeetup ({commit}, payload){
            const meetup = {
                title : payload.title,
                location : payload.location,
                date : payload.date,
                id : 'aaaa12345'
            };
            //reachout to firebase and store it and get back an id and store it etc etc
            commit('createMeetup', meetup)
        },
        signUserUp ({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(
                user => {
                    commit('setLoading', false)
                    const newUser ={
                        id : user.uid,
                        registeredMeetups : []
                    }
                    commit('setUser', newUser)
                }
            )
            .catch(
                error =>{
                    commit('setLoading', false)
                    commit('setError', error)
                    console.log(error)
                }
            )
        },
        signUserIn({commit}, payload){
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(
                user => {
                    commit('setLoading', false)
                    const newUser ={
                        id : user.uid,
                        registeredMeetups : []
                    }
                    commit('setUser', newUser)
                }
            )
            .catch(
                error =>{
                    commit('setLoading', false)
                    commit('setError', error)
                    console.log(error)
                }
            );
        },
        clearError ({commit}){
            commit ('clearError')
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
        },
        user (state) {
            return state.user
        },
        loading(state) {
            return state.loading
        },
        error (state) {
            return state.error
        }
    }
})