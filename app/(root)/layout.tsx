// import MobileNav from "@/components/MobileNav";
// import dynamic from "next/dynamic";
// import Image from "next/image";
// import Sidebar from "@/components/Sidebar";
// import { getLoggedInUser } from "@/lib/actions/user.actions";
// import { redirect } from "next/navigation";



// const Sidebar = dynamic(() => import("../../components/Sidebar"), {
//   ssr: false,
// });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const loggedIn = { firstName: "Adrian", lastName: "JSM" };
//  if (!loggedIn) redirect("/sign-in");
//   return (
//     <main className="flex h-screen w-full font-inter">
//       <Sidebar user={loggedIn} />

//       <div className="flex size-full flex-col">
//         <div className="root-layout">
//           <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
//           <div>
//             <MobileNav user={loggedIn} />
//           </div>
//         </div>
//         {children}
//       </div>
//     </main>
//   );
// }


import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.action";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) redirect("/sign-in");

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}