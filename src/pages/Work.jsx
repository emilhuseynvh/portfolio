import React from 'react'
import WorkCard from '../Component/Card/WorkCard'
import { project } from '../data/project';
console.log(project);


const Work = () => {
  return (
    <div className='container mx-auto flex gap-4'>
        {project.map((item, i) =>  <WorkCard key={i} item={item} /> )}
    </div>
  )
}

export default Work