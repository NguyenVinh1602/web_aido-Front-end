import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="w-screen flex justify-center">
      <div className="w-[1152px] h-auto flex justify-between items-center pb-2 border-b border-gray-500">
        <div className="text-m">Logo</div>
        <ul className="w-[700px] flex justify-between items-center">
          <li>
            <Button variant={"link"}>First Page</Button>
          </li>
          <li>
            <Button variant={"link"}>Second Page</Button>
          </li>
          <li>
            <Button variant={"link"}>Blog</Button>
          </li>
          <li>
            <Button variant={"link"}>Technology Page</Button>
          </li>
          <li>
            <Button className="h-[40px]">React out to us</Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
