import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

export default function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    refetch, // 👈 added for manual refetch
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    cacheTime: 1000 * 60 * 5, // 5 minutes
    staleTime: 1000 * 60 * 1, // data stays fresh for 1 min
    refetchOnWindowFocus: false, // don't refetch when user switches tab
    keepPreviousData: true, // useful when paginating
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>

      {/* 👇 Manual refetch button */}
      <button
        onClick={() => refetch()}
        style={{
          marginBottom: "10px",
          padding: "8px 12px",
          backgroundColor: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Refetch Posts
      </button>

      {isFetching && <p>Background Updating...</p>}
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
