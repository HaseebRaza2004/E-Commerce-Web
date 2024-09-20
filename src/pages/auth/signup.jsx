import { UploadOutlined } from "@ant-design/icons";
import { Input, Button, Upload } from "antd";


function SignUp() {

  return (
    <div className="container mx-auto">
      <form className="mx-auto xs:max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mt-20">
        <h1 className="text-2xl text-center font-semibold my-8">Sign Up</h1>
        <Upload
          className="mt-2 py-3"
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture"
          maxCount={1}
        >
          <Button icon={<UploadOutlined />}>Click To Upload</Button>
        </Upload>
        <div className="mt-7">
          <label className="font-light ml-2">
            Email:
          </label>
          <Input
            className="py-3 mt-1"
            placeholder="Enter Email"
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
            placeholder="Enter Password"
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
          <Button className="mx-auto py-3 px-6">Sign Up</Button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;