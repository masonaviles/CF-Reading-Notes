# 05 Thinking in React

## Start With A Mock

### Step 1: Break The UI Into A Component Hierarchy
- the single responsibility principle, that is, a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.
  
### Step 2: Build A Static Version in React
- you’ll want to build components that reuse other components and pass data using props
- don't use state or make functionality right now

### Step 3: Identify The Minimal (but complete) Representation Of UI State

### Step 4: Identify Where Your State Should Live
For each piece of state in your application:

- Identify every component that renders something based on that state.
- Find a common owner component (a single component above all the components that need the state in the hierarchy).
- Either the common owner or another component higher up in the hierarchy should own the state.
- If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.

### Step 5: Add Inverse Data Flow
