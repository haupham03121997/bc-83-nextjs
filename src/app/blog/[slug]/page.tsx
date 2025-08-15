
type BlogDetailProps = {params: Promise<{ slug: string }>}

export default async function  BlogDetail({ params }: BlogDetailProps) {
  const { slug } = await params; // useParams() của react-route-dom
  console.log('🔥 ~ BlogDetail ~ slug:', slug)
  return (
    <div>Details {slug}</div>
  )
}
