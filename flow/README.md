# `flow/` folder

## Framework

### File Name
- Use `stage[i].js` as file name.

### Component
- With default namespace, export a React component.
- The exported component uses `components/PanelsComponent` as default layout. To specify another layout component, set the component's `Layout` property as that layout component. e.g. `stage0.js`.
- The component receives `doRun` and `nextPage` props, which should directly propagate to `ContinueButton`. It will invoke `beforeMovingOn` and change the button to show "Next Page", and then move to the next stage after clicking that.

### `beforeMovingOn`
- With `beforeMovingOn` namespace, export a function that does what the button says for the given stage.
- Things like invoking `/actions/some_action` should go here, and it should return a `Promise`.

## Template

```javascript
import { ContinueButton } from "../components";
import fetch from "isomorphic-fetch";

export default (props) => (
  <div className="animated fadeIn">
    <h1 className="title is-spaced"> TITLE GOES HERE </h1>
    <div className="stage-content">
      CONTNET GOES HERE
    </div>
    <ContinueButton text=" BUTTON TEXT " {...props} />
  </div>
)

export const beforeMovingOn = () => (
  fetch("/actions/SOME_ACTION")
    .then(res => {
      if (!res.ok) {
        throw new Error("Do ACTION Unsuccessful");
      } else {
        return res.json();
      }
    })
);
```
