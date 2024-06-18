import { useState } from 'react'
import './App.css'
import { Checkbox } from '@mui/material'
import { InspectorPage } from './pages/InspectorPage';
import { GeneralManagerPage } from './pages/GeneralManagerPage';
import { WebEngineerPage } from './pages/WebEngineerPage';
import { ManagerPage } from './pages/ManagerPage';
import { ImageViewer } from './pages/ImageViewer';
import passport1 from "./assets/passport1.jpg"
import { ScanCheckPage } from './pages/ScanCheckScreen';
import { PhotoCheckPage } from './pages/PhotoCheckScreen';
import { StartPage } from './pages/StartScreen';
import { SelectPage } from './pages/SelectPage';
import { ProjectsPage } from './pages/ProjectsPage';
import {BaseAppBar} from './BaseAppBar';

const pageToRole = {
  inspector: <InspectorPage/>,
  "general-manager": <GeneralManagerPage/>,
  manager: <ManagerPage/>,
  "web-engineer": <WebEngineerPage/>,
  "projects": <ProjectsPage/>,
}

function App() {
  // Выбранный кабинет
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <div style={{width: "100%"}}>
      
      <BaseAppBar
        onSelectRole={(role) => setSelectedRole(role)}
      />
      {selectedRole && (
        <div style={{display: 'flex', flexDirection: "column", width: "100%", alignItems: "center", height: "100%", padding: "15px"}}>
          {pageToRole[selectedRole]}
        </div>
      )}
      


         {/* <div className="buttons" style={{display: "flex", flexDirection: "column"}}>
             <Button variant="contained" style={{backgroundColor: "black", marginBottom: "10px", padding: "10px"}}>Проверяющий</Button>
             <Button variant="contained" style={{backgroundColor: "black", marginBottom: "10px", padding: "10px"}}>Главный менеджер</Button>
             <Button variant="contained" style={{backgroundColor: "black", marginBottom: "10px", padding: "10px"}}>Менеджер</Button>
             <Button variant="contained" style={{backgroundColor: "black", marginBottom: "10px", padding: "10px"}}>Веб-инженер</Button>
         </div>
       
       <PhotoCheckPage/>
       <StartPage/>
       <InspectorPage/>
       <GeneralManagerPage/>
       <SelectPage/>
       <WebEngineerPage/>
       <ManagerPage/>
         <div style={{display: "flex", height: "75vh"}}>
           <ImageViewer
             src={passport1}
           />
         </div> */}
    </div>
  )
}

export default App
