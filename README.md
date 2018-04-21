# redux-saga-beginner-tutorial
Companion Repo for [Redux/Redux-saga beginner tutorial](https://github.com/redux-saga/redux-saga/blob/master/docs/introduction/BeginnerTutorial.md)

- Conceptually, a Saga is a separate thread in your application that's solely responsible for side effects (such as asynchronous / network requests, and impure things like accessing the browser's cache).

- A saga is a long-lived transaction that can be written as a sequence of transactions, which can be interleaved.

- Redux-sagas:
  - Redux-Sagas operate as ES6 generator functions, that yield objects to the redux-saga middleware
  - Can run indefinitely.
  - Can be woken up when a specific action is dispatched.
  - Can dispatch actions.
  - Can access the application state.

- Every Saga generator, when called, returns an iterator object. When the iterator's ```next()``` method is called, the saga's code runs until the first / next yield statement, at which point an object is returned (```yield```ed).
- This yielded object contains:
  - a ```done``` property, which holds a boolean value identifying whether the saga has completed its last yield statement.
  - a ```value``` property, containing the value being yielded from the saga.

  
