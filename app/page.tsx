import { Posting } from "./types/job";
import ClientSorter from "./components/ClientSorter";
import { getAllJobPostings } from "./lib/jobs";
import { getServerSession } from "next-auth";
import LogoutButton from "./components/Log";
import { redirect } from "next/navigation";
export default async function Home() {
  const data: Posting[] = await getAllJobPostings();
  const session = await getServerSession();

  return (
    <div className="gap-[40px] pt-[72px] pb-[72px] pl-[124px] pr-[123px]">
      {session ? (
        <div>
           <p>Logged in as {session.user?.name}</p>
           <p>Email: {session.user?.email}</p>
          <LogoutButton />
        <div className="mb-4 flex items-center justify-between">
         
           <ClientSorter jobs={data} />
        </div>
        </div>
      ) : (
        <div className="gap-[40px] pt-[72px] pb-[72px] pl-[124px] pr-[123px]">
           <p>You are not logged in.</p>
           {redirect("/api/auth/signin")}
          </div>
       
      )}

     
    </div>
  );
}
