// General styles
const paddingX = '10'
const paddingY = '3'
const inputBackgroundColor = 'bg-white'
const border = 'border-b-[2px] border-t-[2px] border-s-[2px] border-e-[2px]'
const borderColor = 'border-indigo-700'
const rounded = 'rounded-full'


const generalStyles = `placeholder:text-gray-400 px-${paddingX} py-${paddingY} ${inputBackgroundColor} ${border} ${borderColor} ${rounded}`
const stylesFocus = `focus:outline-0 focus:ring-0 
    focus:${border} 
    focus:bg-blue-100
    focus:border-s-indigo-700 focus:border-t-indigo-700 focus:border-e-indigo-700 focus:border-b-indigo-700`
const stylesVisibleFocus = `focus-visible:outline-0 focus-visible:ring-0 
    focus-visible:${border} 
    focus-visible:bg-blue-100
    focus-visible:border-s-indigo-700 focus-visible:border-t-indigo-700 focus-visible:border-e-indigo-700 focus-visible:border-b-indigo-700`

// const invalidBorder =`invalid:bg-red-100 invalid:border-s-transparent
//                 invalid:border-t-transparent invalid:border-e-transparent invalid:border-b-red-500`

export const stylesInputField = `${generalStyles} ${stylesFocus} ${stylesVisibleFocus}`
//export const stylesInputField = `${generalStyles} ${stylesFocus} ${stylesVisibleFocus} ${invalidBorder}`










// // General styles
// const paddingX = '5'
// const paddingY = '3'
// const inputBackgroundColor = 'bg-blue-50'
// const border = 'border-b-[2px] border-t-none border-y-none'
// const borderColor = 'border-x-blue-50 border-t-white'
// const rounded = 'rounded-none'
//
// const backgroundColorFocus = 'bg-blue-100'
//
//
// const generalStyles = `placeholder:text-gray-400 px-${paddingX} py-${paddingY} ${inputBackgroundColor} ${border} ${borderColor} ${rounded} placeholder:text-red`
// const stylesFocus = `focus:outline-0 focus:ring-0
//     focus:${border}
//     focus:${backgroundColorFocus}
//     focus:border-s-transparent focus:border-t-transparent focus:border-e-transparent focus:border-b-indigo-700`
// const stylesVisibleFocus = `focus-visible:outline-0 focus-visible:ring-0
//     focus-visible:${border}
//     focus-visible:${backgroundColorFocus}
//     focus-visible:border-s-transparent focus-visible:border-t-transparent focus-visible:border-e-transparent focus-visible:border-b-indigo-700`
//
// const invalidBorder =`invalid:bg-red-100 invalid:border-s-transparent
//                 invalid:border-t-transparent invalid:border-e-transparent invalid:border-b-red-500`
//
// export const stylesInputField = `${generalStyles} ${stylesFocus} ${stylesVisibleFocus} ${invalidBorder}`
//
//
