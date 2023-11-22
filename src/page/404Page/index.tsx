import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-2xl">Oops!</h1>
      <p className="my-5">Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-[grey]">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
