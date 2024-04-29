import { memo } from 'react';
import './loader.css';

function Loader(props: { isLoading?: boolean }) {

    // Props from the component
    const { isLoading } = props;

    // Render JSX elements
    return (
        <div className={`application-loader-wrapper ${isLoading ? '' : 'loaded'}`}>
            <div className="loader-wrapper">
                <div className="loader">
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
                <h4 className="loader-label">Sitback and relax! We&apos;re on it!!</h4>
            </div>
        </div>
    );
}

export default memo(Loader);
