
interface AuthLayoutProps {
  children: React.ReactNode;
}


export default function AuthLayout(props: AuthLayoutProps) {
  return (
    <div className='bg-blue-600 flex items-center justify-center min-h-screen'>{props.children}</div>
  )
}
