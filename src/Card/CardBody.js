import './Card.css';

const CardBody = props => {

    //onChange description & title
    const handleObjChange = event => {
        props.onChange(event);
    }

    return (
        <div >

            {props.viewMode ?
                <div>
                    <p>{props.card.title}</p>
                    <hr />
                    <p>{props.card.description}</p>
                </div>
                :
                <div>
                    <input type="text" updatedproperty="title" className="inputTextBox" value={props.updatedCard.title} onChange={handleObjChange} />
                    <hr />
                    <p><input type="text" updatedproperty="description" className="inputTextBox" value={props.updatedCard.description} onChange={handleObjChange} /></p>
                </div>
            }
        </div>
    );
}

export default CardBody;