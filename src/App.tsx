import AppRouter from "./routes/AppRouter";
import * as Layout from "@/layouts";

export function App() {
  console.log("launched");
  return (
    <Layout.Wrapper>
      <AppRouter />
    </Layout.Wrapper>
  );
}
