// import React, { useEffect, useState } from 'react';
// // import './cal.css'
// import './Calender.css'
// import useUserEvents, { UserEvents } from '../../types/user-events';
// import { DocumentData, onSnapshot, QuerySnapshot, deleteDoc, doc } from 'firebase/firestore';
// import { eventsCollection, db } from "../../firebase.config";
// const addZero = (num: number) => (num < 10 ? `0${num}`: `${num}`);
// const createDayKey = (date:Date) => {
//     const year = date.getUTCFullYear()
//     const month = date.getUTCMonth() + 1;
//     const day = date.getUTCDate();
//     return `${addZero(year)}-${addZero(month)}-${addZero(day)}`
// }
// const groupEventsByDay = (events: UserEvents[]) => {
//     const groups: Record<string, UserEvents[]> = {};
// const addToGroup = (dateKey: string, event: UserEvents) => {
//     if(groups[dateKey] === undefined) {
//         groups[dateKey] = []
//     }
//     groups[dateKey].push(event);
// }
//     events.forEach(event => {
//         const dateStartKey = createDayKey(new Date(event.dateStart));
//         const dateEndKey = createDayKey(new Date(event.dateEnd))
//         const title = event.title
//         addToGroup(dateStartKey, event)
//         if(dateEndKey !== dateStartKey) {
//             addToGroup(dateEndKey, event)
//         }
//     })
//   return groups;
// }
// const Calender: React.FC = () => {
//     let groupedEvents: ReturnType<typeof groupEventsByDay> | undefined;
//     let sortedGroupKeys: string[] | undefined;
//     const [userEventsState, setUserEventsState] = useState<UserEvents[]>([{
//         id: '',
//     }])
//     const {userEvents, addUserEvent} = useUserEvents(state => state)
//     const deleteHotel = async (id: string | undefined) => {
//         const document = doc(db, `events/${id}`)
//         await deleteDoc(document)
//         console.log('a hotel has now been deleted')
//     }
//    useEffect(()  =>  {
//       onSnapshot(eventsCollection,
//         (snapshot: QuerySnapshot<DocumentData>) => {
//             setUserEventsState(snapshot.docs.map((doc) => {
//                 return {
//                     id: doc.id,
//                   ...doc.data(),
//                 };
//               }))
//             })
//         }, [])
//         if(userEventsState.length) {
//             groupedEvents = groupEventsByDay(userEventsState)
//             sortedGroupKeys = Object.keys(groupedEvents).sort(
//                 (date1,date2) => +new Date(date1) - +new Date(date2)
//             )
//         }
//         const handleDeletedEvent = () => {
//             const id = userEventsState.map(id => id.id)
//             deleteHotel(id[0])
//         }
//     return groupedEvents && sortedGroupKeys ? (
//         <div className="flex flex-wrap justify-center mx-8 my-6 p-10">{sortedGroupKeys.map(day  => {
//             const events = groupedEvents[day];
//             const title = groupedEvents[day].map(events => events.title)
//             const end = groupedEvents[day].map(events => events.dateEnd)
//             const start = groupedEvents[day].map(events => events.dateStart)
//             const groupDate = new Date(day);
//             const day1 = groupDate.getDate();
//             const key = groupedEvents[day]
//             const month = groupDate.toLocaleString(undefined, {month: 'long'})
//             return (
//                 <div  className="grid grid-col-2 sm:grid-col-2 md:grid-col-3 my-10 mx-5 p-2 border-cyan-200  border-2 shadow-xl rounded-lg bg-cyan-50">
//                 <div className="flex justify-center flex-row-reverse my-2 rounded-sm shadow-xl bg-cyan-300">
//                     <span className="font-semibold">{month}{" "}{day1}</span>
//                 </div>
//                 <div className="flex justify-center bg-cyan-200 rounded-md shadow-lg">
//                   <div className="calender-event">
//                         <div className="calender-events-info grid grid-col-2">
//                         <button onClick={handleDeletedEvent} className="pl-40 mx-2">&times;</button>
//                             <div className="flex justify-center font-medium">{title}</div>
//                             <div className="flex justify-center mb-4 font-light">{start}{' - '}{end}</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>)
// })}
//         </div>
//     ) : (
//         <p>Loading...</p>
//     )
// }
// export default Calender;
