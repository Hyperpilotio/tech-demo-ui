export default ({ status, children }) => {

  let cssClass = "";
  switch (status) {
    case "good":
      cssClass = "is-success";
      break;
    case "warn":
      cssClass = "is-warning";
      break;
    case "bad":
      cssClass = "is-danger";
      break;
    case "none":
      cssClass = "is-grey-dark";
      break;
  }

  return <div className={`box ${cssClass}`}>{children}</div>;
}
