

import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout(props: AuthLayoutProps) {
  return (
    <div className='bg-amber-300 p-5 flex items-center justify-center min-h-screen'>
      <Image 
       src="https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png"
      width={500}
      height={500}
      alt='Background image'
      />
      {props.children}</div>
  )
}
