import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {

  redirect('/terms-and-conditions');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-16 py-24">
    </main>
  );
}
