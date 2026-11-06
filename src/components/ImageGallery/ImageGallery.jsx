import { Component } from "react";
import style from "./ImageGallery.module.css"
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <>
        <ul className={style.list}>
          {images.map((img) => {
            return (
            <ImageGalleryItem onClick={this.props.onClick} key={img.id + String(Math.random())} image={img}/>
            );
          })}
        </ul>
      </>
    );
  }
}
export default ImageGallery;
