export function Card({src, alt, name, time}) {
  return (
    <>
    <div className='card'>
        <img src={src} alt={alt} className='w-full h-32 sm:h-48 object-cover'></img>
        <div className='m-4'>
            <span className='font-bold'>{name}</span>
            <span className='block text-gray-500 text-sm'>Recipe by XYZ</span>
        </div>
        <div className='badge'>
            <svg className='w-5 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            <span>{time} mins.</span>
        </div>
    </div>
    </>
  );
};