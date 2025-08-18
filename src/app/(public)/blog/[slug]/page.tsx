import { Metadata } from 'next';

type BlogDetailProps = {params: Promise<{ slug: string }>}

// Tạo hàm lấy chi tiết bài viết theo slug
async function getPostDetailBySlug(slug: string){
   const postDetail = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
  const data = await postDetail.json()
  return data;
}
  
// generateMetadata
export async function generateMetadata( { params} :BlogDetailProps ) : Promise<Metadata> {
  const { slug } = await params;
  // const postDetail = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
  // const data = await postDetail.json()
  const data = await getPostDetailBySlug(slug);
  return {
    title: data.title,
    description: data.body
  }
}

export default async function  BlogDetail({ params }: BlogDetailProps) {
  const { slug } = await params; // useParams() của react-route-dom
  // const postDetail = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
  // const data = await postDetail.json()
  const data = await getPostDetailBySlug(slug);

  return (
    <div>Details {data.title}</div>
  )
}

