import React from "react";

type Preference = {
  title: string;
  checked: boolean;
};

type PreferenceContextType = {
  preferences: Preference[];
  setPreferences: React.Dispatch<React.SetStateAction<Preference[]>>;
};

const initialPreferenceState: Preference[] = [
  { title: "GlopilotX", checked: false },
  { title: "Car hourly", checked: false },
  { title: "Rides", checked: false },
  { title: "Packages", checked: false },
];

export const PreferenceContext = React.createContext<
  PreferenceContextType | undefined
>(undefined);

const PreferenceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [preferences, setPreferences] = React.useState(initialPreferenceState);

  return (
    <PreferenceContext.Provider value={{ preferences, setPreferences }}>
      {children}
    </PreferenceContext.Provider>
  );
};

export default PreferenceProvider;
