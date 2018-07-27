import React from 'react';
import { withRouter } from 'react-router-dom';

import TermsIndexItem from './terms_index_item';

class TermsIndex extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        if (!this.props.location.hash.length) {
            window.scroll(0, 0);
        }
    }

    componentDidMount() {
        this.props.getAllTerms();
    }

    renderTerms() {
        if (this.props.terms && this.props.terms.length) {
            return (
                <React.Fragment>
                    {this.props.terms.map(term => {
                        return <TermsIndexItem key={Math.random()} title={term.title} text={term.text} />
                    })}
                </React.Fragment>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="main__meta-container">
                    <div className="terms-index__container">
                        {this.renderTerms()}
                    </div>
                </section>
            </React.Fragment >
        )
    }
}

export default withRouter(TermsIndex);