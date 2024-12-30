# React Native Uninitialized State Error

This repository demonstrates a common error in React Native applications: attempting to access a state variable before it has been initialized. The error often manifests as `undefined is not an object` when trying to access properties of an uninitialized state. 

The `UninitializedStateBug.js` file shows the erroneous code that causes the error. The solution is provided in `UninitializedStateSolution.js`, demonstrating a proper way to handle the initialization of state and access state variables only after they have been set.  This demonstrates common solutions, including conditional rendering and the `useEffect` hook.