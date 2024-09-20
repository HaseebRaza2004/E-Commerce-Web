import { GoogleSquareFilled, LoginOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router";


function Auth() {

  const navigate = useNavigate();

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold mt-40">Welcome, Create An Account.</h1>
        <div className="m-10 w-full flex flex-col">
          <Button
            style={{ width: '50%', color: 'black', background: 'white' }}
            className="mx-auto my-5 py-6 sm:text-[15px] md:text-[25px] lg:text-[25px] shadow shadow-black"
            type="primary" block >
            Continue With Google <GoogleSquareFilled />
          </Button>
          <Button
          onClick={() => {navigate('/auth/login')}}
            style={{ width: '50%', color: 'white', background: 'black' }}
            className="mx-auto my-5 py-6 sm:text-[15px] md:text-[25px] lg:text-[25px] shadow shadow-blue-300"
            type="primary" block >
            Login With Email <LoginOutlined />
          </Button>
          <Button
          onClick={() => {navigate('/auth/signup')}}
            style={{ width: '50%', color: 'white', background: 'blue' }}
            className="mx-auto my-5 py-6 sm:text-[15px] md:text-[25px] lg:text-[25px] shadow shadow-gray-600"
            type="primary" block >
            Signup With Email <LoginOutlined />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Auth;

//  <> </>
// () => {}
// ? :  $ %