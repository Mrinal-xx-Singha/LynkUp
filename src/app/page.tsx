import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ModeToggle";
import { currentUser } from "@clerk/nextjs/server";
import CreatePost from "@/components/CreatePost";
import WhoToFollow from "@/components/WhoToFollow";
import PostCard from "@/components/PostCard";
import { getPosts } from "@/actions/postAction";
import { getDatabaseUserId } from "@/actions/userAction";

export default async function Home() {
  const user = await currentUser();
  const posts = await getPosts();
  const dbUserId = await getDatabaseUserId()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        {user ? <CreatePost /> : null}
        {/* Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} dbUserId={dbUserId}/>
          ))}
        </div>
      </div>

      <div className="hidden lg:block lg:col-span-4 sticky top-20">
        <WhoToFollow />
      </div>
    </div>
  );
}
