import { ReactNode } from "react";

import './vertical-center-container.style.css'

const VerticalCenterContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="vertical-center-wrapper">
      <div className="vertical-center-content">
        {children}
      </div>
    </div>
  )
}

export default VerticalCenterContainer;
