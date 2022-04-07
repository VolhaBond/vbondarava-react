import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../Helpers/LoadingSpinner';
import Wrapper from './Wrapper';

const LoaderHOC = (HOCComponent, props) => {
    const Loader = (props) => {

        const [isNew, setIsNew] = useState(true);

        useEffect(() => {
            if (isNew) {
                setTimeout(() => {
                    setIsNew(false);
                }, 2000);
            }
            
        }, [isNew]);

        return (
            <Wrapper >
                {isNew ? <LoadingSpinner /> : <HOCComponent {...props} />}
            </Wrapper>
        )
    }
    return Loader;
}
export default LoaderHOC;
