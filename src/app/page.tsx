import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Usercard from "./components/Usercard";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <>
      {session ? (
        <Usercard user={session?.user} pagetype={"Home"} />
      ) : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
      )}
    </>
  );
}
