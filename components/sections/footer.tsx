export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-slate-500'>
      <small className='mb-2 block text-xs'>
        &copy; {new Date().getFullYear()} Harry Dhillon. All rights reserved.
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>About this website: </span>
        built with React & Next.js, TypeScript, Tailwind CSS, Motion, React
        Email & Resend.
      </p>
    </footer>
  );
}
