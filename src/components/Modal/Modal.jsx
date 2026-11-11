import { Component } from "react";
import style from "./Modal.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
class Modal extends Component {

  componentDidMount(){
window.addEventListener("keydown", this.handleEscapeModalClose)
  }
  componentWillUnmount(){
window.removeEventListener("keydown", this.handleEscapeModalClose)
  }

  handleEscapeModalClose = (e) =>{
    if(e.code === "Escape")
      this.props.onClose()
  }
  handleBackdropClick = (evt) =>{
    if (evt.target === evt.currentTarget)  {
       this.props.onClose()
    }}

  render() {
    const { images, onClose } = this.props;
    return (
      <>
        <div onClick={this.handleBackdropClick} className={style.backDrop}>
          <div className={style.modal}>
            <img className={style.img} src={this.props.largeImg} alt="#" />
          </div>
        </div>
      </>
    );
  }
}
export default Modal;
