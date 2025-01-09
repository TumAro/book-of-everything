import React from 'react'

interface PropsType {
    id: string;
}

const ChapterCard = (props:PropsType) => {
  return (
    <div className="card card-bordered bg-base-100 border-2 border-stone-400">
        <div className="card-body">
            <h1 className="card-title">CHAPTER {props.id}</h1>
            <p>story here</p>
            <div className="card-actions justify-end">
            </div>
        </div>
    </div>
  )
}

export default ChapterCard