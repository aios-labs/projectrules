---
description: "Guidelines for nargout"
globs: "**/*"
__meta__type: "feature"
__meta__repo: "ewail/FreeMat"
__meta__tags: ["FreeMat","Functions","Scripting","Return Values","Programming"]
__meta__rate: 7
---

 Usage

The nargout function computes the number of return values
requested from a function when it was called. The general
syntax for its use

     y = nargout

FreeMat allows for fewer return values to be requested from
a function than were declared, and nargout can be used to
determine exactly what subset of the functions outputs are
required.
You can also use nargout on a function handle to return the
number of input arguments expected by the function

    y = nargout(fun)

where fun is the name of the function (e.g. 'sin') or a
function handle.


 Example

Here is a function that is declared to return five values,
and that simply prints the value of nargout each time it is
called.

       nargouttest.m


  function [a1,a2,a3,a4,a5] = nargouttest
    printf('nargout = %d\n',nargout);
    a1 = 1; a2 = 2; a3 = 3; a4 = 4; a5 = 5;


  --> a1 = nargouttest
  nargout = 1

  a1 =
   1

  --> [a1,a2] = nargouttest
  nargout = 2
  a1 =
   1

  a2 =
   2

  --> [a1,a2,a3] = nargouttest
  nargout = 3
  a1 =
   1

  a2 =
   2

  a3 =
   3

  --> [a1,a2,a3,a4,a5] = nargouttest
  nargout = 5
  a1 =
   1

  a2 =
   2

  a3 =
   3

  a4 =
   4

  a5 =
   5

  --> nargout('sin')

  ans =
   1

  --> y = @sin

  y =
   @sin
  --> nargout(y)

  ans =
   1


* FreeMat_Documentation
* Functions_and_Scripts
* Generated on Thu Jul 25 2013 17:17:14 for FreeMat by
  doxygen_ 1.8.1.1

