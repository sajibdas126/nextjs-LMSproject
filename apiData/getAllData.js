export default async function getAllData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json(); // returns array
}
