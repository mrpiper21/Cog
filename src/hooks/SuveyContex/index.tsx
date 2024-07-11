// import React from "react"
// import { SurveyData } from "../../component/Registeration/SurveyItem";

// interface SuveyContexProps {
//     setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
// };

// export const useSurveyContext = React.createContext<SuveyContexProps | undefined>(undefined);

// export const SurveyConetext: React.FC<{ children: React.ReactNode }> = ({children})=>{
//     const handleWhyDriveGlopilots = (id: number) => {
//         SurveyData.WhyDriveGlopilots.forEach((data) => {
//           if (data.id === id) {
//             data.checked = true;
//           } else {
//             data.checked = false;
//           }
//         });
//       };
//     return <useSurveyContext.Provider>
//         {children}
//     </useSurveyContext.Provider>
// }