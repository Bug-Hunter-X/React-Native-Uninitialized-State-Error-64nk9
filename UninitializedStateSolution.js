```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    // Simulate asynchronous data fetching
    setTimeout(() => {
      setCount(5);
      setDataLoaded(true);
    }, 1000);
  }, []);

  return (
    <View>
      {dataLoaded ? (
        <Text>Count: {count}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default MyComponent;
```