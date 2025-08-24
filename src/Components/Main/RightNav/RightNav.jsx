import Github from "../../SocialLogin/GithubLogin/Github";
import GoogleLogin from "../../SocialLogin/GoogleLogin/GoogleLogin";
import FindUs from "./FindUs";


const RightNav = () => {
    return (
        <div>
            <h1 className="font-bold">Login With</h1>
            <div className="space-y-2 my-5">
                <GoogleLogin></GoogleLogin>
                <Github></Github>
            </div>
            <FindUs></FindUs>
        </div>
    );
};

export default RightNav;