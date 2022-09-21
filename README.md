# LKT Date Tools

## Functions

### isDate

Checks if a given var is a Date obj

| Arg         | Type | Default | Description    |
|-------------|------|---------|----------------|
| target      | any  |         | Var to check   |

#### Usage

```js
import {isDate} from "lkt-date-tools";

isDate(new Date()); // Returns true
isDate('date'); // Returns false
```

### isoToDate

Converts a ISO formatted date to a Date object

| Arg    | Type   | Default | Description       |
|--------|--------|---------|-------------------|
| str    | string |         | String to convert |

#### Usage

```js
import {isoToDate} from "lkt-date-tools";


const date = isoToDate('2020-04-23T00:00:00');
```

### ymdToDate

Converts a 'Y-m-d' formatted date to a Date object

| Arg    | Type   | Default | Description       |
|--------|--------|---------|-------------------|
| str    | string |         | String to convert |

#### Usage

```js
import {ymdToDate} from "lkt-date-tools";


const date = ymdToDate('2020-04-23');
```

### time

Returns current time

#### Usage

```js
import {time} from "lkt-date-tools";


const stamp = time();
```

### getStampInMilliseconds

Returns current timestamp in milliseconds

#### Usage

```js
import {getStampInMilliseconds} from "lkt-date-tools";


const stamp = getStampInMilliseconds();
```

### getOneYearInSeconds

Returns the seconds in one year

#### Usage

```js
import {getOneYearInSeconds} from "lkt-date-tools";


const stamp = getOneYearInSeconds();
```

### secondsToMilliseconds

Converts from seconds to milliseconds

| Arg     | Type   | Default | Description        |
|---------|--------|---------|--------------------|
| seconds | number |         | Seconds to convert |

#### Usage

```js
import {secondsToMilliseconds} from "lkt-date-tools";


const stamp = secondsToMilliseconds();
```

### dateToTimestamp

Converts a Date object to an unix timestamp

| Arg  | Type | Default | Description     |
|------|------|---------|-----------------|
| date | Date |         | Date to convert |

#### Usage

```js
import {dateToTimestamp} from "lkt-date-tools";


const stamp = dateToTimestamp(new Date());
```