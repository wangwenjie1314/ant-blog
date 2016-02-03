import React from 'react';
import $ from 'jquery';
import { Spin } from 'antd';

const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {};

styles.lebox = {
  padding: '30px',
  overflow: 'hidden',
  //background: dark,
  color: light
}

const Home = React.createClass({
  getInitialState() {
    return { 
        loading: true, 
        error: null, 
        data: null
    };
  },
  componentDidMount() {
    const self = this;
    if(sessionStorage.repositories){
        self.setState({loading: false, data: JSON.parse(sessionStorage.repositories)});
    }else{
        $.getJSON("https://api.github.com/search/repositories?q=javascript&sort=stars", function(result) {
            if (result && result.items) {
                sessionStorage.repositories = JSON.stringify(result.items);
                self.setState({loading: false, data: result.items});
            }else{
                self.setState({loading: false, error: error});
            }
        });
    }
  },
  render() {
    if (this.state.loading) {
      return (
        <div style={styles.lebox}>
            <Spin />
        </div>
      );
    }else if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>;
    }else {
      var repos = this.state.data;
      var repoList = repos.map(function (repo,i) {
        return (
          <li key={i}>
            <a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}
          </li>
        );
      });
      return (
        <main style={{ padding:20 }}>
          <h1>Most Popular JavaScript Projects in Github (base on Jquery-Ajax)</h1>
          <ol>{repoList}</ol>
        </main>
      );
    }
  }
});

export default Home;