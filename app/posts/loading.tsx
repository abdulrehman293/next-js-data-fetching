export default function Loading() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
      <div className="text-lg text-blue-600 font-semibold animate-pulse">
        Fetching posts from the API...
      </div>
    </div>
  );
}
