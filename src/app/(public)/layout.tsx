"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Codesandbox } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { useRef } from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout(props: AuthLayoutProps) {
  const router = useRouter()

  const inputRef = useRef<HTMLInputElement>(null);

  // const [keyword , setKeyword] = useState("")

  const handleRegister = () => {
    router.push('/register');
  }

  const handleLogin = () => {
    router.push('/login');
  }

  const handleSearchPage = () => {
    const value = inputRef.current?.value
    if(value?.trim() === ' ') return
    // '' = '' //true
    // '' = ' ' // false
    
    router.push(`/search?keyword=${value?.trim()}`);
  }

  return (
    <div className=''>
      {/* header  */}
      <header className='w-screen h-20 p-3 flex items-center justify-between bg-gray-800 text-white'>
        <div className='flex items-center gap-12'>
          <Codesandbox className='size-8' />
          <div className='flex items-center gap-1'>
            <Input ref={inputRef} placeholder='Nhập nội dung tìm kiếm...' className='bg-white text-black' />
            <Button onClick={handleSearchPage} >
              Tìm kiếm
            </Button>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <Button variant="outline" onClick={handleRegister}>Đăng ký</Button>
          <Button onClick={handleLogin}>Đăng nhập</Button>
        </div>
      </header>

      {/* content  */}
      <main>
        {props.children}
      </main>

      {/* footer  */}
      <footer className='w-screen h-20 p-3 flex items-center justify-between bg-gray-800 text-white'>
        <p>© 2023 Company Name</p>
      </footer>
    </div>
  )
}
