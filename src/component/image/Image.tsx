import './image.css';

const user = {
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
};

function Image() {
  return <img className="avatar" src={user.imageUrl} alt='alt'/>;
}

export default Image;
