import React from "react"
import Button from "../shared/Button"


const Navbar = () => {
    return (
        <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700">
            <div className="nleft flex items-center">
                <h1>BHARGAV SINGH DANU (THE CREATOR)
                </h1>
                <div className="links flex gap-14 ml-20">
                    {[ "home","boku","doku","noku"].map(
                        (elem, index) => (
                            <a
                                key={index}
                                href="#"
                                className="font-regular text-sm flex items-center gap-1 cursor-pointer "
                            >
                                {index === 1 && (
                                    <span
                                        style={{
                                            boxShadow: "0 0 0.25em #00FF19",
                                        }}
                                        className="inline-block w-1.5 h-1.5 rounded-full bg-green-400"
                                    ></span>
                                )}
                                {elem.length === 0 ? (
                                    <span className="w-[2px] h-7 bg-zinc-600"></span>
                                ) : (
                                    elem
                                )}
                            </a>
                        )
                    )}
                </div>
            </div>
            <Button />
        </div>
    )
}

export default Navbar