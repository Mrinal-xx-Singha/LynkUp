import Image from "next/image";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="model">
          <button className="bg-red-500">Sign In</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
