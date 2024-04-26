import OSC from "@/assets/json/osc";
import GALink from "@/components/Analytics/GALink";
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
            <TableHead className="text-center">Description</TableHead>
            <TableHead className="text-right">#PR</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {OSC.map((osc) => {
            return (
              <TableRow key={osc._id}>
                <TableCell>
                  <GALink
                    ga={{
                      action: "click osc",
                      category: "Open Source Contribution Click",
                      label: osc.repo,
                    }}
                    href={`https://github.com/${osc.repo}`}
                    target="_blank"
                  >
                    {osc.repo}
                  </GALink>
                </TableCell>
                <TableCell className="text-center">
                  <GALink
                    ga={{
                      action: "click osc",
                      category: "Open Source Contribution Click",
                      label: osc.title,
                    }}
                    href={`https://github.com/${osc.repo}/pull/${osc.issue_number}`}
                    target="_blank"
                    className="truncate"
                  >
                    {osc.title}
                  </GALink>
                </TableCell>
                <TableCell className="text-right">
                  <GALink
                    ga={{
                      action: "click osc",
                      category: "Open Source Contribution Click",
                      label: osc.issue_number.toString(),
                    }}
                    href={`https://github.com/${osc.repo}/pull/${osc.issue_number}`}
                    target="_blank"
                  >
                    #{osc.issue_number}
                  </GALink>
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
