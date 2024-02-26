import AeroButton from "./AeroButton";
import RoundButton from "./RoundButton";

/* eslint-disable react/prop-types */
const Post = ({ userimg, postimg, username, likes, description, timestamp }) => {
    return (
        <div className="post">
            <div className="post-top">
                <div className="user">
                    <img src={userimg} />
                    <p>{username}</p>
                </div>
                <AeroButton label="Follow" />
            </div>

            <img className="post-img" src={postimg} />
            <div className="post-actions">
                <div>
                    <RoundButton className="fa fa-heart"/>
                    <RoundButton className="fa fa-comment"/>
                    <RoundButton className="fa fa-paper-plane"/>
                </div>
                <div>
                    <RoundButton className="fa fa-bookmark"/>
                </div>
            </div>
            <b className="likes-count">{likes} likes</b>
            <p className="desc">
                <b>{username}</b> {description}
            </p>
            <p className="comments">View all comments</p>
            <p className="timestamp">{timestamp}</p>
        </div>
    );
}

export default Post;