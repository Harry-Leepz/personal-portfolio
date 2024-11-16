import Image from "next/image";

import image from "@/public/profile.png";

export default function Intro() {
  return (
    <section>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <Image
            src={image}
            alt='Harkarn Dhillon Portrait'
            width='192'
            height='192'
            quality={95}
            priority={true}
            className='h-26 w-26 rounded-full border-white border-[0.35rem] shadow-xl '
          />
          <span className='text-5xl absolute bottom-0 right-5'>👋</span>
        </div>
      </div>
    </section>
  );
}
