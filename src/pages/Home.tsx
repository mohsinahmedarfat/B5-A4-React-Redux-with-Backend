import BookCard from "@/components/module/book/BookCard";
import { useGetBooksQuery } from "../redux/api/baseApi";
import type { IBook } from "../types";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Home = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  // console.log(data, isLoading);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="mb-16">
        <h1 className="text-5xl font-bold text-green-600 w-fit m-auto">Welcome to Biggest Library</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 space-y-5 mt-5">
        {!isLoading &&
          data.data.slice(0,2).map((book: IBook) => (
            <BookCard book={book} key={book._id} />
          ))}
      </div>
      <div className="w-fit m-auto mt-10">
        <Button variant={"outline"}>
          <Link to={"allBooks"}>Explore More</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;