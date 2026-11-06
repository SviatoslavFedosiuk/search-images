import './App.css'
import { fetchImages } from './api'
import Searchbar from './components/Searchbar/Searchbar'
import Loader from './components/Loader/Loader'
import Button from './components/Button/Button'
import Modal from './components/Modal/Modal'
import ImageGallery from './components/ImageGallery/ImageGallery'
import { Component } from 'react'

class App extends Component{
  state = {
    images: [],
    loading: false,
    page: 1,
    searchValue: "",
    largeImage: "",
  }

  handleBigImage = (img) => {
    this.setState({
      largeImage: img,
    })
  }

  handleSearchSubmit = (searchValue) => {
    this.setState({
      loading:true,
      page: 1,
      searchValue: searchValue,
    })
    fetchImages(searchValue, 1).then((images)=>{
      this.setState({
        images: images,
        loading: false,
      })
    })
    
  }


  handleMore = () =>{
    this.setState((prev)=>{
      return {
        page: prev.page + 1, 
        loading: true,
      }
    })
    fetchImages(this.state.searchValue, this.state.page).then((images)=>{
      this.setState((prev)=>{
        return {
          images: [...prev.images, ... images],
          loading: false,
        }
      })
    })
  }
  render(){
    return(
      <>
      <Searchbar onSubmit={this.handleSearchSubmit}/>
      {this.state.loading && <Loader/>}
      <ImageGallery onClick={this.handleBigImage} images={this.state.images}/>
      {this.state.images.length > 0 && <Button onClick={this.handleMore}/>}
      {this.state.largeImage && <Modal  largeImg={this.state.largeImage}/>}
      </>
    )
  }
}

export default App