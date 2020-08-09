import React, { useState } from "react"
import styled from 'styled-components/macro'



export const Accortion = () => {
    const [showBrochues, setShowBrochues] = useState(false);
    const [showCertifications, setShowCertifications] = useState(false);
    const [showSpareparts, setShowSpareparts] = useState(false);
    const [showUserManuals, setShowUserManuals] = useState(false);


    return (
        <FolderBox>
            <h2 onClick={() => setShowBrochues(!showBrochues)}>Brochures</h2>
            {showBrochues &&
                <Collapse>

                </Collapse>

            }
        </FolderBox>

    )
}



