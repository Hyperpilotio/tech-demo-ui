export const Badge = ({ placement = "left", className = "", children }) => (
  <span className={`tag is-pulled-${placement} ${className}`}>
    {children}
  </span>
);

export const HealthBadge = ({ status = "success" }) => (
  <Badge placement="right" className={`is-${status} is-outlined`}>
    {
      status === "success" ?
        <i className="fa fa-check" /> :
        <i className="fa fa-exclamation" />
    }
  </Badge>
);
