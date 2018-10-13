import React from 'react';
import Marathon from './Marathon';
import './MarathonList.css'

class MarathonList extends React.Component {

  render() {
    const marathons = this.props.marathons

    return (
        <div>
            {marathons.map(marathon => {
                return (
                    <div className="MarathonList">
                        <Marathon key={marathon.key} marathon={marathon}/>

                    </div>
                    )

            })}
        </div>
    )

  }
}

export default MarathonList;