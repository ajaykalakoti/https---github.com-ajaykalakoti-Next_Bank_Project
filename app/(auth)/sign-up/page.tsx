import AuthForm from "@/components/AuthForm";

const SignUp = async () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUp;

// import AuthForm from "@/components/AuthForm";

// const SignUp = () => {
//   return (
//     <section className="flex justify-center items-center w-full h-screen max-sm:px-6 bg-gray-100">
//       <AuthForm type="sign-up" />
//     </section>
//   );
// };

// export default SignUp;
