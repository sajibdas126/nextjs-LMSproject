
export default async function PageDetals({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.PageDetals;

  return (
    <div className="min-h-screen p-20 bg-gray-50 text-center">
      <h1 className="text-3xl font-bold text-emerald-600 mb-4">Details Page</h1>
     
      <div className="mt-8 p-6 bg-white shadow-md rounded-lg max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed aspernatur eos inventore natus corporis, magnam dolor aliquid soluta...
      </div>
    </div>
  );
}