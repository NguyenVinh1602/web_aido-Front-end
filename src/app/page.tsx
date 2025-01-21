import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Welcome to aido</h1>
      <Button>
        <Link style={{textDecoration: "none"}} href = {"/Home"} >Go Home</Link>
      </Button>
    </div>
  );
}
