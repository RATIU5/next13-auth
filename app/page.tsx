import SignIn from "@/components/sign-in";

export default function Home() {
  return (
    <main className="flex flex-col pb-24 justify-center items-start">
      <h2 className="text-8xl mb-8">Hello, guest!</h2>
      <SignIn />
    </main>
  );
}
