import {useContext} from 'react';
import CardCheckBox from './CardCheckBox';
import './Card.css';
import { VscEdit, VscSave, VscClose } from 'react-icons/vsc';
import CardCtx from '../context/card-context';

const CardHeader = props => {

    const ctx = useContext(CardCtx);

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

        if (ctx.viewModeOnlyChecked) {
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
        <>
            {header()}
        </>
    );
}

export default CardHeader;
