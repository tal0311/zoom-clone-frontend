import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state: {
    msg: 'store running',
    stream: null,
    msgs: [],
    users: [],
    currMeeting: '',
    userMsg: null,
    userSettings: {
      height: window.innerHeight - 100,
      width: window.innerWidth - 400,
      left: 200,
      top: 50,
    },
  },
  getters: {
    getStream(state) {
      return state.stream
    },
    getMsgs(state) {
      return state.msgs
    },
    getUsers(state) {
      return state.users
    },
    getMeeting(state) {
      return state.meeting
    },
    getUserSettings(state) {
      return state.userSettings
    },
  },
  mutations: {
    removeMsg({ msgs }, msgId) {
      const idx = msgs.findIndex((msg) => msg._id === msgId)
      msgs.splice(idx, 1)
    },
    addMsg({ msgs }, msg) {
      msgs = [...msgs, msg]
    },
    removeUserFromMeeting({ users }, userId) {
      const idx = users.findIndex((user) => user._id === userId)
      users.splice(idx, 1)
    },
    setUserMsg({ userMsg }, msg) {
      userMsg = msg
    },
    setUserStream({ stream }, localStream) {
      stream = localStream
    },
  },
  actions: {
    async loadUsers({ commit }) {
      try {
      } catch (error) {
        commit({ type: 'setUserMsg', msg })
      }
    },
    loadStreams({ commit, state }) {
      commit.set
    },
  },
})

export default store
