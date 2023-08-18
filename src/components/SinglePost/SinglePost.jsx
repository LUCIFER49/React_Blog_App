import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="image"
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem, ipsum dolor sit .{" "}
          <div className="singlePostEdit">
            {" "}
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>{" "}
            <i class="singlePostIcon fa-solid fa-trash"></i>{" "}
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:<b> Mr. Nobody</b>
          </span>
          <span className="singlePostDate">1 Hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          perspiciatis. Modi eveniet neque voluptate nostrum facere perspiciatis
          nesciunt quod, tenetur ipsa ad odio sapiente architecto minus, rerum
          autem fugit temporibus. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Porro mollitia fugiat sunt veniam minima praesentium
          deleniti aliquid. A deleniti accusamus praesentium, tempora debitis
          odio suscipit vel, ullam ipsum, iure voluptatem?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
