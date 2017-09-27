import React from 'react'

class Resume extends React.Component {
    render() {
        const sections = this.props.content.edges.map((edge) => {
            return <ResumeSection innerHTML={edge.node.html} title={edge.node.frontmatter.title} />
        });

        return <div className='resume-sections-container'>
            {sections}
        </div>
    }
}

class ResumeSection extends React.Component {
    render() {
        return <div classnName='resume-section'>
            <h3 className='resume-section-title'>{this.props.title}</h3>
            <div className='resume-section-content' dangerouslySetInnerHTML={{ __html: this.props.innerHTML }}></div>
        </div>
        
    }
}

export default Resume