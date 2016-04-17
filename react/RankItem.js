/**
 * Created by piasy on 15/11/28.
 */

import React from 'react';

let RankItem = React.createClass({

    render() {
        let one = this.props.rank;
        return (
            <tr>
                <td>{one.rank}</td>
                <td><img className="avatar" src={one.avatar_url + "&s=140"}/></td>
                <td><a href={"https://github.com/" + one.login} target="_blank">{one.login}</a>
                </td>
                <td>{one.name}</td>
                <td>{one.dashboard_star}</td>
                <td>{one.followers}</td>
                <td>{one.public_repos}</td>
                <td>{one.location}</td>
                <td>{one.updated_at}</td>
            </tr>
        );
    }
});

module.exports = RankItem;
