import React, { Component } from "react";
import "./index.css";
import axios from 'axios';
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";


const AUTH_TOKEN = "19199017-0109ef76b5c2e4dd98ebacd3c";
axios.defaults.baseURL = "https://pixabay.com";


class App extends Component {
  state = { 
    images:[],
    query: "",
    page: 1,
    pageSize: 5,
    showModal: false,
    isLoading: false
 };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const query = evt.target.searchQuery.value;
    this.setState(prevState => {
      if(prevState.query !== query) {
        return {
          images:[],
          query,
          page: 1,
        }
      } else {
        return {
          page: prevState.page + 1
        }
      }
    })
  };

  handleLoadMore = () => {
    this.setState(({page}) => ({
      page: page + 1
    }))
  }

  getImages = () => {
    const {query, page, pageSize} = this.state; 

    return axios
    .get(`/api/?key=${AUTH_TOKEN}&q=${query}&page=${page}&per_page=${pageSize}`)
    .then(response=>
      this.setState(({images})=>({
      images: [...images, ...response.data.hits],
      isLoading: false
    })))
    .catch(console.log)
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, pageNum, isLoading, image } = this.state;

    if (prevState.query !== query || prevState.pageNum !== pageNum) {
      this.setState({
        isLoading: true,
      });
      this.getImages();
    }

    if (prevState.isLoading === true && !isLoading) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }

    if (prevState.image !== image) {
      this.toggleModal();
    }
  }
  render() {
    const {query, images} = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} query={query}/>
        <ImageGallery images={images}/>
        <Button onClick={this.handleLoadMore}/>
      </div>
    );
  }
}

export default App;
