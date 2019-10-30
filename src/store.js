import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import firebase from 'firebase';
import router from '@/router';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        Items: [],
        apiUrl: 'https://api.epyphite.local/api/v1/',
        user: null,
        isAuthenticated: false,
        userItems: []
    },
    mutations: {
        setItems(state, payload) {
            state.Items = payload;
        },
        setUser(state, payload) {
            state.user = payload;
        },
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload;
        },
        setUserItems(state, payload) {
            state.userItems = payload;
        }
    },
    actions: {
        async getItems({ state, commit }, userid) {
            try {
                let response = await axios.get(`${state.apiUrl}`, {
                    params: {
                        userid: userid
                    }
                });
                // sbdinc keys
                // let response = await axios.get(`${state.apiUrl}`, {
                //     params: {
                //         q: plan,
                //         app_id: '903de977',
                //         app_key: '1b5fbf78de2db637b392f141c524222c\t',
                //         from: 0,
                //         to: 9
                //     }
                // });
                commit('setItems', response.data);
            } catch (error) {
                commit('setRecipes', []);
            }
        },
        userLogin({ commit }, { email, password }) {
            const URL = 'https://api.epyphite.local/api/v1/login';
            const data = { email, password };

            axios({
                method: 'post',
                url: URL,
                headers: {
                    Accept: 'application/json',
                    Content: 'application/json'
                },
                data: data
            })
                .then(res => {
                    // eslint-disable-next-line
                    console.log(res.data["ResponseData"][0]);
                    sessionStorage.setItem('user', res.data["ResponseData"][0]);
                    commit('setUser', res.data["ResponseData"][0]);
                    commit('setIsAuthenticated', true);
                    router.push('/about');
                })
                .catch(err => {
                    alert('Wrong email/password');
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    // eslint-disable-next-line
                  console.log(err)
                });
            /*
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(user => {
                    commit('setUser', user);
                    commit('setIsAuthenticated', true);
                    router.push('/about');
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/');
                });
                */
        },
        userJoin({ commit }, { email, password }) {


            const URL = 'https://api.epyphite.local/api/v1/create/user';
            const data = { email, password };
            axios({
                method: 'POST',
                url: URL,
                headers: {
                    AdminToken: '34806ab0-0a0c-4625-aef4-284e8dc06e27',
                    Accept: 'application/json',
                    Content: 'application/json'
                },
                data: data
            })
                .then(res => {
                    // eslint-disable-next-line
                    console.log(res.data["ResponseData"]);
                    commit('setUser', res.data["ResponseData"]);
                    commit('setIsAuthenticated', true);
                    router.push('/about');
                })
                .catch(err => {
                    // eslint-disable-next-line
                console.log(err)
                });
            /*
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(user => {
                    commit('setUser', user);
                    commit('setIsAuthenticated', true);
                    router.push('/about');
                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/');
                });
                */
        },
        userSignOut({ commit }) {
            commit('setUser', null);
            commit('setIsAuthenticated', false);
            router.push('/');
            /*
            firebase
                .auth()
                .signOut()
                .then(() => {

                })
                .catch(() => {
                    commit('setUser', null);
                    commit('setIsAuthenticated', false);
                    router.push('/');
                });
                */
        },
        setItem({ state }, payload) {
            /*
            firebase
                .database()
                .ref('users')
                .child(state.user.user.uid)
                .push(payload.recipe.label);
                */
        },
        getUserRecipes({ state, commit }) {
            const URL = state.apiUrl + "/" + state.user.agent + "/files" 
            axios({
                method: 'GET',
                url: URL,
                headers: {
                    Accept: 'application/json'
                }
            })
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.user !== null && state.user !== undefined;
        }
    }
});
