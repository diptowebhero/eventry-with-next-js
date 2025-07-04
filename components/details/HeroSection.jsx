import Image from "next/image";
import ActionButtons from "../ActionButtons";

const HeroSection = ({ eventInfo }) => {
  return (
    <section className='container'>
      <div className='bg-gradient-to-b relative from-slate-200/20 to-slate-800/30'>
        <Image
          src={eventInfo.imageUrl}
          alt={eventInfo.name}
          className='h-[600px] w-full object-cover mx-auto'
          width={900}
          height={900}
        />
      </div>

      <div className='flex items-end'>
        <div className='flex-auto py-4'>
          <h1 className='font-bold text-2xl'>{eventInfo.name}</h1>
          <p className='text-[#9C9C9C] text-base mt-1'>{eventInfo.location}</p>
          <div className='text-[#737373] text-sm mt-1 space-x-2'>
            <span>{eventInfo.interested_ids?.length} Interested</span>
            <span>|</span>
            <span>{eventInfo.going_ids?.length} Going</span>
          </div>
        </div>

        <ActionButtons fromDetails={true} />
      </div>
    </section>
  );
};

export default HeroSection;
