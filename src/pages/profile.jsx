import { LoadingOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { signOut } from "firebase/auth";
import { auth } from "../utils/utils";

function Profile() {

  function Logout() {
    signOut(auth);
  }

    return (
      <>
        <h1 className="text-3xl font-bold underline">
        Profile
        </h1>
        <Button danger onClick={Logout}>Logout</Button>
      </>
    )
  }
  
  export default Profile;