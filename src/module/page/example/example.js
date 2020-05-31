import React from 'react';
import './example.css';
import axios from 'axios';


class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayWord: 'Example word',
        };
    }
  

    componentDidMount() {
        console.log('componentDidMount');
        this.init();
    }

    init() {
        axios.post('/user',{
            firstName:'Fred',
            lastName:'Flintstone'
        })
            .then((res) => {
                this.setState({

                });
            console.log('获取接口返回并更新数据');
        })
            .catch((err) => {
            console.log(err);
        });
    }

    render() {
        const {
            displayWord,
        } = this.state;
        return (
            <div>
                test
                {displayWord}
            </div>
        );
    }
}

export default Example;
