import React, {Component} from 'react';

const experiences = [
    {
        title: 'Web développeuse ReactJS, PHP, Symfony',
        heading: 'Intelitec Solution',
        description: 'lorem',
        dates: 'Mars 2019 - présent'
    },

    {
        title: 'Web développeuse ReactJS, PHP, Symfony',
        heading: 'Intelitec Solution',
        description: 'lorem',
        dates: 'Mars 2019 - présent'
    },

    {
        title: 'Web développeuse ReactJS, PHP, Symfony',
        heading: 'Intelitec Solution',
        description: 'lorem',
        dates: 'Mars 2019 - présent'
    },
]

const Exp = ({exp}) => {
    return (
        
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">{exp.title}</h3>
            <div className="subheading mb-3">{exp.heading}</div>
            <p>{exp.description}</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">{exp.dates}</span>
          </div>
        </div>
        
    )
}

export default class Experience extends Component {
render() {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
    <div className="w-100">
    {experiences.map(exp => {
        return(<Exp exp={exp}/>)
    })}
    </div>
    </section> 
  )

}
}