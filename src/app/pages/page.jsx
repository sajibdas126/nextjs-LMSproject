import getAllData from "../../../apiData/getAllData";

export default async function Page() {
  const posts = await getAllData();
  console.log(posts); // now an array

  return (
    <div>
      <h1>All posts</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
