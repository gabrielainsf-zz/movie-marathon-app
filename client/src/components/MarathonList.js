import React from 'react';
import DisplayMarathon from './Marathon';
import './MarathonList.css'

class MarathonList extends React.Component {

  render() {
    const marathons = this.props.marathons

    return (
        <div>
            {marathons.map(marathon => {
                console.log(marathon.key)
                return (
                    <div key={marathon.key} className="MarathonList">
                        <DisplayMarathon marathon={marathon}/>
                        <form onSubmit={() => this.props.deleteMarathon(marathon.key)}>
                            <button type="submit">Delete</button>
                        </form>
                    </div>

                )
            })}
        </div>
    )

  }
}

export default MarathonList;