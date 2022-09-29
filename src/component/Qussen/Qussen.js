

import React from 'react';

const Qussen = () => {
    return (
        <div>
            <h3>How does work react ?</h3>
            <p>
                React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes
            </p>
            
            <h3>Difference between props and state ?</h3>
            <p>Props</p>
            <p>
                The Data is passed from one component to another.
                It is Immutable (cannot be modified).
                Props can be used with state and functional components.
                Props are read-only.
            </p>
            <p>State</p>
            <p>
                The Data is passed within the component only.It is Mutable ( can be modified).State can be used only with the state components/class component (Before 16.0).State is both read and write.
            </p>

            <h3>What can be done with useeffect ?</h3>
            <p>
                The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.
            </p>
        </div>
    );
};

export default Qussen;