
type BlogDetailProps = {params: Promise<{ slug: string }>}

export default async function  BlogDetail({ params }: BlogDetailProps) {
  const { slug } = await params; // useParams() của react-route-dom
  const postDetail = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
  const data = await postDetail.json()

  return (
    <div>Details {data.title}</div>
  )
}
