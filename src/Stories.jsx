import RoundButton from "./RoundButton";
import david from './assets/david.png';
import joe from './assets/joe.jpg';
import khaled from './assets/khaled.jpg';
import jan from './assets/jan.jpg';
import rahul from './assets/rahul.jpg';

const Stories = () => {
  return (
    <div className="stories">
      <div className="story your-story">
        <img className="story-pic" src={david} />
        <span className="username">Your story</span>
        <RoundButton className="fa fa-plus" />
      </div>
      <div className="story">
        <img className="story-pic" src={jan} />
        <span className="username">janm_ux</span>
      </div>
      <div className="story">
        <img className="story-pic" src={joe} />
        <span className="username">frontendjoe</span>
      </div>
      <div className="story">
        <img className="story-pic" src={khaled} />
        <span className="username">software_jour...</span>
      </div>
      <div className="story">
        <img className="story-pic" src={rahul} />
        <span className="username">rahul_codes</span>
      </div>
    </div>
  );
}

export default Stories;