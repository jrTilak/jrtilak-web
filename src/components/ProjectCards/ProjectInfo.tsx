import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Info } from "lucide-react";

type Props = {
  title: string;
  desc: string;
  children: React.ReactNode;
  orgType: string;
};

export function ProjectInfo({ children, desc, title, orgType }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="px-2 py-1">
          <Info className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {title}
            <span className="ml-2 text-xs text-muted-foreground tracking-wider">({orgType})</span>
          </DialogTitle>
        </DialogHeader>
        <div>
          <DialogDescription>{desc}</DialogDescription>
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}
