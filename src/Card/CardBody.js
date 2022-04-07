import './Card.css';
import Wrapper from '../Helpers/Wrapper';

const CardBody = props => {

    //onChange description & title
    const handleObjChange = event => {
        props.onChange(event);
    }

    return (
        <Wrapper >

            {props.viewMode ?
                <div>
                    <p>{props.card.title}</p>
                    <hr />
                    <p>{props.card.description}</p>
                </div>
                :
                <div>
                    <p><input type="text" updatedproperty="title" className="inputTextBox" value={props.updatedCard.title} onChange={handleObjChange} /></p>
                    <hr />
                    <p><input type="text" updatedproperty="description" className="inputTextBox" value={props.updatedCard.description} onChange={handleObjChange} /></p>
                </div>
            }

        </Wrapper>
    );
}

export default CardBody;
