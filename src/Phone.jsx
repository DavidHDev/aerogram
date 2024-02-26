import Post from './Post';
import RoundButton from './RoundButton';
import Stories from './Stories';
import phone from './assets/phone.png'
import vehan from './assets/vehan.jpg';
import vehanpost from './assets/vehanpost.jpg';
import memepost from './assets/memepost.jpg';
import shrek from './assets/shrek.jpg';
import aerologo from './assets/iglogo.png'

const Phone = () => {
  return (
    <main className="main-container">
      <img className="logo" src={aerologo}/>
      <img src={phone} />

      <section className="content">
        <div className="topbar">
          <p>For you <i className="fa fa-chevron-down fa-xs"></i></p>
          <div className='topbar-buttons'>
            <RoundButton className="fa fa-heart" />
            <RoundButton className="fa fa-paper-plane" />
          </div>
        </div>

        <Stories />

        <div className="posts">
          <Post username="vhemsara" userimg={vehan} postimg={vehanpost} likes={833} timestamp="12 hours ago" description="Hey everyone, hope you're all doing well! I've created a custom reusable widget for selecting files and documents. This widget not only..."/>
          <Post username="codingmemes" userimg={shrek} postimg={memepost} likes={1337} timestamp="3 days ago" description="lol"/>
        </div>
      </section>
    </main>
  );
}

export default Phone;