import React from "react";
import ReactDOM from "react-dom";

export const NewWindow = ({ children }) => {
  const [win, setWin] = React.useState(null)
  React.useEffect(() => {
    setWin(window.open())
  }, [])

  return win == null ? null : ReactDOM.createPortal(children, win.document.body);
}
