// the good practice is to split components into separate files
// like in this example

import Profile from "../profile/Profile";

function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

export default Gallery;
