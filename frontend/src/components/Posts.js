import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useApi } from "../contexts/ApiProvider";
import Post from './Post'

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export default function Posts() {
    const [posts, setPosts] = useState();
    const api = useApi();

    useEffect(() => {
        (async () => {
            const response = await fetch(`${BASE_API_URL}/api/posts`);
            if (response.ok) {
                const results = await response.json();
                setPosts(results.data);
            } else {
                setPosts(null);
            }
        })();
    }, [api])

    return (
        <>
            {
                posts === undefined ?
                    <Spinner animation="border" />
                    :
                    <>
                        {posts.length === 0 ?
                            <p>There are no blog posts</p>
                            :
                            posts.map(post => <Post key={post.id} post={post} />)
                        }
                    </>
            }
        </>
    )
}