const state = {
    weatherInfo: ''
}

const getters = {
    get_weatherData(state) {
        return state.weatherInfo
    },
}

const mutations = {
    mut_weather(state, payload) {
        state.weatherInfo = payload
    }
}

const actions = {
    act_postalcode({dispatch, commit}, payload) {
        fetch('http://api.geonames.org/postalCodeLookupJSON?postalcode=' + payload +'&country=US&username=mastaraz', {
            method: 'GET'}
        )
        .then(res => res.json())
        .then(data => {
            dispatch('act_weather', data)
        })
        .catch(err => {
            commit('mut_weather', err)
        })
    },
    act_weather({commit}, payload) {
        fetch('http://api.geonames.org/findNearByWeatherJSON?lat=' + payload.postalcodes[0].lat + '&lng=' + payload.postalcodes[0].lng + '&username=mastaraz', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            commit('mut_weather', data)
        })
        .catch(err => {
            commit('mut_weather', err)
        })
    }
    }

export default {
    state,
    getters,
    mutations,
    actions
}