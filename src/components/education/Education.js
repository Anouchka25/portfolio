import React, {Component} from 'react';

export default class Experience extends Component {
render() {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
    <div className="w-100">
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">University of Colorado Boulder</h3>
            <div className="subheading mb-3">Bachelor of Science</div>
            <div>Computer Science - Web Development Track</div>
            <p>GPA: 3.23</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">August 2006 - May 2010</span>
          </div>
        </div>
     </div>
     </section>
    
  )

}
}