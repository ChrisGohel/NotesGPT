import Image from "next/image";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="NotesGPT logo" width={100} height={100} />
        <span className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          NotesGPT
        </span>
      </div>
      <p className="text-center max-w-prose">
        An intelligent note-taking app with AI integration, built with OpenAi,
        PineCone, Next.js, Shadcn UI, Clerk, and more.
      </p>
      <Button asChild>
        <Link href="/notes">Open</Link>
      </Button>
    </main>
  );
}
