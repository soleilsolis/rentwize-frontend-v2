export default function ViewProperty({ params }: { params: { id: string } }) {
  return <div>My Post: {params.id}</div>
}