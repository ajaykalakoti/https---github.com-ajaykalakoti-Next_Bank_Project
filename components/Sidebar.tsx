"use client"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


const Sidebar = ({user}:SiderbarProps)=>{
  const pathname = usePathname();


  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
         <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">  {/*//flex is used to heading line or bottom */}
          <Image
            src="/icons/unnamed.png"
            width={50}
            height={50}
            alt="BoI logo"
            className="size-[40px]
                       max-xl:size-34"
          />
          <h1 className="sidebar-logo">Bank of India</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}                 
                   fill
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })}
        USER
      </nav>


    FOOTER
    </section>
  );
}
export default Sidebar