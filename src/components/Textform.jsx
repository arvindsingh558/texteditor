import React, { useState, useRef } from 'react'

function Textform() {
    const [text, setText] = useState('')
    const [inputArray, setInputArray] = useState([text])
    const index = useRef(0)

    const handleUndo = () => {
        if (index.current > 0) {
            index.current = index.current - 1
            setText(inputArray[index.current])
        }
    }

    const handleRedo = () => {
        if (index.current < inputArray.length - 1) {
            index.current = index.current + 1
            setText(inputArray[index.current])
        }
    }

    const handleRemoveSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    const handleClear = () => {
        setText("")
    }


    const handleCopy = () => {
        const box = document.getElementById('myBox')
        box.select()
        if (box.value.length > 0) {
            navigator.clipboard.writeText(box.value)
            alert("Text copied to clipboard")
        }
    }

    const handleLowercase = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleUppercase = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleOnChange = (e) => {
        const newValue = e.target.value
        setText(e.target.value)
        index.current = index.current + 1;
        setInputArray([...inputArray.slice(0, index.current), newValue])
    }

    return (
        <>
            <div className='w-full relative top-[78px] z-[1]'>
                <div className='w-full flex justify-center'>
                    <h1 className='text-indigo-600 text-2xl p-4 w-5/6 -ml-8'>Enter Text to Edit
                    </h1>
                </div>


                <div className='flex items-center justify-center mt-1'>
                    <textarea name="" rows={10} className=" rounded border-indigo-600 border mb-5 p-2 text-xl w-5/6" value={text} placeholder='Enter text here' id='myBox' onChange={handleOnChange} ></textarea>
                </div>
                <div className='flex w-full justify-center items-center'>
                    <div className='flex w-5/6 flex-wrap gap-1 md:gap-3 lg:justify-start justify-center'>

                        <button onClick={handleUppercase} className='bg-indigo-600 text-white px-2 py-1 rounded cursor-pointer hover:bg-indigo-500'>Uppercase</button>

                        <button onClick={handleLowercase} className='bg-indigo-600 text-white px-2 py-1 rounded cursor-pointer hover:bg-indigo-500'>Lowercase</button>

                        <button onClick={handleClear} className='bg-indigo-600 text-white px-2 py-1 rounded cursor-pointer hover:bg-indigo-500'>Clear</button>

                        <button onClick={handleRemoveSpace} className='bg-indigo-600 text-white px-2 py-1 rounded cursor-pointer hover:bg-indigo-500'>Remove Spaces</button>

                        <button onClick={handleCopy} className='bg-indigo-600 text-white px-2 py-1 rounded cursor-pointer hover:bg-indigo-500'>Copy</button>

                        <button onClick={handleUndo} className='bg-indigo-600 text-white px-2 py-1 rounded cursor-pointer hover:bg-indigo-500' disabled={index.current === 0}>Undo</button>

                        <button onClick={handleRedo} className='bg-indigo-600 text-white px-2 py-1 rounded cursor-pointer hover:bg-indigo-500' disabled={index.current === inputArray.length - 1}>Redo</button>
                    </div>
                </div>
                <div className='bg-white w-full flex justify-center items-center  '>
                    <div className='w-5/6 mt-4'>
                        <h1 className='text-3xl mb-2 text-indigo-600'>Summary</h1>
                        <p className='text-xl mb-2'>{text.split(" ").filter((e) => e.length != 0).length} word and {text.length} characters</p>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center '>
                    <div className='w-5/6 '>
                        <h1 className='text-3xl my-3 text-indigo-600'>Preview</h1>
                        <p className='text-xl'>{`${text.length == 0 ? "Write text to preview here" : text}`}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Textform
