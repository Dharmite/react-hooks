# React hooks explained

React hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8 to allow developers to use state and other React features without writing a class component.

## Commonly Used Hooks

1. **useState**: Allows you to add state to a functional component.
  ```jsx
  const [count, setCount] = useState(0);
  ```

2. **useEffect**: Lets you perform side effects in function components.
  ```jsx
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
  ```

3. **useContext**: Accepts a context object and returns the current context value.
  ```jsx
  const value = useContext(MyContext);
  ```

4. **useReducer**: An alternative to `useState` for more complex state logic.
  ```jsx
  const [state, dispatch] = useReducer(reducer, initialState);
  ```

5. **useRef**: Returns a mutable ref object whose `.current` property is initialized to the passed argument.
  ```jsx
  const inputEl = useRef(null);
  ```

6. **useMemo**: Returns a memoized value.
  ```jsx
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```

7. **useCallback**: Returns a memoized callback.
  ```jsx
  const memoizedCallback = useCallback(() => {
    doSomething(a, b);
  }, [a, b]);
  ```

## Rules of Hooks

- Only call hooks at the top level. Don’t call hooks inside loops, conditions, or nested functions.
- Only call hooks from React function components or custom hooks.

## Custom Hooks

You can create your own hooks to reuse stateful logic between components. A custom hook is a JavaScript function whose name starts with "use" and that may call other hooks.

Example:
```jsx
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
   function handleStatusChange(status) {
    setIsOnline(status.isOnline);
   }

   ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
   return () => {
    ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
   };
  }, [friendID]);

  return isOnline;
}
```

