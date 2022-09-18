import React from "react";

function Modal({ onClose, currentPhoto}) {
    const {name,website, languages, github, index} = currentPhoto;
	return (
		<div className="modalBackdrop">
			<div className="modalContainer">
				<h3 className="modalTitle">{name}</h3>
				<img src={require(`../../assets/screenshots/${index}.jpg`)} alt="current category" />
				<p>{languages}</p>
				<button onClick={onClose} type="button">Close this modal</button>
			</div>
		</div>
	);
}

export default Modal;
