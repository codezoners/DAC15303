  /** @jsx React.DOM */
  var MyDate = React.createClass({
      // The initial state of the MyDate object: a "date" field:
      getInitialState: function () {
          return {date: Date(),
                  location: "London",
                  locationImage: "london.jpg",
                  nextLocation: "Lagos"};
      },

      handleClick: function () {
          this.setState({date: Date()});
      },

      toggleLocation: function () {
          if (this.state.location == "London") {
              this.setState({location: "Lagos",
                             locationImage: "lagos.png",
                             nextLocation: "Los Angeles"});
          } else if (this.state.location == "Lagos") {
              this.setState({location: "Los Angeles",
                             locationImage: "los-angeles.jpg",
                             nextLocation: "London"});
          } else {
              this.setState({location: "London",
                             locationImage: "london.jpg",
                             nextLocation: "Lagos"});
          }
      },

      // Every React class must have a render function:
      render: function () {
          return <div>
              <h1>{this.state.date}</h1>
              <h2>{this.state.location}</h2>
              <div><img src={this.state.locationImage}></img></div>
              <div><button type="button" onClick={this.handleClick}>Update!</button></div>
              <div><button type="button" onClick={this.toggleLocation}>{this.state.nextLocation}</button></div>
          </div>;
      }
  });

  React.renderComponent(
    <MyDate />,
    document.getElementById('target')
  );
