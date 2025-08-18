// import { cookies} from "next/headers" 
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Lưu ý: localstorage & sessionStorage không sử dụng được ở đây
  // Muốn lấy thông tin lưu ở browser(trình duyệt), bạn có thể sử dụng cookie
  console.log('Middleware triggered for:', request.method)
  // cookies()

  return NextResponse.next()
}