import React from 'react'
import ErrorComponent from './ErrorComponent';

test('ErrorComponent', () => {
    const fakeFunc = jest.fn();
    fakeFunc.mockReturnValue(<div>An Error Occurred. I don't know what to do! Contact support at abcd-efgh-ijkl</div>);
    ErrorComponent(); 
  })