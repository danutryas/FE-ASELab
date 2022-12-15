import events from '../events.json';
import Slider from './Slider';
import { EventCard } from './Cards';

const Event = () => {
  return (
    <Slider title="Our Events ">
      {events.map((event) => {
        return <EventCard eventTag={event.tag} eventType={event.type} eventName={event.name} date={event.date} />;
      })}
    </Slider>
  );
};

export default Event;
