import { useGetBorrowQuery } from "@/redux/api/baseApi";
import type { IBorrow } from "@/types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const BorrowSummary = () => {
  const { data, isLoading } = useGetBorrowQuery(undefined);
  console.log("from borrow summary", data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Table>
      <TableCaption>A list of Book Summary</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead>Book Title</TableHead>
          <TableHead>ISBN</TableHead>
          <TableHead>Total Quantity Borrowed</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.data.map((borrow: IBorrow) => (
          <TableRow>
            <TableCell className="font-medium">{borrow.book.title}</TableCell>
            <TableCell>{borrow.book.isbn}</TableCell>
            <TableCell>{borrow.totalQuantity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BorrowSummary;
