import { UploadOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../utils/utils";


function SignUp() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [number, setNumber] = useState();
  const [image, setImage] = useState();
  

  function signupBtn() {
   
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('user', user);
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error', errorCode, errorMessage);
      
    });

    

  }


  return (
    <div className="container mx-auto">
      <form className="mx-auto xs:max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mt-20">
        <h1 className="text-2xl text-center font-semibold my-8">Sign Up</h1>
        <div className="mt-7">
          <label className="font-light ml-2">
            Profile Picture :
          </label>
          <Input
            onChange={(e) => { setImage(e.target.value) }}
            max={1}
            className="py-2 mt-1"
            placeholder="Enter Image"
            variant="filled"
            type="file"
          />
        </div>
        <div className="mt-7">
          <label className="font-light ml-2">
            Email :
          </label>
          <Input
            onChange={(e) => { setEmail(e.target.value) }}
            className="py-3 mt-1"
            placeholder="Enter Email"
            variant="filled"
            type="email"
          />
        </div>
        <div className="mt-7">
          <label className="font-light ml-2">
            Password :
          </label>
          <Input.Password
            onChange={(e) => { setPassword(e.target.value) }}
            className="py-3 mt-1"
            placeholder="Enter Password"
            variant="filled"
            type="password"
          />
        </div>
        <div className="mt-7">
          <label className="font-light ml-2">
            Confrim Password :
          </label>
          <Input.Password
            className="py-3 mt-1"
            placeholder="Re-Enter Password"
            variant="filled"
            type="password"
          />
        </div>
        <div className="mt-7">
          <label className="font-light ml-2">
          Contact :
          </label>
          <Input
          onChange={(e) => { setNumber(e.target.value) }}
            className="py-3 mt-1"
            placeholder="Enter Contact Number"
            variant="filled"
            type="number"
          />
        </div>
        <div className="mt-7 me-8 w-full flex justify-center items-center">
          <Button onClick={signupBtn} className="mx-auto py-3 px-6">Sign Up</Button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;

//  <> </>
// () => {}
// ? :  $ %