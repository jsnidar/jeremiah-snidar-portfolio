import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

export class Experience extends Component {

    jobs = [
        {
            company: 'Savvas Learning',
            title: 'Software Engineer, Associate Software Engineer',
            dates: 'June 2022 - Present',
            accomplishments: [
                'Co-led full-stack team updating the administrator, student and teacher user interfaces and adding data visualizations.',
                'Independently transformed epic requirements into structured stories, highlighting and clarifying all necessary dependencies for the majority of the epics the team completed.',
                'Engineered prototypes for new functionalities early in the development process, shortening the feedback loop with UX and product owners, while creating a reliable foundation for additional development.',
                'Collaborated with UX designers and product-owners to gather insights, inform design decisions, and implement features that enhance the user experience for educators and students.',
                'Owned projects end-to-end, from ideation to implementation, impacting user growth and engagement.',
                'Led the development of carving out microservices from monolithic applications, improving performance and scalability.',
                'Improved team efficiency by resolving memory leaks, optimizing code, and implementing responsive design features.',
                'Mentored team members, contributing to a collaborative and growth-oriented team culture.'
            ]
        }
    ];

    skills = [
        {
            type: 'Frontend',
            examples: ['Angular', 'React', 'Redux', 'jQuery', 'Stencil', 'HTML5', 'CSS3']
        },
        {
            type: 'Backend',
            examples: ['Java', 'Spring', 'SpringBoot', 'Apache Tomcat', 'Ruby', 'Rails', 'Sinatra', 'PostgreSQL']
        },
        {
            type: 'Data Transfer',
            examples: ['REST', 'Apollo GraphQL', 'JSON', 'Axios', 'Undici']
        },
        {
            type: 'DevOps',
            examples: ['AWS', 'Docker', 'Jenkins', 'S3', 'EC2', 'CodeBuild', 'CodePipeline', 'Step Functions']
        }
    ]

    render() {
        return (
            <>
                <Row className="pb-4">
                    <h2>Experience</h2>
                </Row>
                <Row className="pb-4">
                    <h3>Technical Skills</h3>
                    <Col xs={12}>
                        <ul className="ps-4 fs-4">
                            {this.skills.map((skill, index) => {
                                return <li key={index}>
                                    <span >{skill.type}: </span>
                                    <span className="fw-lighter">{skill.examples.join(', ')}</span>
                                </li>
                            })}
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h3>Professional Experience</h3>
                        {this.jobs.map((job, index) => {
                            return <section key={index} className='pb-4'>
                                <h4 className="job-title">
                                    <span>{job.company}</span>
                                    <span className="fw-lighter fs-4">{job.dates}</span>
                                </h4>
                                <h5 className="pb-3">{job.title}</h5>
                                <ul>
                                    {job.accomplishments.map((accomplishment, index) => 
                                        <li key={index}>
                                        <span className="fs-5">{accomplishment}</span>
                                        </li>)}
                                </ul>
                            </section>
                        })}
                    </Col>
                </Row>
            </>
        );
    }

}

export default Experience