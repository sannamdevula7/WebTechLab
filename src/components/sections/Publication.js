import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Publication = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Publications',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>


          <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  Mobile devices supporting the "Internet of Things" (IoT), often have limited capabilities in computation, battery energy, and storage space, especially to support resource-intensive applications involving virtual reality (VR), augmented reality (AR), multimedia delivery and artificial...</p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Flavio Esposito</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="http://arxiv.org/abs/1806.06191" >Edge Cloud Offloading Algorithms: Issues, Methods, and Perspectives</a>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  Information-centric networking (ICN) replaces the widely used host-centric networking paradigm in communication networks (e.g., Internet and mobile ad hoc networks) with an information-centric paradigm, which prioritizes the delivery of named content, oblivious of the contents' origi...</p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Reza Tourani</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://doi.org/10.1109/COMST.2017.2749508">Security, Privacy, and Access Control in Information-Centric Networking: A Survey</a>
                  </span>
                </div>
              </div>
            </div>


            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  The Network Function Virtualization paradigm is attracting the interest of service providers, that may greatly benefit from its flexibility and scalability properties. However, the diversity of possible orchestrated services, rises the necessity of adopting specific orchestration strategies... </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Flavio Esposito</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="http://arxiv.org/abs/1803.05499">A Distributed Architecture for Edge Service Orchestration with Guarantees</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Publication.propTypes = propTypes;
Publication.defaultProps = defaultProps;

export default Publication;