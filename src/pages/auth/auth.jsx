import { GoogleSquareFilled, LoginOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../../utils/utils";

function Auth() {

  const navigate = useNavigate();

  const signinWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate('/')
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error', errorCode, errorMessage);
      });
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold mt-40">Welcome, Create An Account.</h1>
        <div className="m-10 w-full flex flex-col">
          <Button
            onClick={signinWithGoogle}
            style={{ width: '50%', color: 'black', background: 'white' }}
            className="mx-auto my-5 py-6 sm:text-[15px] md:text-[25px] lg:text-[25px] shadow shadow-black"
            type="primary" block >
            Continue With Google <GoogleSquareFilled />
          </Button>
          <Button
            onClick={() => { navigate('/auth/login') }}
            style={{ width: '50%', color: 'white', background: 'black' }}
            className="mx-auto my-5 py-6 sm:text-[15px] md:text-[25px] lg:text-[25px] shadow shadow-blue-300"
            type="primary" block >
            Login With Email <LoginOutlined />
          </Button>
          <Button
            onClick={() => { navigate('/auth/signup') }}
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