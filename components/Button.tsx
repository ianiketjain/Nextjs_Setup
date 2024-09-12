import React from 'react'

const Button = ({ onClick, type, label,className }: any) => {
  return (
    <div>
      {type === 'DARK' && (
        <button
          onClick={() => {
            onClick()
          }}
          className="py-4 px-5 w-full h-fit font-bold text-base text-white btnbackground leading-3 rounded-3xl shadow-md"
        >
          {label}
        </button>
      )}
      {type === 'LIGHT' && (
        <button
          onClick={() => {
            onClick()
          }}
          className="py-4 px-5 font-bold text-base text-primarytext border border-primarytext leading-3 rounded-3xl bg-white gap-2 w-full h-fit shadow-ms"
        >
          {label}
        </button>
      )}
      {type === 'TEXT' && (
        <button
          onClick={() => {
            onClick()
          }}
          className="px-20 py-2 font-bold text-base border border-primarytext leading-3 rounded-3xl gap-2 w-full h-fit"
        >
          <span className="flex items-center justify-around">
            <p className="text-xs leading-5 font-sans">I have an account</p>
            <p className="text-base font-bold text-primarytext">Login</p>
          </span>
        </button>
      )}
        {type === 'MYBTN' && (
        <button
          onClick={() => {
            onClick()
          }}
          className={`${className} w-full h-fit font-bold text-base text-white btnbackground leading-3 rounded-3xl shadow-md`}
        >
          {label}
        </button>
      )}
    </div>
  )
}

export default Button
