import React, { useState } from "react"
import styled from 'styled-components/macro'
import foldericon from "..//images/foldericon.png"


export const Accordion = () => {
    const [showBrochues, setShowBrochues] = useState(false);
    const [showCertifications, setShowCertifications] = useState(false);
    const [showSpareparts, setShowSpareparts] = useState(false);
    const [showUserManuals, setShowUserManuals] = useState(false);
    /*  const [showUserManualsBus, setShowUserManualsBus] = useState(false);
     const [showUserManualsMachines, setShowUserManualsMachines] = useState(false); */

    return (
        <FolderBox>
            <TopLabel onClick={() => setShowBrochues(!showBrochues)}>Brochures</TopLabel>
            {showBrochues &&
                <Collapse>
                    <CollapseItem href="https://dafomiddleeast.sharepoint.com/sites/download/Shared%20Documents/Forms/AllItems.aspx?originalPath=aHR0cHM6Ly9kYWZvbWlkZGxlZWFzdC5zaGFyZXBvaW50LmNvbS86Zjovcy9kb3dubG9hZC9FazdGSm03ZE1EeEVnZURrc1ZwX21ud0JWdnotMmROWldOdE5xUVpzcVQzVElnP3J0aW1lPTdSbUh5enM4MkVn&id=%2Fsites%2Fdownload%2FShared%20Documents%2FDafo%20files%2FBrochures%2FBus%20%26%20Vehicles%2FDafo%20VFSS%5Ffor%20Buses%2Epdf&parent=%2Fsites%2Fdownload%2FShared%20Documents%2FDafo%20files%2FBrochures%2FBus%20%26%20Vehicles">  <h2><Foldericon src={foldericon} alt="Dafo buses" />Dafo VFSS_for Buses</h2>
                    </CollapseItem>
                    <CollapseItem href="https://dafomiddleeast.sharepoint.com/sites/download/Shared%20Documents/Forms/AllItems.aspx?originalPath=aHR0cHM6Ly9kYWZvbWlkZGxlZWFzdC5zaGFyZXBvaW50LmNvbS86Zjovcy9kb3dubG9hZC9FazdGSm03ZE1EeEVnZURrc1ZwX21ud0JWdnotMmROWldOdE5xUVpzcVQzVElnP3J0aW1lPTdSbUh5enM4MkVn&id=%2Fsites%2Fdownload%2FShared%20Documents%2FDafo%20files%2FBrochures%2FBus%20%26%20Vehicles%2FDafo%20Vulcan%20VFSS%5Ffor%20Buses%2Epdf&parent=%2Fsites%2Fdownload%2FShared%20Documents%2FDafo%20files%2FBrochures%2FBus%20%26%20Vehicles"> <h2> <Foldericon src={foldericon} alt="Dafo buses" />Dafo Vulcan VFSS_for Buses</h2>
                    </CollapseItem>
                    <CollapseItem href="https://dafomiddleeast.sharepoint.com/sites/download/Shared%20Documents/Forms/AllItems.aspx?originalPath=aHR0cHM6Ly9kYWZvbWlkZGxlZWFzdC5zaGFyZXBvaW50LmNvbS86Zjovcy9kb3dubG9hZC9FazdGSm03ZE1EeEVnZURrc1ZwX21ud0JWdnotMmROWldOdE5xUVpzcVQzVElnP3J0aW1lPTdSbUh5enM4MkVn&id=%2Fsites%2Fdownload%2FShared%20Documents%2FDafo%20files%2FBrochures%2FContainer%20handling%20machines%2FDafo%20VFSS%5Ffor%20Container%20handling%20machines%2Epdf&parent=%2Fsites%2Fdownload%2FShared%20Documents%2FDafo%20files%2FBrochures%2FContainer%20handling%20machines">  <h2><Foldericon src={foldericon} alt="Dafo Container handling machines" />Container handling machines</h2>
                    </CollapseItem >
                    <CollapseItem a href="https://dafomiddleeast.sharepoint.com/sites/download/Shared%20Documents/Forms/AllItems.aspx?originalPath=aHR0cHM6Ly9kYWZvbWlkZGxlZWFzdC5zaGFyZXBvaW50LmNvbS86Zjovcy9kb3dubG9hZC9FazdGSm03ZE1EeEVnZURrc1ZwX21ud0JWdnotMmROWldOdE5xUVpzcVQzVElnP3J0aW1lPTdSbUh5enM4MkVn&id=%2Fsites%2Fdownload%2FShared%20Documents%2FDafo%20files%2FBrochures%2FDafo%20company%20presentation%2Epdf&parent=%2Fsites%2Fdownload%2FShared%20Documents%2FDafo%20files%2FBrochures">  <h2><Foldericon src={foldericon} alt="Dafo Company Presentation" />Dafo Company Presentation</h2>
                    </CollapseItem >
                </Collapse >
            }

            <TopLabel onClick={() => setShowCertifications(!showCertifications)}>Certifications</TopLabel>
            {
                showCertifications &&
                <Collapse>
                    <CollapseItem href="https://dafomiddleeast.sharepoint.com/sites/download/Shared%20Documents/Forms/AllItems.aspx?originalPath=aHR0cHM6Ly9kYWZvbWlkZGxlZWFzdC5zaGFyZXBvaW50LmNvbS86Zjovcy9kb3dubG9hZC9FazdGSm03ZE1EeEVnZURrc1ZwX21ud0JWdnotMmROWldOdE5xUVpzcVQzVElnP3J0aW1lPTdSbUh5enM4MkVn&id=%2Fsites%2Fdownload%2FShared%20Documents%2FDafo%20files%2FCertifications%2FDafo%20Certifications%20and%20Approvals%2Epdf&parent=%2Fsites%2Fdownload%2FShared%20Documents%2FDafo%20files%2FCertifications">  <h2><Foldericon src={foldericon} alt="Dafo buses" />Dafo Certifications and Approvals</h2>
                    </CollapseItem>
                </Collapse>
            }
            <TopLabel onClick={() => setShowSpareparts(!showSpareparts)}>Spare Parts Catalouge</TopLabel>
            {
                showSpareparts &&
                <Collapse>
                    <CollapseItem href="https://dafomiddleeast.sharepoint.com/sites/download/Shared%20Documents/Forms/AllItems.aspx?originalPath=aHR0cHM6Ly9kYWZvbWlkZGxlZWFzdC5zaGFyZXBvaW50LmNvbS86Zjovcy9kb3dubG9hZC9FazdGSm03ZE1EeEVnZURrc1ZwX21ud0JWdnotMmROWldOdE5xUVpzcVQzVElnP3J0aW1lPTdSbUh5enM4MkVn&id=%2Fsites%2Fdownload%2FShared%20Documents%2FDafo%20files%2FSpare%20parts%2FDafo%5FVehicle%5FSpare%5FPart%5FCatalogue%2Epdf&parent=%2Fsites%2Fdownload%2FShared%20Documents%2FDafo%20files%2FSpare%20parts">  <h2><Foldericon src={foldericon} alt="Dafo buses" />Dafo Vehicle Spare Parts Catalouge</h2>
                    </CollapseItem>
                </Collapse>
            }
            <TopLabel onClick={() => setShowUserManuals(!showUserManuals)}>User Manuals</TopLabel>
            {
                showUserManuals &&
                <Collapse>
                    <h2>Buses</h2>
                    <CollapseItem href="https://dafomiddleeast.sharepoint.com/sites/download/Shared%20Documents/Forms/AllItems.aspx?originalPath=aHR0cHM6Ly9kYWZvbWlkZGxlZWFzdC5zaGFyZXBvaW50LmNvbS86Zjovcy9kb3dubG9hZC9FazdGSm03ZE1EeEVnZURrc1ZwX21ud0JWdnotMmROWldOdE5xUVpzcVQzVElnP3J0aW1lPWdpSUxUanM4MkVn&id=%2Fsites%2Fdownload%2FShared%20Documents%2FDafo%20files%2FUser%20manuals%2FUser%20manuals%20for%20bus%2F55%2D9116%2D02%5FBus%2DManual%5Ffor%5FSV%2DK%5FSV%2DV%2Epdf&parent=%2Fsites%2Fdownload%2FShared%20Documents%2FDafo%20files%2FUser%20manuals%2FUser%20manuals%20for%20bus">  <h2><Foldericon src={foldericon} alt="Dafo buses" />Bus Manual or SV-V and SV-K</h2>
                    </CollapseItem>

                    <CollapseItem a href="https://dafomiddleeast.sharepoint.com/sites/download/Shared%20Documents/Forms/AllItems.aspx?originalPath=aHR0cHM6Ly9kYWZvbWlkZGxlZWFzdC5zaGFyZXBvaW50LmNvbS86Zjovcy9kb3dubG9hZC9FazdGSm03ZE1EeEVnZURrc1ZwX21ud0JWdnotMmROWldOdE5xUVpzcVQzVElnP3J0aW1lPWdpSUxUanM4MkVn&id=%2Fsites%2Fdownload%2FShared%20Documents%2FDafo%20files%2FUser%20manuals%2FUser%20manuals%20for%20bus%2F55%2D9116%2D03%5FCB%2D02%5FManual%2Epdf&parent=%2Fsites%2Fdownload%2FShared%20Documents%2FDafo%20files%2FUser%20manuals%2FUser%20manuals%20for%20bus"> <h2><Foldericon src={foldericon} alt="Dafo buses" /> CB-02 Manual</h2>
                    </CollapseItem>
                    <h2>Machines</h2>
                    <CollapseItem a href="https://dafomiddleeast.sharepoint.com/sites/download/Shared%20Documents/Forms/AllItems.aspx?originalPath=aHR0cHM6Ly9kYWZvbWlkZGxlZWFzdC5zaGFyZXBvaW50LmNvbS86Zjovcy9kb3dubG9hZC9FazdGSm03ZE1EeEVnZURrc1ZwX21ud0JWdnotMmROWldOdE5xUVpzcVQzVElnP3J0aW1lPWdpSUxUanM4MkVn&id=%2Fsites%2Fdownload%2FShared%20Documents%2FDafo%20files%2FUser%20manuals%2FUser%20manuals%20for%20machines%2F55%2D9116%2D00%5FSV%2DK%5FManual%2Epdf&parent=%2Fsites%2Fdownload%2FShared%20Documents%2FDafo%20files%2FUser%20manuals%2FUser%20manuals%20for%20machines"> <h2> <Foldericon src={foldericon} alt="Dafo Machines" />SV-K Manual</h2>
                    </CollapseItem>
                    <CollapseItem a href="https://dafomiddleeast.sharepoint.com/sites/download/Shared%20Documents/Forms/AllItems.aspx?originalPath=aHR0cHM6Ly9kYWZvbWlkZGxlZWFzdC5zaGFyZXBvaW50LmNvbS86Zjovcy9kb3dubG9hZC9FazdGSm03ZE1EeEVnZURrc1ZwX21ud0JWdnotMmROWldOdE5xUVpzcVQzVElnP3J0aW1lPWdpSUxUanM4MkVn&id=%2Fsites%2Fdownload%2FShared%20Documents%2FDafo%20files%2FUser%20manuals%2FUser%20manuals%20for%20machines%2F55%2D9116%2D01%5FCV%2D01%5FCK%5FManual%2Epdf&parent=%2Fsites%2Fdownload%2FShared%20Documents%2FDafo%20files%2FUser%20manuals%2FUser%20manuals%20for%20machines"> <h2><Foldericon src={foldericon} alt="Dafo Machines" /> CV-01/CK Manual</h2>
                    </CollapseItem>
                </Collapse>
            }
        </FolderBox >

    )
}



const FolderBox = styled.main`
width:100%;
`;

const TopLabel = styled.h2`
transition: transform .2s;
font-size:1.3rem;
`;

const Collapse = styled.section`
width:80%;
margin:0 auto;
transition: transform 2s;
`;

const CollapseItem = styled.a`
display:inline;
list-style: none;
text-decoration: none;
color:#1c1c1c;
`;
const Foldericon = styled.img`
width:30px;
`