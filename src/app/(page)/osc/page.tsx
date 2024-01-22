import OSC from "@/assets/json/osc";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const page = () => {
  return (
    <div className="max-w-3xl m-auto mt-12 sm:mt-24">
      <Table>
        <TableCaption>My Open Source Contributions</TableCaption>
        <TableHeader>
          <TableRow className="border-b-2 border-muted-foreground">
            <TableHead>Repository</TableHead>
            <TableHead className="text-center" >Description</TableHead>
            <TableHead className="text-right">#PR</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {OSC.map((osc) => {
            return (
              <TableRow key={osc._id} >
                <TableCell>
                  <Link href={`https://github.com/${osc.repo}`} target="_blank">
                    {osc.repo}
                  </Link>
                </TableCell>
                <TableCell className="text-center">
                  <Link
                    href={`https://github.com/${osc.repo}/pull/${osc.issue_number}`}
                    target="_blank"
                  >
                    {osc.title}
                  </Link>
                </TableCell>
                <TableCell className="text-right">
                  <Link
                    href={`https://github.com/${osc.repo}/pull/${osc.issue_number}`}
                    target="_blank"
                  >
                    #{osc.issue_number}
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
export default page;
