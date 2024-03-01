import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Usercard from "../components/Usercard";
import { redirect } from "next/navigation";

export default async function ServerPage() {
  const session = await getServerSession(options)

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server")
  }

  return <section>
    <Usercard user={session?.user} pagetype={"Server"} />
  </section>;
}
