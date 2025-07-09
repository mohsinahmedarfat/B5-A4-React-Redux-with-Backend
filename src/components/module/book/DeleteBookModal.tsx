import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteBookMutation } from "@/redux/api/baseApi";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";

interface DeleteBookModalProps {
  bookId: string;
}

const DeleteBookModal = ({ bookId }: DeleteBookModalProps) => {

    const [deleteBook, {isLoading}] = useDeleteBookMutation();
    const handleDelete = (id: string) => {
        deleteBook(id)
        toast.success("Book deleted successfully!")
    }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Trash2 className="lg:ml-auto text-red-600 cursor-pointer"/>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete this book?</DialogTitle>
          <DialogDescription>
            After delete it won't retriveable.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button 
          onClick={() => handleDelete(bookId)}
          type="submit" variant="danger">
            {isLoading ? 'Deleting...' : 'Delete'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteBookModal;
