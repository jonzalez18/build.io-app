import { doc, DocumentData, onSnapshot, QuerySnapshot } from 'firebase/firestore';
import * as React from 'react'
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware'
import eventsCollection from '../firebase.config'

export interface UserEvents {
    id?: string;
    title?: string;
    dateStart?: string;
    dateEnd?: string;
    user?: string
}

interface RecorderState {
    dateStart?: string;
}
const initialState: RecorderState = {
    dateStart: ''
}

export const useRecorder = create<{
    record: RecorderState;
    startRecorder: (dateStart: string) => void;
    stopRecorder: (dateStart: string) => void;
    }>(
    set => ({
        record: initialState,
        startRecorder: () => 
        set((state) => ({
            ...state,
            record: 
                {
                    ...state.record, 
                    dateStart: new Date().toISOString() 
                }
            
        })),
        stopRecorder: (dateStart: string) => {
            set((state) => ({
                ...state,
                record: 
                    {
                        ...state.record, 
                        dateStart: ''
                    }
            
            }))
        }
    })
)


type UserEventState = {
    events: UserEvents[];
    finishedEvents: UserEvents[];
    add: (event: string) => void;
    move: (event: string) => void;
    remove: (event: string) => void;
    delete: (event: string) => void;
    }
    export const useUserEventsState = create<UserEventState> (set => ({
        events: [],
        finishedEvents: [],
        add: (event: string) => 
        set(state => ({
            events: [...state.events]
        })),
        move: (event: string) =>
        set(state => {
          const index = state.events.findIndex(e => e.title === event);
          const remEvent = state.events.splice(index, 1);
          state.events.push(remEvent[0]);
          return {
            events: state.events,
            finsishedEvents: state.finishedEvents
          };
        }),
        remove: (event: string) =>
        set(state => {
          const index = state.events.findIndex(e => e.title === event);
          const remMovie = state.events.splice(index, 1);
          state.events.push(remMovie[0]);
          return {
            events: state.events,
            finishedEvents: state.finishedEvents
          };
        }),
        delete: (event: string) =>
        set(state => {
          const index = state.events.findIndex(e => e.title === event);
          state.events.splice(index, 1);
          return {
            events: state.events
          };
        })
    }))
   

const useUserEvents = create<{
    userEvents:  UserEvents[],
    addUserEvent: (event: UserEvents[]) => void;}>
    ((set) => ({
    userEvents: [],
    addUserEvent: (events: UserEvents[]) =>
     set((state) => ({
        ...state.userEvents,
        userEvents: {
            ...state.userEvents, events
        }
    })),
  })
)



export default useUserEvents;