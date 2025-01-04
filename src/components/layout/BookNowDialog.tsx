import { Button } from "@/components/ui/button";
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from '../../firebaseConfig'; // Import your Firebase configuration
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import { Input } from "../ui";
import * as Select from "@radix-ui/react-select";

export function BookNowDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[calc(100vh-8rem)] grid-rows-[1fr_auto]">
        <DialogHeader>
          <DialogTitle className="flex items-baseline gap-2">
            Book Our Package
          </DialogTitle>
        </DialogHeader>
        <GetStartedContent />
        <DialogFooter>
          <DialogClose asChild>
            <Button>Book Now</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function GetStartedContent() {
  const usersCollectionRef = collection(db, 'booking');
  const getUsers = async () => {
    const querySnapshot = await getDocs(usersCollectionRef);
    const hire = querySnapshot.docs.map((doc) => {
        return {recType:doc.id, ...doc.data()};
    })
    console.log(hire);
  };
  
  getUsers();
  return (
    <div className="overflow-y-auto">
      <p className="text-muted-foreground mb-2">
        Book the trip by filling this form, our team will guide you further. 
      </p>
      <div className="grid gap-4 md:grid-cols-2 px-4 py-4">
        <Input className="w-full md:w-14rem" placeholder="Full Name"/>
        <Input className="w-full md:w-14rem" placeholder="Phone Number"/>
        <Input className="w-full md:w-14rem" placeholder="Email ID"/>
        <div>
        <form className="max-w-sm mx-auto">
          <label className="sr-only">Underline select</label>
          <select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
          </select>
        </form>
        </div>
      </div>
    </div>
  );
}