import { useState } from "react";

export const LandingPage = () => {

  const [spin, setSpin] = useState(false)
  return (

    <>
      <main className="bg-gray-200 min-h-[calc(100vh-80px)] flex-col flex justify-center items-center">
        <section className="p-12 flex-col gap-8 min-h-[calc(100vh-80px)] flex justify-center items-center">
          <h1 className="text-3xl min-w-[300px]">This is the landing page</h1>
          <img src="/vite.svg" className={` ${spin ? "spin" : ""}`} alt="" />
          <button onClick={() => setSpin(!spin)}>Click me</button>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum error facere modi tempore eligendi minus rem corrupti atque sapiente cupiditate, neque ratione quaerat ipsum, optio voluptas cumque quisquam officia sequi.</p>
        </section>
       
        <section className="p-12 flex-col gap-8 min-h-[calc(100vh-80px)] flex justify-center items-center">
          <h1 className="text-3xl min-w-[300px]">Some other section</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum error facere modi tempore eligendi minus rem corrupti atque sapiente cupiditate, neque ratione quaerat ipsum, optio voluptas cumque quisquam officia sequi.</p>
        </section>
       
      </main>

      <style jsx>
        {` 

main.landingpage {

}               
nav {
 height: 80px; 
}


`}
      </style>
    </>
  );
};
