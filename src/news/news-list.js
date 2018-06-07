import React, { Component } from 'react';
import axios from 'axios'

import NewsItem from './news-item';

class MessageList extends Component {
  constructor(){  
    super()
    this.state = {
      news: []
    }
  }
  componentDidMount() {
    axios.get(`https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`).then((response)=>{
      this.setState(()=>{
        return {
          news: response.data
        }
      })
    })
  }

  render() {
    let mappedNews = this.state.news.map((news, index)=>{
      return <NewsItem key={news} id={news} index={index}/>
    })

    return mappedNews;
  }
}

export default MessageList;