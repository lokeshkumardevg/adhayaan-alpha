import React from 'react'
import './Input.css'
const Input = () => {
    const [name, setName] = React.useState("");
    return (
        <div>
            <div className="div-f">
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  style={{ zIndex: "1" }}
                />
                <div
                  className={name.length === 0 ? "labelline" : "labelline fix"}
                >
                  Name of Applicant*
                </div>
              </div>
        </div>
    )
}

export default Input
