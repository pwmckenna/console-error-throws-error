# console-error-throws-error

#### What?

Patches `console.error` to throw.

#### Why?

I want React PropType warnings to cause my tests to fail.

#### How?

`npm install console-error-throws-error --save-dev`

`mocha --require console-error-throws-error`
