export default function Project({ params }: { params: { slug: string } }) {
  return (
    <section className="flex items-center justify-center h-screen">
      <h1 className="text-5xl text-blue">Project: {params.slug}</h1>
    </section>
  );
}
