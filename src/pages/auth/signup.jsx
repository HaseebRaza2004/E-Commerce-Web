import { UploadOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { auth, db, storage } from "../../utils/utils";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { AuthContext } from "../../context/authContext";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router";

function SignUp() {

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState(null);

  function signupBtn() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (image) {
          const userRef = ref(storage, `user/${user.uid}`);
          uploadBytes(userRef, image)
            .then((snapshot) => {
              getDownloadURL(userRef).then((url) => {
                const userInfo = {
                  email,
                  name,
                  number,
                  image: url,
                }
                navigate('/');
                // const userDbRef = doc(db, "users", user.uid);
                // console.log('user db ref', userDbRef);
                // console.log('user uid', user.uid);

                // setDoc(userDbRef, userInfo)
                //   .then(() => {
                //     console.log('user info saved to db');
                //     navigate('/');
                //   })
                //   .catch((error) => {
                //     console.log('error in getting URL', error.code, error.message);
                //   });
              })
                .catch((error) => {
                  console.log('error in getting URL', error.code, error.message);
                });
            })
            .catch((error) => {
              console.log('error in upload bytes', error.code, error.message);
            });
        } else {
          console.log("No image uploaded");
        }
      })
      .catch((error) => {
        console.log('error in create user', error.code, error.message);
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
            required
            onChange={(e) => { setImage(e.target.files[0]) }}  // Capture the actual file
            className="py-2 mt-1"
            type="file"
          />
        </div>
        <div className="mt-7">
          <label className="font-light ml-2">
            Name :
          </label>
          <Input
            required
            onChange={(e) => { setName(e.target.value) }}
            className="py-3 mt-1"
            placeholder="Enter Full Name"
            type="text"
          />
        </div>
        <div className="mt-7">
          <label className="font-light ml-2">
            Email :
          </label>
          <Input
            required
            onChange={(e) => { setEmail(e.target.value) }}
            className="py-3 mt-1"
            placeholder="Enter Email"
            type="email"
          />
        </div>
        <div className="mt-7">
          <label className="font-light ml-2">
            Password :
          </label>
          <Input.Password
            required
            onChange={(e) => { setPassword(e.target.value) }}
            className="py-3 mt-1"
            placeholder="Enter Password"
            type="password"
          />
        </div>
        <div className="mt-7">
          <label className="font-light ml-2">
            Confirm Password :
          </label>
          <Input.Password
            className="py-3 mt-1"
            placeholder="Re-Enter Password"
            type="password"
          />
        </div>
        <div className="mt-7">
          <label className="font-light ml-2">
            Contact :
          </label>
          <Input
            required
            onChange={(e) => { setNumber(e.target.value) }}
            className="py-3 mt-1"
            placeholder="Enter Contact Number"
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