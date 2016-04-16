import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import RankItem from './RankItem'

class GHRC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.ranks = null;
    }

    componentWillMount() {
        let self = this;
        fetch('http://7xt1k0.com2.z0.glb.clouddn.com/ghrc.json').then(function (response) {
            return response.json();
        }).then(function (data) {
            self.setState(data);
        });
    }

    render() {
        if (this.state.ranks != null) {
            const ranks = [];
            for (let i = 0; i < this.state.ranks.length; i++) {
                let one = this.state.ranks[i];
                ranks.push(<RankItem key={i + 1} rank={Object.assign({rank: i + 1}, one)} />);
            }
            return (
                <div>
                    <p className="alert notice">
                        Last updated on <strong>{this.state.updated_at}</strong> by Github API v3. <span style={{float: 'right'}}>♥ made by <a target="_blank" href="https://github.com/Piasy">Piasy</a> just for fun, based on <a target="_blank" href="http://githubrank.com/">githubrank.com</a>.</span>
                    </p>
                    <table className="table">
                        <thead className="table-head">
                        <tr>
                            <th>Rank</th>
                            <th>Avatar</th>
                            <th>Username</th>
                            <th>Name</th>
                            <th>DashboardStar</th>
                            <th>Location</th>
                            <th>Followers</th>
                            <th>Repos</th>
                            <th>Updated</th>
                        </tr>
                        </thead>
                        <tbody className="table-body">
                        {ranks}
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return (
                <div>
                    <p className="alert notice">
                        Last updated on <strong>...</strong> by Github API v3. <span style={{float: 'right'}}>♥ made by <a target="_blank" href="https://github.com/Piasy">Piasy</a> just for fun, based on <a target="_blank" href="http://githubrank.com/">githubrank.com</a>.</span>
                    </p>
                    <table className="table">
                        <thead className="table-head">
                        <tr>
                            <th>Rank</th>
                            <th>Avatar</th>
                            <th>Username</th>
                            <th>Name</th>
                            <th>DashboardStar</th>
                            <th>Location</th>
                            <th>Followers</th>
                            <th>Repos</th>
                            <th>Updated</th>
                        </tr>
                        </thead>
                        <tbody className="table-body">
                        <tr>
                            <td><span>Loading...</span></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}

ReactDOM.render(<GHRC />, document.getElementById('root'));