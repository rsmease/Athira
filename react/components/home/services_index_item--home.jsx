import React from 'react';
import * as Material from 'react-icons/lib/md';
import { withRouter, Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class ServicesIndexItem extends React.Component {

    redirect(id) {
        this.props.history.push(`/services#service-${id}`)
    }

    render() {
        console.log(this.props)
        return (
            <Fade bottom exit opposite>
                <Link to={`/services#service-${this.props.service.id}`}>
                    <div className="services-index-item__container--home">
                        <Material.MdRemoveCircle className="services-index-item__icon--home" />
                        <h3 className="services-index-item__header-2--home">{this.props.service.name}</h3>
                        <h3 className="services-index-item__header-3--home">{this.props.service.short_description}</h3>
                    </div>
                </Link>
            </Fade>
        );
    }
}

export default withRouter(ServicesIndexItem);
