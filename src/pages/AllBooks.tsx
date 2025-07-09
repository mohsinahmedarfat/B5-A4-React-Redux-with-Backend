import BookCard from "@/components/module/book/BookCard";
import { useGetBooksQuery } from "../redux/api/baseApi";
import type { IBook } from "../types";

const AllBooks = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  // console.log(data, isLoading);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 space-y-5 mt-5">
        {!isLoading &&
          data.data.map((book: IBook) => (
            <BookCard book={book} key={book._id} />
          ))}
      </div>
    </div>
  );
};

export default AllBooks;
