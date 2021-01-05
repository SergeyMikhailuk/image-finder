import React, { Component } from "react";
import "./index.css";
import axios from 'axios';
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal";


const AUTH_TOKEN = "19199017-0109ef76b5c2e4dd98ebacd3c";
axios.defaults.baseURL = "https://pixabay.com";


class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    largeImageURL: {},
    pageSize: 5,
    showModal: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page, isLoading, largeImageURL } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({
        isLoading: true,
      });
      this.getImages();
    }

    if (prevState.isLoading === true && !isLoading) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }

    if (prevState.largeImageURL !== largeImageURL) {
      this.toggleModal();
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const query = evt.target.searchQuery.value;
    this.setState((prevState) => {
      if (prevState.query !== query) {
        return {
          images: [],
          query,
          page: 1,
        };
      } else {
        return {
          page: prevState.page + 1,
        };
      }
    });
  };

  getImages = () => {
    const { query, page, pageSize } = this.state;
    this.setState({ isLoading: true });
    return axios
      .get(
        `/api/?key=${AUTH_TOKEN}&q=${query}&page=${page}&per_page=${pageSize}`
      )
      .then((response) =>
        this.setState(({ images }) => ({
          images: [...images, ...response.data.hits],
          isLoading: false,
        }))
      )
      .catch(console.log);
  };

  handleLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  openImage = ({ target }) => {
    this.setState({
      largeImageURL: {
        query: this.state.query,
        src: target.dataset.src,
      },
    });
  };

  render() {
    const { query, images, isLoading, showModal, largeImageURL } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} query={query} />
        <ImageGallery images={images} query={query} onClick={this.openImage}/>
        {isLoading ? (
          <Loader />
        ) : (
          images.length !== 0 && <Button onClick={this.handleLoadMore} />
        )}
        {showModal && <Modal close={this.toggleModal} url={largeImageURL}/>}
      </div>
    );
  }
}

export default App;
