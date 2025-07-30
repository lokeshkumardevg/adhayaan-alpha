import { Viewer, Worker } from "@react-pdf-viewer/core";
import React from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

import {
  toolbarPlugin,
  TransformToolbarSlot,
  ToolbarSlot,
} from "@react-pdf-viewer/toolbar";

const Pdf = ({ pdfLink }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const toolbarPluginInstance = toolbarPlugin();
  const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;
  //   const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;
  const TransformToolbarSlot = (ToolbarSlot) => ({
    ...ToolbarSlot,
    // These slots will be empty
    Download: () => <></>,
    Print: () => <></>,
    // EnterFullScreen: () => <></>,
    // SwitchTheme: () => <></>,
  });
  return (
    <div
      style={{
        border: "1px solid rgba(0, 0, 0, 0.3)",
        height: "100%",
      }}
    >
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js"></Worker>
      <Toolbar>{renderDefaultToolbar(TransformToolbarSlot)}</Toolbar>
      <Viewer fileUrl={pdfLink} plugins={[toolbarPluginInstance]} />
    </div>
  );
};

export default Pdf;
