import { useUser } from "../features/authentication/useUser";
import Categories from "../ui/Categories";
import Header from "../ui/Header";
import Spinner from "../ui/Spinner";
import Trending from "../ui/Trending";

function Home() {
  const { isLoading } = useUser();
  if (isLoading) return <Spinner />;

  return (
    <main className="mt-10">
      <section className="flex items-center mb-20">
        <Header />
      </section>

      <section className="grid grid-cols-1 mb-20 gap-7 items-center justify-items-center sm:grid-cols-2 md:grid-cols-4">
        <Trending />
      </section>

      <section>
        <Categories />
      </section>
    </main>
  );
}

export default Home;
