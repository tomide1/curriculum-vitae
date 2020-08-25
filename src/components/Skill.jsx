import React from 'react';

export default function Skill(props) {
    const { skillName } = props;

    return(
        <span className="inline-block rounded-lg px-4 bg-gray-500 hover:bg-gray-600 border border-gray-500 hover:border-gray-600 text-black-200 text-center text-sm mx-2 my-1">
            {skillName}
        </span>
    )
}
