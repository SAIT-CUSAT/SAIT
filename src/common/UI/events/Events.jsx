import React, { useEffect, useState } from 'react'
import Landing from './Landing.jsx'
import Upevent from './Upevent.jsx'
import Allevent from './Allevent.jsx'
import { client } from '../../../../sanity/lib/client'

const Events = () => {
  const [EventsData, setEventsData] = useState([])
  // upcomming events State
  const [upcommingEvents, setUpcommingEvents] = useState([])
  // past events State
  const [pastEvents, setPastEvents] = useState([])
  useEffect(() => {
    // query events data using GROQ query
    const query = `*[_type == "event"] {
      title,
      slug,
      "ImageUrl": images[0].asset->url,
      startDate,
      speakers,
      status,
    }`;

    client
      .fetch(query)
      .then((data) => {
        setEventsData(data);
        console.log(data)
        // filter upcomming events and past events
        setUpcommingEvents(data.filter((event) => event.status === 'upcoming'))
        setPastEvents(data.filter((event) => event.status === 'activity'))
      })
      .catch((error) => {
        console.error('Error fetching events data:', error);
      });
  }, []);

  console.log(upcommingEvents)

  return (
    <div>
        <Landing />
        <Upevent data={upcommingEvents} />
        <Allevent data={EventsData} />
    </div>
  )
}

export default Events