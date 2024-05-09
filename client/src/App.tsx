import { useState } from "react";
import { UserType } from "./types";
import { Tabs, Tab } from "@mui/material";
import OrganizerPage from "./page/OrganizerPage";
import VisitorPage from "./page/VisitorPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function Events() {
  const [userType, setUserType] = useState<UserType>("visitor");

  const handleChange = (_: React.SyntheticEvent, newValue: UserType) => {
    setUserType(newValue);
  };

  return (
    <div className="flex flex-col gap-y-[10px]">
      <Tabs onChange={handleChange} centered value={userType}>
        <Tab label="Visitor" value={"visitor"} />
        <Tab label="Admin" value={"admin"} />
      </Tabs>
      {userType === "admin" ? <OrganizerPage /> : <VisitorPage />}
    </div>
  );
}

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Events />
    </QueryClientProvider>
  );
}

export default App;
