import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../Helpers/LoadingSpinner';

const LoaderHOC = HOCComponent =>

    function Loader(props) {
        const [isNew, setIsNew] = useState(true);

        useEffect(() => {
            if (isNew) {
                setTimeout(() => {
                    setIsNew(false);
                }, 2000);
            }
        }, [isNew]);

        return (
            <>
                {isNew ? <LoadingSpinner /> : <HOCComponent {...props} />}
            </>
        )

    }
export default LoaderHOC;
