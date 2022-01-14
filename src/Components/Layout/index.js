import Split from "react-split";
import Box from "../Box";

const Layout = () => {
  return (
    <Split
      direction="vertical"
      style={{ height: "100vh", width: "100vw" }}
      minSize={0}
      sizes={[50, 50, 0]}
    >
      <Split
        style={{ height: "50vh", width: "100vw", display: "flex" }}
        minSize={0}
        sizes={[0, 49, 1, 50, 0]}
      >
        <div style={{ backgroundColor: "#eeeeee" }}></div>
        <Split direction="vertical" minSize={0} sizes={[0, 99, 1]}>
          <div style={{ backgroundColor: "#eeeeee" }}></div>
          <Box boxNumber={1} />
          <div style={{ backgroundColor: "#eeeeee" }}></div>
        </Split>

        <div style={{ backgroundColor: "#eeeeee" }}></div>
        <Split direction="vertical" minSize={0} sizes={[0, 99, 1]}>
          <div style={{ backgroundColor: "#eeeeee" }}></div>
          <Box boxNumber={2} />
          <div style={{ backgroundColor: "#eeeeee" }}></div>
        </Split>
        <div style={{ backgroundColor: "#eeeeee" }}></div>
      </Split>
  
      <Split
        style={{ height: "50vh", width: "100vw", display: "flex" }}
        minSize={0}
        sizes={[0, 100, 0]}
      >
        <div style={{ backgroundColor: "#eeeeee" }}></div>
        <Box boxNumber={3} />
        <div style={{ backgroundColor: "#eeeeee" }}></div>
      </Split>

      <div style={{ backgroundColor: "#eeeeee" }}></div>
    </Split>
  );
};
export default Layout;
