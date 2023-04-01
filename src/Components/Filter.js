import React from "react";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    background: "#000000e3",
    zIndex: "5",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "0%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
  },
};

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      FilterisOpen: false,
      rating:'',
      price:''
    };
  }

  handleFilter = () => {
    this.setState({ FilterisOpen: true });
  };

  FilterisClose = () => {
    this.setState({ FilterisOpen: false });
  };

  handleOptionChange = (event) => {
    this.setState({rating : event.target.value })
    console.log(event.target.value);
  };
  handlepriceChange =(event)=>{
    console.log(event.target.value)
    this.setState({price : event.target.value })
  
  }
  Filterthemenu =()=>{
    const { price , rating}=this.state
    this.props.valuefromfilter(rating,price)
    this.setState({ FilterisOpen: false });
  }
  showall =()=>{
    this.props.display()
    this.setState({price : '' ,rating : ''})
  }
  render() {
    return (
      <div className="filter-page">
        <button onClick={this.handleFilter}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#9C9C9C"
            width="18"
            height="18"
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
            class="sc-rbbb40-0 iwHbVQ"
          >
            <title>filter</title>
            <path d="M2.14 6.42h7.26c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h2.96c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001h-2.94c-0.341-1.226-1.447-2.11-2.76-2.11s-2.419 0.885-2.755 2.090l-0.005 0.020h-7.26c-0.343 0.059-0.6 0.355-0.6 0.71s0.257 0.651 0.596 0.709l0.004 0.001zM12.16 4.28c0.776 0.011 1.4 0.643 1.4 1.42 0 0.784-0.636 1.42-1.42 1.42-0.777 0-1.409-0.624-1.42-1.399l-0-0.001c-0-0.006-0-0.013-0-0.020 0-0.784 0.636-1.42 1.42-1.42 0.007 0 0.014 0 0.021 0l-0.001-0zM17.86 13.58h-7.24c-0.328-1.245-1.443-2.148-2.77-2.148s-2.442 0.903-2.766 2.128l-0.004 0.020h-2.94c-0.036-0.006-0.077-0.010-0.12-0.010-0.398 0-0.72 0.322-0.72 0.72s0.322 0.72 0.72 0.72c0.042 0 0.084-0.004 0.124-0.011l-0.004 0.001h2.96c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h7.26c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001zM7.84 15.72c-0.776-0.011-1.4-0.643-1.4-1.42 0-0.784 0.636-1.42 1.42-1.42 0.777 0 1.409 0.624 1.42 1.399l0 0.001c0 0.006 0 0.013 0 0.020 0 0.784-0.636 1.42-1.42 1.42-0.007 0-0.014-0-0.021-0l0.001 0z"></path>
          </svg>
          Filters
        </button>
        <button onClick={this.showall}>Show All</button>
        <Modal isOpen={this.state.FilterisOpen} style={customStyles}>
          <div className="Login-div1">
            <h2>Filter Page</h2>
            <button onClick={this.FilterisClose}>X</button>
          </div>
          <div className="filter-model-div">
            <div className="filter-model-rating">
              <h3>Rating</h3>
              <div className="filter-model-main">
                <label>
                  <input
                    type="radio"
                    value="4"
                    onChange={this.handleOptionChange}
                    name="rating"
                  />
                  Rating : 4+
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value="3"
                    onChange={this.handleOptionChange}
                    name="rating"
                  />
                  Rating : 3+
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value="2"
                    onChange={this.handleOptionChange}
                    name="rating"
                  />
                  Rating : 2+
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value="1"
                    onChange={this.handleOptionChange}
                    name="rating"
                  />
                  Rating : 1+
                </label>
                <br />
                <div>
                <label>
                  <input
                    type="radio"
                    value="ascending"
                    onChange={this.handleOptionChange}
                    name="rating"
                  />
                  High to Low
                </label>
                <label>
                  <input
                    type="radio"
                    value="descending"
                    onChange={this.handleOptionChange}
                    name="rating"
                  />
                   Low to High 
                </label>
                </div>
              </div> 
            </div>
            <div className="filter-model-rating">
                <h3>Price</h3>
              
              <div className="filter-model-main">
              <label>
                  <input
                    type="radio"
                    value="500"
                    onChange={this.handlepriceChange}
                    name="price"
                  />
                   400+
                </label>
                <br/>
                <label>
                  <input
                    type="radio"
                    value="400"
                    onChange={this.handlepriceChange}
                    name="price"
                  />
                   300-400
                </label>
                <br/>
                <label>
                  <input
                    type="radio"
                    value="300"
                    onChange={this.handlepriceChange}
                    name="price"
                  />
                   200-300
                </label>
                <br/>
                <label>
                  <input
                    type="radio"
                    value="200"
                    onChange={this.handlepriceChange}
                    name="price"
                  />
                   100-200
                </label>
                <br/>
                <label>
                  <input
                    type="radio"
                    value="100"
                    onChange={this.handlepriceChange}
                    name="price"
                  />
                   -100
                </label>
                <br></br>
                <label>
                  <input
                    type="radio"
                    value="htl"
                    onChange={this.handlepriceChange}
                    name="price"
                  />
                   High to Low
                </label>
                <br/>
                <label>
                  <input
                    type="radio"
                    value="lth"
                    onChange={this.handlepriceChange}
                    name="price"
                  />
                   Low to High
                </label>
                
              </div>
            </div>
          </div>
          <div className="model-div-btns">
              <button className="filter-model-cancel-btn" onClick={this.FilterisClose}>Cancel</button>
              <button className="filter-model-filter-btn" onClick={this.Filterthemenu}>Filter</button>
            </div>
        </Modal>
      </div>
    );
  }
}

export default Filter;
