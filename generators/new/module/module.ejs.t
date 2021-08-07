---
to: src/store/modules/<%= h.changeCase.kebab(name) %>.js
---
<%
const stateKey = h.changeCase.camel(name)
const stateKeyUpper = h.changeCase.upper(name)
const stateKeyPascal = h.changeCase.pascal(name)
%>
import http from '@src/http';

export const state = {
    <%= stateKey %>: [],
};

export const getters = {};

export const mutations = {
    SET_<%= stateKeyUpper %>(state, <%= stateKey %>) {
        state.<%= stateKey %> = <%= stateKey %>;
    },
};

export const actions = {
    async get<%= stateKeyPascal %>({ commit }) {
        const { data } = await http.get("/<%= stateKey %>");

        commit("SET_<%= stateKeyUpper %>", data.data);
        return data.data;
    }
};
