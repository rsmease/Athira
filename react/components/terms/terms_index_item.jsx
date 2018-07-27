import React from 'react';
import * as Typicon from 'react-icons/lib/ti';
import Fade from 'react-reveal/Fade';

class TermsIndexItem extends React.Component {
    render() {
        return (
            <Fade bottom cascade>
                <div className="terms-index-item__container">
                    <h4 className="terms-index-item__header-4">
                        "{this.props.title}"
                    </h4>
                    <div className="terms-index-item__description" dangerouslySetInnerHTML={
                        { __html: this.props.text }
                    } />
                </div>
            </Fade>
        );
    }
}

export default TermsIndexItem;