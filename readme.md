# react-bitcoin-history

#### local setup
```git clone https://github.com/e-e/react-bitcoin-history.git```
```cd react-bitcoin-history```
```npm link```

Then in your actual project directory:
``` npm link react-bitcoin-history```


```jsx
import BitcoinHistory from 'react-bitcoin-history';

...

<BitcoinHistory /> // will render with form input to enter btc address
// or
<BitcoinHistory address="..." /> // will load transactions for provided address when component loads
```

Click on a transaction item to expand:
![](https://i.imgur.com/X2OREFn.png)
