import { ActionableButton } from "./shared/ActionableButton";
import Header from "./components/Header";
import GlobalStyleProvider from "./components/GlobalStyleProvider";
const App = () => (
  <>
    <GlobalStyleProvider />
    <Header />
    <ActionableButton active={true} primary title="Click me" />
  </>
);

export default App;
