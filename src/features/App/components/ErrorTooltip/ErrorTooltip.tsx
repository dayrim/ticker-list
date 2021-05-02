import React from "react";
import { Tooltip } from "@material-ui/core";

import useStyles from "./ErrorTooltip.style";

interface PropTypes {
  children: any,
  title?: string
}
const ErrorTooltip = ({ children, title = "" }: PropTypes) => {
  const classes = useStyles();

  return (
    <Tooltip
      arrow
      placement="top-end"
      open={!!title}
      title={title}
      classes={{
        tooltip: classes.tooltip,
        arrow: classes.arrow,
      }}
    >
      {children}
    </Tooltip>
  );
};

export default ErrorTooltip;
