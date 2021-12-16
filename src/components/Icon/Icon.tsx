import { MediaType } from 'types';

type IconProps = {
  type: MediaType;
}
export const Icon = ({ type }: IconProps) => {
  switch (type) {
    case 'VIDEO':
      return <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24'
                  stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
              d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' />
      </svg>;
    case 'TEXT':
      return <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24'
                  stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
              d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' />
      </svg>;
    case 'TABLE':
      return <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24'
                  stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
              d='M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' />
      </svg>;
    case 'IMAGE':
      return <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24'
                  stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
              d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
      </svg>;
    case 'LINK':
      return <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24'
                  stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2}
              d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' />
      </svg>;
  }

};
