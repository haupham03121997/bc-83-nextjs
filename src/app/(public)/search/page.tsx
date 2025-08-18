
type SearchParams = Promise<{ keyword: string }>

type SearchPageProps = { searchParams: SearchParams }

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  let posts : Post[] = []
  
  try {
    const { keyword } = await searchParams
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${keyword}`, {
      cache: 'no-cache',
    })
    const data = await response.json()
    posts = Array.isArray(data) ? data : [data]
  } catch (error: any) {
    return <div>Error: {error?.message || "Đã có lỗi xảy ra"}</div>
  }

  console.log('🔥 ~ SearchPage ~ posts:', posts)

  if(posts.length === 0){
    return <div>Không có tìm thấy bài viết nào. </div>
  }


  // call api
  // console.log('🔥 ~ SearchPage ~ results:', keyword)
  return (
    <div>Search Page</div>
  )
}
