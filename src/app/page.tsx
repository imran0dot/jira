import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export default function Home() {
  return (
    <div >
      <div>
        <Button variant={"primary"} size={"xs"}>default</Button>
        <Button variant={"destructive"} size={"lg"}>destructive</Button>
        <Button variant={"ghost"}>ghost</Button>
        <Button variant={"link"}>link</Button>
        <Button variant={"secondary"}>secondary</Button>
        <Button variant={"outline"}>outline</Button>
        <Button variant={"muted"}>muted</Button>
        <Button variant={"accent"}>accent</Button>
      </div>

      <div>
        <Calendar />
        <Input />
        <Select />
      </div>
    </div>
  );
}
