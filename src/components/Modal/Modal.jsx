import { Component } from "react";
import style from "./Modal.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
class Modal extends Component {
  render() {
    const { images } = this.props;
    return (
      <>
        <div className={style.backDrop}>
          <div className={style.modal}>
            <img className={style.img} src={this.props.largeImg} alt="#" />
          </div>
        </div>
      </>
    );
  }
}
export default Modal;
