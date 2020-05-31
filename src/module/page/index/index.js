import React from 'react';
import './index.css';


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayWord: 'test word',
        };
    }
  
    render() {
        const {
            displayWord,
        } = this.state;
        return (
            <div>
                {displayWord}
            </div>
        );
    }
}

export default Index;
