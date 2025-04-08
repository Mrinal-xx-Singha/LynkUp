import { getRandomUsers } from "@/actions/userAction";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import FollowButton from "./FollowButton";

const WhoToFollow = async () => {
  const users = await getRandomUsers();

  if (users?.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Who to Follow ?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {users?.map((user) => (
            <div
              key={user.id}
              className="fles gap-2 items-center justify-between"
            >
              <div className="flex items-center gap-1">
                <Link href={`/profile/${user.username}`}>
                  <div className="flex space-y-4 gap-2">
                    <Avatar className="w-10 h-10">
                      <AvatarImage
                        className="rounded-full"
                        src={user.image ?? "/avatar.png"}
                      />
                    </Avatar>
                  </div>
                </Link>
                <div className="text-xs">
                  <Link
                    href={`/profile/${user.username}`}
                    className="font-medium cursor-pointer"
                  >
                    {user.name}
                  </Link>

                  <p className="text-muted-foreground">@{user.username}</p>
                  <p className="text-muted-foreground">
                    @{user._count.followers}
                  </p>
                </div>
              <FollowButton userId={user.id}/>
              </div>
            </div>
          ))}
        </div>
      </CardContent>

    </Card>
  );
};

export default WhoToFollow;
