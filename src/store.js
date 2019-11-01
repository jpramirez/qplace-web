import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
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
                    sessionStorage.setItem('token', res.data.token);
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
                    AdminToken: '232ffc5b-2903-46ce-bc95-e678117c4402',
                    Accept: 'application/json',
                    Content: 'application/json'
                },
                data: data
            })
                .then(res => {
                    // eslint-disable-next-line
                    console.log(res.data["ResponseData"]['userid']);
                    commit('setUser', res.data["ResponseData"]['userid']);
                    commit('setIsAuthenticated', true);
                    router.push('/about');
                })
                .catch(err => {
                    // eslint-disable-next-line
                console.log(err)
                });

        },
        userSignOut({ commit }) {
            commit('setUser', null);
            commit('setIsAuthenticated', false);
            router.push('/');
        },
        setItem({ state }, payload) {
        },
        getUserRecipes({ state, commit }) {
            const URL = state.apiUrl + '/' + state.user.agent + '/files';
            axios({
                method: 'GET',
                url: URL,
                headers: {
                    Accept: 'application/json'
                }
            })
                .then(res => {
                    // eslint-disable-next-line
                console.log(res.data["ResponseData"]);
                    commit('setUserItems', res.data['ResponseData']);
                })
                .catch(err => {
                    // eslint-disable-next-line
            console.log(err)
                });
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.user !== null && state.user !== undefined;
        }
    }
});
