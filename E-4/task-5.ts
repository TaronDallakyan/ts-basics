interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Response was not ok");
    }

    let posts: Post[] = await response.json();

    return posts;
  } catch (err) {
    console.error("An error occured:", err);
    return null;
  }
}

getPosts().then((posts) => console.log(posts));
