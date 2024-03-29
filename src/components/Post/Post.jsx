import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor, sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        eius quam ipsa nesciunt vero iure nam! Ipsam quo, inventore qui illo
        suscipit quasi praesentium numquam voluptatum nulla? Fugiat, expedita
        rerum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
        incidunt exercitationem iste deleniti dolorum id sed sit praesentium
        fuga! Placeat, quisquam eius? Deserunt sunt a nesciunt atque corrupti,
        at dolorum!
      </p>
    </div>
  );
}

export default Post;
