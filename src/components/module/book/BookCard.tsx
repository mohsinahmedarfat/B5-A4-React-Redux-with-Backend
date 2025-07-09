import type { IBook } from "../../../types";
import DeleteBookModal from "./DeleteBookModal";
import EditBookModal from "./EditBookModal";
import BorrowBookModal from "./BorrowBookModal";

interface IProps {
  book: IBook;
}

const BookCard = ({ book }: IProps) => {
  // console.log("from book card",book);
  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-3 lg:gap-3 border-2 border-green-600 rounded-2xl p-5">
      {/* book thumbnail */}
      <div className="col-span-1 border-2 bg-gray-300 mb-5 lg:mb-0">
        <div className="flex justify-center items-center h-60 lg:h-full">
          <p className="text-white">Book Thumbnail</p>
        </div>
      </div>

      {/* details */}
      <div className="col-span-2 lg:flex justify-between">
        <div>
          <h1 className="text-xl font-bold">{book.title}</h1>
          <p>
            <strong>Author:</strong> {book.author}
          </p>
          <p>
            <strong>Description:</strong> {book.description}
          </p>
          <p>
            <strong>Genre:</strong> {book.genre}
          </p>
          <p>
            <strong>ISBN:</strong> {book.isbn}
          </p>
          <p>
            <strong>Copies:</strong> {book.copies}
          </p>
          <p>
            <strong>Availability:</strong> {book.available ? "Yes" : "No"}
          </p>
        </div>
        <div className="mt-auto space-y-5">
          <div className="mt-5 lg:space-y-5 flex flex-row lg:flex-col justify-evenly">
            <EditBookModal book={book} />
            <DeleteBookModal bookId={book._id} />
          </div>
          <BorrowBookModal book={book} />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
