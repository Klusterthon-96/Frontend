import React from "react";

export default function ErrorPage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="font-bold text-2xl">Oops!</h1>
            <p className="my-5">Sorry, an unexpected error has occurred.</p>
            <p>
                <i className="text-[grey]">Page not found</i>
            </p>
        </div>
    );
}
