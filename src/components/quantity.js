import React, { Component } from 'react';

class Quantity extends Component {
    render() {
        const { className, quantity } = this.props;
        return (
            <div className={`${className} quantity`}>
                <div className='quantity__count'>
                    {quantity}
                </div>
                <div className='quantity__plus'>
                <div className="back__plus"><a className="fa">&#xf067;</a></div>
                </div>
                <div className='quantity__minus'>
                <div className="back__minus"><a className="fa">&#xf068;</a></div>
                </div>
            </div>
        )
    }
}

export default Quantity;