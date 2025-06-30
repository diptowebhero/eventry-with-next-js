import EventDetails from "@/components/details/EventDetails";
import EventVenue from "@/components/details/EventVenue";
import HeroSection from "@/components/details/HeroSection";
import { getEventById } from "@/queries/queries";

const EventsDetailsPage = async ({ params: { id } }) => {
  const event = await getEventById(id);
  console.log(event);
  return (
    <>
      <HeroSection eventInfo={event} />
      <section className='container'>
        <div className='grid grid-cols-5 gap-12 my-12'>
          <EventDetails
            eventDetails={event?.details}
            eventSwags={event?.swags}
          />
          <EventVenue eventLocation={event?.location} />
        </div>
      </section>
    </>
  );
};

export default EventsDetailsPage;
