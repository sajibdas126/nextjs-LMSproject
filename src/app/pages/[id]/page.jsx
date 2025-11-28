import Link from "next/link";

export default async function Posts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`} className="text-blue-700">
              {post.title}
            </Link>
           
          </li>
        ))}
      </ul>
    </div>
  );
}
