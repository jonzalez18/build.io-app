"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserEventsState = exports.useRecorder = void 0;
const zustand_1 = require("zustand");
const initialState = {
    dateStart: ''
};
exports.useRecorder = (0, zustand_1.create)(set => ({
    record: initialState,
    startRecorder: () => set((state) => (Object.assign(Object.assign({}, state), { record: Object.assign(Object.assign({}, state.record), { dateStart: new Date().toISOString() }) }))),
    stopRecorder: (dateStart) => {
        set((state) => (Object.assign(Object.assign({}, state), { record: Object.assign(Object.assign({}, state.record), { dateStart: '' }) })));
    }
}));
exports.useUserEventsState = (0, zustand_1.create)(set => ({
    events: [],
    finishedEvents: [],
    add: (event) => set(state => ({
        events: [...state.events]
    })),
    move: (event) => set(state => {
        const index = state.events.findIndex(e => e.title === event);
        const remEvent = state.events.splice(index, 1);
        state.events.push(remEvent[0]);
        return {
            events: state.events,
            finsishedEvents: state.finishedEvents
        };
    }),
    remove: (event) => set(state => {
        const index = state.events.findIndex(e => e.title === event);
        const remMovie = state.events.splice(index, 1);
        state.events.push(remMovie[0]);
        return {
            events: state.events,
            finishedEvents: state.finishedEvents
        };
    }),
    delete: (event) => set(state => {
        const index = state.events.findIndex(e => e.title === event);
        state.events.splice(index, 1);
        return {
            events: state.events
        };
    })
}));
const useUserEvents = (0, zustand_1.create)((set) => ({
    userEvents: [],
    addUserEvent: (events) => set((state) => (Object.assign(Object.assign({}, state.userEvents), { userEvents: Object.assign(Object.assign({}, state.userEvents), { events }) }))),
}));
exports.default = useUserEvents;
