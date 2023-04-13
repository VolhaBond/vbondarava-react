import { useDispatch, useSelector } from 'react-redux';
import { cardActions } from '../store/card';

const Settings = props => {
    const dispatch = useDispatch();
    const viewModeOnlyChecked = useSelector(state => state.card.viewModeOnlyChecked);

    const setViewModeHandler = () => {
        dispatch(cardActions.setViewModeOnlyHandler());
    }

    return (
        <div>
            <h1 className="header">
                Settings.
            </h1>
            <label className="icon_left" > <input type="checkbox" id="card_onlyviewmode" checked={viewModeOnlyChecked} onChange={setViewModeHandler} />Только просмотр</label>
        </div>
    );
}

export default Settings;