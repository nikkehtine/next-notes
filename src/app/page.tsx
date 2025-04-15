import { cn } from "@/lib/utils";
import { RecentPost } from "./components/post";

export default async function Home() {
  return (
    <main className="relative isolate flex min-h-screen flex-col items-center justify-center bg-neutral-900">
      <RecentPost />
    </main>
  );
}
