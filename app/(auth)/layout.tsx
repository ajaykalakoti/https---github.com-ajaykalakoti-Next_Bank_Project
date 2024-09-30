import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src="/icons/auth-image.svg"
            alt="Auth image"
            width={500}
            height={500}
            className="rounded-l-xl object-contain"
          />
        </div>
      </div>
    </main>
  );
}


// import Image from "next/image";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <main className="flex min-h-screen w-full justify-between font-inter bg-gray-50">
//       {/* Render form/content */}
//       <div className="flex-1 flex justify-center items-center p-6">
//         {children}
//       </div>

//       {/* Render image */}
//       <div className="hidden lg:flex auth-asset w-1/2 h-full bg-white shadow-lg rounded-l-xl">
//         <div className="w-full h-full flex justify-center items-center">
//           <Image
//             src="/icons/auth-image.svg"
//             alt="User Authentication Visual"
//             width={500}
//             height={500}
//             className="rounded-l-xl object-contain"
//             priority
//             layout="responsive"
//           />
//         </div>
//       </div>
//     </main>
//   );
// }
