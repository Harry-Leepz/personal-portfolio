import { useFormStatus } from "react-dom";

import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      disabled={pending}
      className='h-[3rem] w-[8rem] rounded-full outline-none transition-all text-white bg-slate-900 
      flex items-center justify-center gap-2 group focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105 
      disabled:scale-100 disabled:bg-opacity-65
      '
    >
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className='text-xs opacity-80 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
        </>
      )}
    </button>
  );
}
