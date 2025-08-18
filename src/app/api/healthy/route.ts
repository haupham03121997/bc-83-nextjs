// http:localhost:3000/api/healthy
// https:movienew.com/QuanLyPhim/LayDanhSachBanner

import { NextResponse } from 'next/server';

export async function GET(){
  return NextResponse.json({ message : "Hello from the healthy API route!"})
}