// Include React
const React = require("react");
const helpers = require("../utils/helpers");


// Saves the articles
const Saved = React.createClass({

    getInitialState: function() {
    return { 
      saved: []
    };
  },

  componentDidMount: function() {

    helpers.getSavedArticles().then(function(response) {
      console.log(response);
      if (response !== this.state.saved) {
        console.log("saved", response.data);
        this.setState({ saved: response.data });
      }
    }.bind(this));
  },


  deleteClick: function(index) {
    const {saved} = this.state;

    const selected = saved[index];

    const article = {
      title: selected.title
    }

    this.deleteArticle(article);

  },


  deleteArticle(article){
    helpers.deleteArticle(article).then(function(response){
      this.setState({saved: response.data});
    }.bind(this));
  },

  // Render
  render: function() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Saved Articles</h3>
        </div>
        <div className="panel-body text-left">

              <ul className="list-group">
                {this.state.saved.map( function(search, i){
                  return <div className="resultList" key={i} >
                      <li className="list-group-item" >
                        <p className="info" style={{fontSize: 25}}>{search.title} ({new Date(search.date).toDateString()})</p>
                        <a style={{dislay:'inline-block'}} target='_blank' href={search.url}>{search.url}</a>
                        <br/>
                          <button type="button" className="btn btn-default" style={{marginTop: 15}} onClick={()=>this.deleteClick(i)} value={i}>Delete from Saved</button>
                        <br/>
                      </li>
                    </div>
                  }.bind(this))
                }
              </ul> 
          
        </div>
      </div>
    );
  }
});

// Export for other files
module.exports = Saved;



