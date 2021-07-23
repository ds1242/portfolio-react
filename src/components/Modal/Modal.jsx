import React from 'react';


function Modal(props) {

    const {id, title, description, link, github, alt, tools1, tools2, onClose } = props
    // console.log('id', id);
    // console.log('description', description);
    return (
            <div className="modalBackdrop">
                <div className="modalContainer">
                    <h3 className="modal-title">{title}</h3>
                    <img src={require(`../../assets/imgs/${id}.jpg`).default} alt={alt} />
                    <h4>{description}</h4>
                    <h4>Built with: {tools1}</h4>
                    <h4>{tools2}</h4>
                    <h4>Github:<a href={github}>{github}</a></h4>
                <button type="button"  onClick={ onClose }>
                    Close this modal
                </button>
                </div>
            </div>
    )

}

export default Modal;

