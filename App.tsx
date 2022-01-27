import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthProvider } from "./src/common/contexts/auth";
import Routes from "./src/routes";

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;
