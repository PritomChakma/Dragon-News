import swiming from "../../../../assets/swimming.png";
import classRoom from"../../../../assets/class.png";
import playGround from "../../../../assets/playground.png";
import bg from "../../../../assets/bg.png";

const Qzone = () => {
  return (
    <div className="my-5 bg-[#E7E7E7] p-5">
      <h1 className="font-semibold font-xl">Q-Zone</h1>

      <div>
        <img src={swiming} alt="" />
      </div>
      <div>
        <img src={classRoom} alt="" />
      </div>
      <div className="my-10">
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
