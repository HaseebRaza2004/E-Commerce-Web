import { Button, Input } from "antd";

function LogIn() {

  return (
    <div className="container mx-auto">
      <form className="mx-auto xs:max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mt-20">
        <h1 className="text-2xl text-center font-semibold my-8">Login</h1>
        <div className="mt-2">
          <label className="font-light ml-2">
            Email:
          </label>
          <Input
            className="py-3 mt-1"
            placeholder="Email"
            variant="filled"
            type="email"
          />
        </div>
        <div className="mt-7">
          <label className="font-light ml-2">
            Password:
          </label>
          <Input.Password
            className="py-3 mt-1"
            placeholder="Password"
            variant="filled"
            type="password"
          />
        </div>
        <div className="mt-7">
          <label className="font-light ml-2">
            Confrim Password:
          </label>
          <Input.Password
            className="py-3 mt-1"
            placeholder="Re-Enter Password"
            variant="filled"
            type="password"
          />
        </div>
        <div className="mt-7 me-8 w-full flex justify-center items-center">
          <Button className="mx-auto py-3 px-6">Login</Button>
        </div>
      </form>
    </div>
  )
}

export default LogIn;

//  <> </>
// () => {}
// ? :  $