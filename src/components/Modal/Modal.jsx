import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function MyModal(props) {
    
    const {id, title, description, link, github, alt, tools1, tools2, onClose, show, handleClose } = props
    // console.log('id', id);
    // console.log('description', description);
    // return (
    //         <div className="modalBackdrop">
    //             <div className="modalContainer">
    //                 <h3 className="modal-title">{title}</h3>
    //                 <img src={require(`../../assets/imgs/${id}.jpg`).default} alt={alt} />
    //                 <h4>{description}</h4>
    //                 <h4>Built with: {tools1}</h4>
    //                 <h4>{tools2}</h4>
    //                 <h4>Github:<a href={github}>{github}</a></h4>
    //             <button type="button"  onClick={ onClose }>
    //                 Close this modal
    //             </button>
    //             </div>
    //         </div>
//     // )
//     const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

  return (
    //   <Modal >
    // <>
    <Modal show={show}>
        <Modal.Dialog>
            <Modal.Header closeButton>
            <Modal.Title>Modal Loads {props.id} </Modal.Title>
            </Modal.Header>

            <Modal.Body>
            {console.log('modal trigger' + props.id)}
                <p>Modal body text goes here.</p>
            </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
       </Modal>
    //    </>
  );
// }

}

export default MyModal;

