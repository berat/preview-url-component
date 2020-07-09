
# Preview URL Component
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/berat/preview-url-component/issues) [![npm version](https://badge.fury.io/js/preview-url-component.svg)](https://badge.fury.io/js/preview-url-component) <br>
[![https://nodei.co/npm/preview-url-component.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/preview-url-component.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/preview-url-component)

> #### The react component that easily get meta tags from the target URL.
> A component that you will probably want to use to show a preview of the target url. 
<br>

## Installation
Install `preview-url-component` with npm:

`npm i preview-url-component`

with yarn:

`yarn add preview-url-component`

<br>

## Example

To be practical you can see live in my react application [https://previewurl.surge.sh/](https://previewurl.surge.sh/)


<br>

## Usage
Add the component to the section you want to show and remember to use the parameters. That's all.

```js
import React from 'react';
import Preview from  'preview-url-component'

const App = () => {
    return (
        <Preview
            url="URL_ADDRESS"
            loadingText="loading..."
            notFound="URL Not Found!"
        />
    )
}
export default App;
```

<br>


## Params

| Parameters        | Description                        
|------------------|------------------------------------|
| url         | Enter the url you want to preview. (Require)                 |
| loadingText         | You can change the text indicating that the data was loaded while shooting. (Default= "loading...")                 |
| notFound         | If there was a problem while capturing the data, you can change the not found error text. (Default= "NOT FOUND! Check to URL")                |

### Thank you for your watching
To follow me [Github](https://github.com/berat) - [Twitter](https://twitter.com/beratbozkurt0) - [Linkedin](https://www.linkedin.com/in/beratbozkurt/)

