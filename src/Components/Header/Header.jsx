import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 my-5">
            <img className="w-[300px]" src={logo} alt="" />
            <h1 className="text-gray-500">Journalism Without Fear or Favour</h1>
            <h1>Sunday, November 27, 2025</h1>
        </div>
    );
};

export default Header;