import { ReactNode } from "react";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type warningBoxProps = {
  mode: "warning";
  severity?: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | warningBoxProps;

const InfoBox = (props: InfoBoxProps) => {
  //info, warning
  if (props.mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{props.children}</p>
      </aside>
    );
  }

  return (
    <aside className={`infobox infobox-warning warning--${props.severity}`}>
      <h2>Warning</h2>
      <p>{props.children}</p>
    </aside>
  );
};

export default InfoBox;
