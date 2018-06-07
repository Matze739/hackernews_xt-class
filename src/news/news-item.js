import React, { Component } from 'react';
import axios from 'axios'

class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      news: [],
      loading: true
    };
  }
  componentDidMount() {
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json?print=pretty`).then((response)=>{
      this.setState(()=>{
        return {
          news: response.data
        }
      })
      console.log(response.data)
      this.setState({loading: false});
    })
  }

  render() {
    if (this.state.news && this.state.news !== undefined) {
      return <News id={this.props.id} loading={this.state.loading} index={this.props.index} news={this.state.news}/>
    }
    else {
      return <div>error occured on the element with the id {this.props.id}</div>
    }
  }
}

export default NewsItem;

const News = ({id, news , index, loading}) => {
  if (loading) {
    return (
      <div class="news">
        <div class="flex"><div class="loading">loading element with id {id}</div></div>
      </div>
    );
  } else {
    return (
      <div class="news">
        <div class="flex">
          <div class="index">{index}</div>
          <div class="content">
            <div class="headline">{news.title}</div>
            <div class="score">{news.score} points by {news.by}</div>
          </div>
        </div>
      </div>
    );
  }
}