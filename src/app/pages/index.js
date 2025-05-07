import useSWR from "swr";

const Home = () => {
  const { data } = useSWR("/api/logto/user");

  return (
    <div className="container">
      <nav>
        {data?.isAuthenticated ? (
          <p>
            Hello, {data.claims?.sub},
            <button
              onClick={() => {
                window.location.assign("/api/logto/sign-out");
              }}
            >
              Sign Out
            </button>
          </p>
        ) : (
          <p>
            <button
              onClick={() => {
                window.location.assign("/api/logto/sign-in");
              }}
            >
              Sign In
            </button>
          </p>
        )}
      </nav>
    </div>
  );
};

export default Home;
