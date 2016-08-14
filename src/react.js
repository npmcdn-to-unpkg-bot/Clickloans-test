class AllItems extends React.Component {
    constructor(props) {
        super(props);
        var data = [];
        this.state = { data: [] };
    }
    loadCommentsFromServer () {
      $.ajax({
        url: this.props.source,
        dataType: 'json',
        cache: true,
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    }
    componentDidMount() {
        this.loadCommentsFromServer();
    }
    render () {
        var rows = [];
        var albums = this.state.data.slice(0);
        albums.map(function (item) {
        rows.push(<tr key={item.id}><th className="col-md-1" scope="row"></th><td className="col-md-1">{item.userId}</td><td className="col-md-1">{item.id}</td><td className="col-md-9">{item.title}</td></tr>)
        });
        return (
            <div>
                <table className="table table-striped table-fixed">
                <thead>
                    <tr>
                    <th className="col-md-1"></th><th className="col-md-1">userId</th><th className="col-md-1">id</th><th className="col-md-9">title</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
                </table>
            </div>
        )
    }
  }
ReactDOM.render(<AllItems source="http://jsonplaceholder.typicode.com/albums" />, document.getElementById('app1'));
