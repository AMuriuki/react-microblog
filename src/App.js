import Container from 'react-bootstrap/Container';
import Header from './components/Header';

export default function App() {
  const posts = [
    {
      id: 1,
      text: 'Hello World',
      timestamp: 'a few seconds ago',
      author: {
        username: 'jane',
      },
    },
    {
      id: 2,
      text: 'Second post',
      timestamp: 'a minute ago',
      author: {
        username: 'john',
      },
    },
    {
      id: 3,
      text: 'Third post',
      timestamp: 'an hour ago',
      author: {
        username: 'Jill',
      },
    }
  ]

  return (
    <Container fluid className='App'>
      <Header />
      <Container>
        {posts.length === 0 ?
          <p>There are no blog posts</p>
          :
          posts.map(post => {
            return (
              <p key={post.id}>
                <b>{post.author.username}</b> &mdash; {post.timestamp}
                <br />
                {post.text}
              </p>
            )
          })
        }
      </Container>
    </Container>
  );
}