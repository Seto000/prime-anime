import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="flex flex-col gap-2 items-center justify-center text-white h-96 md:h-[650px]">
      <h2 className="text-xl">Not Found.</h2>
      <p>Couldn&apos;t find what you were looking for.</p>
      <Link href="/home" className="bg-slate-800 hover:bg-slate-500 rounded-md px-5 py-3.5">
        Go to Prime Anime Home
      </Link>
    </main>
  );
};

export default NotFoundPage;
