import CardCheckBox from './CardCheckBox';
import './Card.css';
import { VscEdit, VscSave, VscClose } from 'react-icons/vsc';

const CardHeader = props => {

    const cardSaveChangesHandler = () => {
        props.onUpdate();
    }

    const cardEditHandler = () => {
        props.onCheck(false);
        props.onSetViewMode(false);
    }

    const cardCheckHandler = checked => {
        props.onCheck(checked);
    }

    const cardCloseHandler = () => {
        props.onCheck(false);
        props.onSetViewMode(true);
        props.onClose();
    }

    const header = () => {
        const checkBoxContent = (<div>
            <CardCheckBox checked={props.checked} onCheck={cardCheckHandler} />
        </div>);

        if (props.viewModeOnly) {
            return <div>
                {checkBoxContent}
            </div>
        } else {
            if (props.viewMode) {
                return <div>
                    <VscEdit className="icon" onClick={cardEditHandler} />
                    {checkBoxContent}
                </div>
            }
            return <div className="icon">
                <VscSave onClick={cardSaveChangesHandler} />
                <VscClose onClick={cardCloseHandler} />
            </div>
        }
    }

    return (
        < >
            {header()}
        </>
    );
}

export default CardHeader;
