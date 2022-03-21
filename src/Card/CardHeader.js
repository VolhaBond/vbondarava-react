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

    const checkViewModeCardHandler = () => {
        props.onCheckViewModeOnly();
    }

    const header = () => {
        const checkBoxContent = (<div>
            <h2>
                <CardCheckBox checked={props.checked} onCheck={cardCheckHandler} />
            </h2>
        </div>);

        if (props.viewModeOnly) {
            return <div>
                {checkBoxContent}
            </div>
        } else {
            if (props.viewMode) {
                return <div>
                    <h2>
                        <VscEdit className="icon" onClick={cardEditHandler} />
                        {checkBoxContent}
                    </h2>
                </div>
            }
            return < div >
                <h2>
                    <div className="icon">
                        <VscSave onClick={cardSaveChangesHandler} />
                        <VscClose onClick={cardCloseHandler} />
                    </div>

                </h2>
            </div >
        }
    }

    return (
        <div>
            {header()}
        </div>
    );
}

export default CardHeader;
