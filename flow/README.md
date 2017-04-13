# `flow/` folder

## Framework

### File Name
- Use `stage[i].js` as file name.

### Component
- With default namespace, export a React component.
- The exported component uses `components/PanelsComponent` as default layout. To specify another layout component, set the component's `Layout` property as that layout component. e.g. `stage0.js`.
- The component receives a `moveToNextStage` prop, which should directly go to `onClick` prop of `ContinueButton`. It will invoke `beforeMovingOn` and move to the next stage after that.
- The component should wrap the description content with `components/ContentModal`.

### `beforeMovingOn`
- With `beforeMovingOn` namespace, export a function that does what the button says for the given stage.
- Things like invoking `/actions/some_action` should go here, and it should return a `Promise`.

## Template

```javascript
import { ContentModal, ContinueButton } from "../components";
import fetch from "isomorphic-fetch";

export default ({moveToNextStage}) => (
  <div className="animated fadeIn has-text-centered">
    <h1 className="title is-spaced"> TITLE GOES HERE </h1>
    <div className="info-and-button">
      <ContentModal>
        CONTNET GOES HERE
      </ContentModal>
      <ContinueButton onClick={moveToNextStage}> BUTTON TEXT </ContinueButton>
    </div>
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
