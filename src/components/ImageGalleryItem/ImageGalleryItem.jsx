import { Component } from "react";
import style from "./ImageGalleryItem.module.css"
class ImageGalleryItem extends Component {

  handleImageClick = (img) =>{
this.props.onClick(img)

  }
  render() {
    const {image, } = this.props
    return (
      <>
        <li className={style.item}>
          <img className={style.img} onClick={()=>this.handleImageClick(image.largeImageURL)} src={image.webformatURL} alt={image.tags} />
        </li>
      </>
    );
  }
}
export default ImageGalleryItem;
