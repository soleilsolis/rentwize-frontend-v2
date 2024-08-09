import React from "react"
import { ClassContext } from "../contexts/ClassContext"

const Section = ({ childrenClassName, children }) =>{
    return(<section>
        <ClassContext.Provider value={childrenClassName}>
            {children}
        </ClassContext.Provider>
    </section>)
}

export default Section