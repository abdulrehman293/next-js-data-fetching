// Define the shape of the data I expect from the API
type Post = {
  id: number;
  title: string;
  body: string;
};

// My asynchronous fetch function
async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    // Re-fetch the data every hour (3600 seconds)
    next: { revalidate: 3600 } 
  });

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}
export default async function PostsPage() {
  // Call the fetch function and wait for the data
  const posts: Post[] = await getPosts();

  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Loop through the first 6 posts for display */}
        {posts.slice(0, 6).map((post) => (
          <div key={post.id} className="border p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold capitalize mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
