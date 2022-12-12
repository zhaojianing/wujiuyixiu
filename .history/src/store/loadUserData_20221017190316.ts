// store/view.js

const state = {

    viewId: 1

};

const getters = {

    getViewId: (state: { viewId: any; }) => {

        return state.viewId;

    }

};

const mutations = {

    setViewId: (state: { viewId: number; }, payload: any) => {

        state.viewId++;

    }

};

const actions = {

    setViewId: (context: { commit: (arg0: string, arg1: any) => void; }, payload: any) => {

        context.commit("setViewId", payload);

    }

};

export default {

    namespaced: true,

    state,

    getters,

    mutations,

    actions

};