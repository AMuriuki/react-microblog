export default function App() {
  const post = {
    id: 1,
    text: 'Hello World',
    timestamp: 'a few seconds ago',
    author: {
      username: 'jane.doe',
    },
  }

  return (
    <>
      <h1>Buddy</h1>
      <p>
        <b>{post.author.username}</b>&mdash;{post.timestamp}
        <br />
        {post.text}
      </p>
    </>
  );
}