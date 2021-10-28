import React, { Component } from 'react';

class Modal extends Component {
    render() {
        return (
            <a onClick={() => this.props.onTapOutside()} className="modal">
                <div className="modal-box">
                    <label className="modal-box__save-address">{this.props.title}</label>
                    <label className="modal-box__message">{this.props.message}</label>
                    <div className="modal-box__buttons">
                        {this.props.buttons}
                    </div>
                </div>
            </a>
        )
    }
}

export default Modal;