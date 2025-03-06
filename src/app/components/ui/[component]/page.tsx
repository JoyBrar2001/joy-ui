export default async function ComponentPage({
  params
}: {
  params: Promise<{ component: string; }>
}) {
  const { component } = await params;

  return (
    <section className="h-[300vh]">{component} Component</section>
  );
}