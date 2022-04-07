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

const Teamcontent = ({
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
    title: 'Team',
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

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                
                  <p className="text-sm mb-0">Lab Director</p>
              
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Flavio Esposito</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <p>Email : flavio.esposito@slu.edu</p>
                    <p>Office: ISE 234D 
3450 Lindell Blvd, St. Louis, MO 63103 </p>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                
                  <p className="text-sm mb-0">Lab Manager</p>
              
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Surya Annamdevula</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <p>Email : sannamdevula@slu.edu</p>
                    <p>Office: Ritter 115 
Saint Louis University, St. Louis, MO 63103 
</p>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                
                  <p className="text-sm mb-0">Instructor</p>
                
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">John Snow</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <p>Email : john.snow@slu.edu</p>
                    <p>Office: Ritter 116, Saint Louis University, St. Louis, MO 63103</p>
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

Teamcontent.propTypes = propTypes;
Teamcontent.defaultProps = defaultProps;

export default Teamcontent;