
import blogData from "../../../../data/blogData.json"

export default function page({id}) {

  const post = blogData.find((post) => post.id === id);

  if (!post){
    return <div>post not found</div>
  }
    return (
        <>
            <div>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <p>Date: {post.date}</p>
                </div>
        </>
    );
};
