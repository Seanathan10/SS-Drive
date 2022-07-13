import React from 'react'
import { useState } from 'react'

import './Popup.css'

export default function Popup() {
    const [ Popup, SetPopup ] = useState( false );

    function StateToggler() {
        SetPopup( !Popup );
    }

    return (
        <div>
            
        </div>
    )
}
