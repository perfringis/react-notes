// In react are two ways of importing styles
// 1. Importing CSS files directly
// 2. Using import styles from './Image.css' and then using styles.avatar in the component

import './Image.css';

function Image() {
  return <img className="avatar" alt="alt" />;
}

export default Image;
