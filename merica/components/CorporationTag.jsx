import React from 'react'

const CorporationTag = ({name, onClick, isSelected}) => {
    const buttonStyling = isSelected
        ? 'text-white bg-[#7238a2]'
        : 'text-#7238a2 border-[#7238a2] hover:border-white '
    return (
    <button
        className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${buttonStyling}`}
        onClick={() => (onClick(name))}
    >
        {name}
    </button>
  )
}

export default CorporationTag